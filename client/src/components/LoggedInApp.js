import React from "react";
import MovieSearch from "../components/MovieSearch";
import Logout from "./Logout";
import UsersShows from "./UsersShows";
import useUserShows from "../utils/useUserShows";

export default function LoggedInApp() {
  let { userShows, refetchUserShows } = useUserShows();

  return (
    <>
      <h1>And Then?</h1>
      <p>if you tell me what you watch, i'll tell you what to watch next</p>
      <UsersShows userShows={userShows} refetchUserShows={refetchUserShows} />
      <Logout callback={() => window.location.reload()} />
      <MovieSearch userShows={userShows} refetchUserShows={refetchUserShows} />
    </>
  );
}
