import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO handle logging out
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    // }

    setUser(cookies.get("user-object"));
  }, []);
  
  return user;
}
