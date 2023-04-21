import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

function GoogleAuth() {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return(
        <div>
            <GoogleOAuthProvider 
                clientId='106729516681-vlhsmosrl8bd6gsooo3hks2o3m2klila.apps.googleusercontent.com'>
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
        </div>
    );
}
export default GoogleAuth;