DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_shows;

CREATE TABLE users (
  user_id NUMERIC PRIMARY KEY NOT NULL,
  user_name VARCHAR NOT NULL,
  date_joined TIMESTAMP NOT NULL
);

CREATE TABLE user_shows (
  subscription_id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
  show_id NUMERIC NOT NULL, /*add character limit*/
  date_subscribed TIMESTAMP NOT NULL,
  last_ep_watched VARCHAR NULL, /* change to VARCHAR(n) once format is clear*/
  user_id NUMERIC NOT NULL REFERENCES users (user_id)
   );

