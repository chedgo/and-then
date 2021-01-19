import React from "react";
import Show from "./Show";
import "./SearchResults.css";

export default function SearchResults({ searchResults }) {

  if (searchResults.length === 0) {
    return <div>no results found</div>;
  }
  return searchResults.map((show) => {
    return (
      <div>
        <Show className="search-results__show" id={show.id} name={show.name} trackShowButton />
        
      </div>
    );
  });
}
