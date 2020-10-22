import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import "./App.css";
import Login from "./Login";
import Player from "./Player"
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState()

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      console.log("The token is: ", _token)
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        console.log(user)
      })
    }
    
  }, [])
  return (
    <div className="app">
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
