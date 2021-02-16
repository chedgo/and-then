import React, { useEffect } from "react";
import useUserShows from "../utils/useUserShows";
import Show from "./Show";
import prepareShowArray from "../utils/prepareShowArray";

export default function UsersShows({ userShows, refetchUserShows }) {
  return userShows.map((show) => {
let preparedArray = prepareShowArray(userShows)
let showIsTracked = preparedArray.includes(+show.show_id);

    return (
      <>
        <Show
          className="tracked-shows"
          showId={show.show_id}
          name={show.show_name}
          trackShowButton
          showIsTracked={showIsTracked}
          refetchUserShows={refetchUserShows}
        />
      </>
    );
  });
}
