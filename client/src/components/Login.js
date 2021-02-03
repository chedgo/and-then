import React from "react";
import { GoogleLogin } from "react-google-login";
import Cookies from "universal-cookie";
import fetcher from "../utils/fetcher";
const cookies = new Cookies();

const clientId =
  "808431265222-qhr04i4mvhatbchqhdg9urlirub77i12.apps.googleusercontent.com";

const refreshTokenSetup = (res) => {
  let refreshTiming = res.tokenObj.expires_in * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = newAuthRes.expires_in * 1000;
    // console.log("newAuthRes:", newAuthRes);
    // console.log("new auth token:", newAuthRes.id_token);
    setTimeout(refreshToken, refreshTiming); // second refresh timer
  };
  setTimeout(refreshToken, refreshTiming); //first refresh timer
};

export default function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    refreshTokenSetup(res);
    cookies.set("user-object", res.profileObj);
    cookies.set("auth-token-id", res.tokenId, {});

    const url = new URL(`http://localhost:5000/users`);
    let bodyData = {
      userId: res.profileObj.googleId,
      userName: res.profileObj.name,
    };
    fetcher(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
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
