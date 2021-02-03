const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { TVDBKey } = require("./env");
const googleAuth = require("./middleware/googleAuth");
const MovieDB = require("node-themoviedb");
const mdb = new MovieDB(TVDBKey);
//middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(googleAuth);

//routes

//create a user
app.post("/users", async (req, res) => {
  try {
    const { userId, userName } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (user_id, user_name, date_joined) VALUES ($1, $2, current_timestamp) ON CONFLICT (user_id) DO NOTHING RETURNING *",
      [userId, userName]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
//delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const userDelete = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [req.params.id]
    );
    res.json(`deleted user ${req.params.id}`);
  } catch (error) {
    console.error(error.message);
  }
});
//get user's shows
let prepareShowArray = (response) => {
  let ShowsArray = [];
  response.rows.forEach((showObject) => {
    ShowsArray.push(Object.values(showObject));
  });
  let flattenedShowsArray = ShowsArray.flat();
  return flattenedShowsArray.map((x) => +x);
};

app.get("/users/:googleId", async (req, res) => {
  try {
    const googleId = req.params.googleId;
    const showsResponse = await pool.query(
      "SELECT show_id FROM user_shows WHERE user_id =$1;",
      [googleId]
    );
    res.json(prepareShowArray(showsResponse));
  } catch (error) {
    console.error(error.message);
  }
});

//get recommended shows

//find a show
app.get("/showsearch", async (req, res) => {
  try {
    console.log(req.userId);
    const encodedSearchString = encodeURI(req.query.keyword);
    const args = {
      query: { query: encodedSearchString },
    };
    const shows = await mdb.search.TVShows(args);
    res.json(shows);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//subscribe to show
app.post("/users/:googleId/:showId", async (req, res) => {
  try {
    const { googleId, showId } = req.params;
    const newSub = await pool.query(
      "INSERT INTO user_shows (user_id, show_id, date_subscribed) VALUES ($1, $2, current_timestamp) RETURNING *",
      [googleId, showId]
    );
    res.json(newSub);
  } catch (error) {
    console.error(error.message);
  }
});

//unsubscribe to show
app.delete("/users/:googleId/:showId", async (req, res) => {
  try {
    const { googleId, showId } = req.params;
    const newSub = await pool.query(
      "DELETE FROM user_shows WHERE user_Id = $1 AND show_id = $2 RETURNING *",
      [googleId, showId]
    );
    res.json(newSub);
  } catch (error) {
    console.error(error.message);
  }
});
//get episodes of a show
app.get("/:userId/:showId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const showId = req.params.showId;

    const args = {
      pathParameters: {
        tv_id: showId,
      },
    };

    const showDetails = await mdb.tv.getDetails(args);
    res.json(showDetails.data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//mark episodes watched

//mark episodes unwatched

app.listen(5000, () => {
  console.log("listening on 5000");
});
