import React from "react";
import MovieSearch from "../components/MovieSearch";
import Logout from "./Logout";
export default function LoggedInApp() {
  return (
    <>
      <Logout />
      <MovieSearch />
    </>
  );
}
