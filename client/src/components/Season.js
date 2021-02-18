import React, { useState } from "react";
import EpisodeDetails from "./EpisodeDetails";

export default function Season({ season, showId, seasonNo }) {
  const [showEpisode, setShowEpisode] = useState(false);

  let handleOnClick = () => {
    setShowEpisode(!showEpisode);
  };
  // console.log(season);
  return (
    <>
      <div onClick={handleOnClick}>{season.name}</div>
      {showEpisode && <EpisodeDetails seasonId={seasonNo} showId={showId} />}
    </>
  );
}
