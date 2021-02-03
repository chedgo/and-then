import "./App.css";
import React from "react";
import useUser from "./utils/useUser";
import LoggedInApp from "./components/LoggedInApp";
import LoggedOutApp from "./components/LoggedOutApp";

function App() {
  const user = useUser();
  return user ? <LoggedInApp /> : <LoggedOutApp />;
}

export default App;
