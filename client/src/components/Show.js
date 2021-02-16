import React, { useState } from "react";
import useUser from "../utils/useUser";
import fetcher from "../utils/fetcher.js";
import ShowDetails from "./ShowDetails";

export default function Show({
  className,
  showId,
  name,
  trackShowButton,
  showIsTracked,
  refetchUserShows,
}) {
  const [showShowDetails, setShowShowDetails] = useState(false);
  const [showDetails, setShowDetails] = useState({});

  let user = useUser();

  let trackShow = () => {
    const url = new URL(
      `http://localhost:5000/users/${user.googleId}/${showId}`
    );
    let bodyData = { name: name };
    fetcher(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then(() => {
        refetchUserShows();
      })

      .catch((error) => alert(error));
  };

  let untrackShow = () => {
    const url = new URL(
      `http://localhost:5000/users/${user.googleId}/${showId}`
    );
    fetcher(url, { method: "DELETE" })
      .then(() => {
        refetchUserShows();
      })
      .catch((error) => alert(error));
  };

  let buttonText = showIsTracked ? "tracking" : "track this show";
  let onClickTrackShow = showIsTracked ? untrackShow : trackShow;

  const onClickShowDetails = async () => {
    const url = new URL(`http://localhost:5000/${user.googleId}/${showId}`);
    let response = await fetcher(url, { method: "GET" }).then((res) =>
      res.json()
    );
    setShowDetails(response);

    //   .then(async (res) => {
    //     let showDetails = await res.json();
    //     return showDetails;
    //   })
    //   .catch((error) => alert(error));
    // return showDetails;

    setShowShowDetails(!showShowDetails);
    // console.log(getShowDetails());
  };
  return (
    <>
      <div className={className} key={showId}>
        {name}
      </div>
      {trackShowButton && (
        <button
          onClick={onClickTrackShow}
          className="search-results__track-button"
        >
          {buttonText}
        </button>
      )}
      <button onClick={onClickShowDetails}>show details</button>
      {showShowDetails && <ShowDetails showDetails={showDetails} />}
    </>
  );
}
