import React from "react";
import Login from "./Login";

export default function LoggedOutApp() {
  return (
    <div>
      <h1>And Then?</h1>
      <p>if you tell me what you watch, i'll tell you what to watch next</p>
      <p>please log in with google.</p>
      <Login callback={() => window.location.reload()} />
    </div>
  );
}
