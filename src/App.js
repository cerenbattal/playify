import React, { useEffect } from 'react';
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    console.log("The token is: ", token)
  }, [])
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
