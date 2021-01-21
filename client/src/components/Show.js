import React from "react";
import Cookies from "universal-cookie";
import useUser from "../utils/useUser";

const cookies = new Cookies();

export default function Show({ className, id, name, trackShowButton }) {
  let user = useUser();
  let trackShow = () => {
    
  };

  return (
    <>
      <div className={className} key={id}>
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
