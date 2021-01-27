import React, { useState } from "react";
import Show from "./Show";
import "./SearchResults.css";
import useUser from "../utils/useUser";
import useUserShows from "../utils/useUserShows";

export default function SearchResults({ searchResults }) {
  let user = useUser();
  let { userShows, refetchUserShows } = useUserShows();
  if (searchResults.length === 0) {
    return <div>no results found</div>;
  }

  return searchResults.map((show) => {
    let showIsTracked = userShows.includes(show.id);
    return (
      <div>
        <Show
          className="search-results__show"
          showId={show.id}
          name={show.name}
          trackShowButton
          showIsTracked={showIsTracked}
          refetchUserShows={refetchUserShows}
        />
      </div>
    );
  });
}
