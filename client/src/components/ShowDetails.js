import React from "react";

export default function ShowDetails({ showDetails }) {
  console.log("showDetails:", showDetails);

  let seasons = [];

  for (let i = 0; i < showDetails.number_of_seasons; i++) {
    seasons.push([]);
    console.log(showDetails.seasons[i]);
    for (let j = 0; j < showDetails.seasons[i].episode_count; j++) {
      seasons[i].push(j + 1);
    }
  }
  console.log("seasons:", seasons);
  return <div>{showDetails.overview}</div>;
}
