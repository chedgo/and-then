const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    req.userId = payload.sub;
    next();
  } catch (error) {
    res.status(401).send("authentication error!!!");
  }
};
module.exports = googleAuth;
