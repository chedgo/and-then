import React from 'react';
import { GoogleLogin } from 'react-google-login'

const clientId = '808431265222-qhr04i4mvhatbchqhdg9urlirub77i12.apps.googleusercontent.com';

export default function Login(){
  const onSuccess = (res) =>{
    console.log('[Login Success] currentUser:',res.profileObj)
  }

  const onFaliure = (res) =>{
    console.log('[Login Failed] res:', res);

  }
return(
  <div>
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFaliure}
    cookiePolicy={'single_host_origin'}
    style={{ marginTop: '100px'}}
    isSignedIn={true}
    />
  </div>
)

}

