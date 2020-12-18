import "./App.css";
import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import SearchResults from "./components/SearchResults";
import { mockSearchResults } from "./mockSearchResults";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Login setName={setName} />
      <div>{name}</div>
      <Logout setName={setName}/>
      <MovieSearch />
    </>
  );
}

export default App;
