import React from "react";
import Show from "./Show";

export default function SearchResults({ searchResults }) {
  if (searchResults.length === 0) {
    return <div>no results found</div>;
  }
  return searchResults.map((show) => {
    console.log(show);
    return <Show key={show.id} name={show.name} />;
  });
}
