import React from "react";
import { GoogleLogout } from "react-google-login";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const clientId =
  "808431265222-qhr04i4mvhatbchqhdg9urlirub77i12.apps.googleusercontent.com";

export default function Logout() {
  const onSuccess = () => {
    alert("Logged Out");
    cookies.remove("user-object");
    cookies.remove("auth-token-id");
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
