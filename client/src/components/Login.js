import React from "react";
import { GoogleLogin } from "react-google-login";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const clientId =
  "808431265222-qhr04i4mvhatbchqhdg9urlirub77i12.apps.googleusercontent.com";

const refreshTokenSetup = (res) => {
  let refreshTiming = res.tokenObj.expires_in * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = newAuthRes.expires_in * 1000;
    console.log("newAuthRes:", newAuthRes);
    console.log("new auth token:", newAuthRes.id_token);
    setTimeout(refreshToken, refreshTiming); // second refresh timer
  };
  setTimeout(refreshToken, refreshTiming); //first refresh timer
};

// const handleLogin = async (googleData) => {
//   const res = await fetch("http://localhost:5000/users", {
//     method: "POST",
//     body: JSON.stringify({
//       token: googleData.tokenId,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();
//   // store returned user somehow
// };

export default function Login({ setName }) {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    setName(res.profileObj.name);
    refreshTokenSetup(res);
    cookies.set("auth-token-id", res.tokenId, {
      // domain: "localhost:3000",
    });
    // document.cookie = `auth-token-id=${res.tokenId}`;
    // handleLogin(res);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
