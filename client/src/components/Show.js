import React from "react";

export default function Show({ className, id, name, trackShowButton }) {
  let trackShow = () => {
    console.log(name);
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
