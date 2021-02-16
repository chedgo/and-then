import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function useUser() {
  const [user, setUser] = useState(null);
  let resetUser = () => {
    setUser(cookies.get("user-object"));
  };
  useEffect(() => {
    // TODO handle logging out
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    // }
    cookies.addChangeListener((name, value) => {
      console.log("name:", name, "value:", value);
      if (name === "user-object") {
        setUser(value);
      }
    });
    resetUser();
  }, []);

  return user;
}
