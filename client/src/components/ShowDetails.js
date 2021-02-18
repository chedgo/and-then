import React from "react";
import Season from "./Season"

export default function ShowDetails({ showDetails }) {
  console.log("showDetails:", showDetails);
let showId = showDetails.id
  // let seasons = [];

  // for (let i = 0; i < showDetails.number_of_seasons; i++) {
  //   seasons.push([]);
  //   for (let j = 0; j < showDetails.seasons[i].episode_count; j++) {
  //     seasons[i].push(j + 1);
  //   }
  // }
  return showDetails.seasons.map((season, index) => {
    return <Season season={season} showId={showId} seasonNo={index+1} />;
  });
}
