import React, { useState } from "react";
import Show from "./Show";
import "./SearchResults.css";
import useUser from "../utils/useUser";
import useUserShows from "../utils/useUserShows";
import prepareShowArray from "../utils/prepareShowArray";

export default function SearchResults({
  searchResults,
  userShows,
  refetchUserShows,
}) {
  let user = useUser();
  if (searchResults.length === 0) {
    return <div>no results found</div>;
  }

  return searchResults.map((show) => {
    let showIsTracked = prepareShowArray(userShows).includes(show.id);
    return (
      <div>
        <Show
          className="search-results__show"
          showId={show.id}
          name={show.name}
          trackShowButton
          showIsTracked={showIsTracked}
          refetchUserShows={refetchUserShows}
          userShows={userShows}
        />
      </div>
    );
  });
}
