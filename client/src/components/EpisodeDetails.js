import React, { useState, useEffect } from "react";
import fetcher from "../utils/fetcher";

export default function EpisodeDetails({ seasonId, showId }) {
  const [episodeDetails, setEpisodeDetails] = useState(null);

  useEffect(() => {
    const getEpisodeDetails = async () => {
      const url = new URL(
        `http://localhost:5000/episodes/${showId}/${seasonId}`
      );
      let response = await fetcher(url, { method: "GET" }).then((res) =>
        res.json()
      );
      setEpisodeDetails(response);
    };

    getEpisodeDetails();
  }, [seasonId, showId]);

  return (
    episodeDetails &&
    episodeDetails.episodes.map((episode) => {
      return <div>{episode.episode_number}</div>;
    })
  );
}
