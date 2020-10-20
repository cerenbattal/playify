import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      ></img>

      {/* Login with spotify button */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
