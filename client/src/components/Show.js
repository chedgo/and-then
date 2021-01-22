import React from "react";
import useUser from "../utils/useUser";
import fetcher from "../utils/fetcher.js";

export default function Show({ className, showId, name, trackShowButton }) {
  let user = useUser();
  let trackShow = () => {
    const url = new URL(
      `http://localhost:5000/users/${user.googleId}/${showId}`
    );
    fetcher(url, { method: "POST" }).catch((error) => alert(error));
  };

  return (
    <>
      <div className={className} key={showId}>
        {name}
      </div>
      {trackShowButton && (
        <button onClick={trackShow} className="search-results__track-button">
          track this show
        </button>
      )}
    </>
  );
}
