import { useState, useEffect } from "react";
import fetcher from "./fetcher";
import useUser from "./useUser";

export default function useUserShows() {
  const [userShows, setUserShows] = useState([]);
  const user = useUser();
  const fetchTrackedShows = () => {
    if (!user) {
      console.log("not logged in");
    } else {
      const url = new URL(`http://localhost:5000/users/${user.googleId}`);

      fetcher(url, { method: "GET" })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUserShows(res);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    fetchTrackedShows();
  }, [user]);

  return { userShows, refetchUserShows: fetchTrackedShows };
}
