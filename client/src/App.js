import "./App.css";
import React from "react";
import MovieSearch from "./components/MovieSearch";
import SearchResults from "./components/SearchResults";
import { mockSearchResults } from "./mockSearchResults";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Login />
      <Logout />
      <MovieSearch />
    </>
  );
}

export default App;
