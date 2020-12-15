import React from "react";
import Movie from "./Movie";

export default function SearchResults({ searchResults }) {
  console.log(searchResults);
  return searchResults.map((movie) => {
    return <Movie name={movie.name} />;
  });
}
