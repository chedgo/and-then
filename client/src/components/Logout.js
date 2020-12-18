import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "808431265222-qhr04i4mvhatbchqhdg9urlirub77i12.apps.googleusercontent.com";

export default function Logout({ setName }) {
  const onSuccess = () => {
    alert("Logged Out");
    setName("");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Log Out"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}
