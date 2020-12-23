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
      "INSERT INTO users (user_id, user_name, date_joined) VALUES ($1, $2, current_timestamp) RETURNING *",
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

//get recommended shows

//find a show
app.get("/showsearch", async (req, res) => {
  try {
    console.log(req.userId);
    const encodedSearchString = encodeURI(req.query.keyword);
    const args = {
      query: { query: encodedSearchString },
    };
    const movie = await mdb.search.TVShows(args);
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
//subscribe to show

//unsubscribe to show

//mark episodes watched

//mark episodes unwatched

app.listen(5000, () => {
  console.log("listening on 5000");
});
