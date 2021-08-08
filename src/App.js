import React, { useEffect, useState } from "react";
import "./css/App.css";
import Login from "./Login";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateProvider } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists, discoverWeekly }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const userToken = getToken();
    window.location.hash = "";

    if (userToken) {
      dispatch({
        type: "SET_TOKEN",
        token: userToken,
      });
      spotify.setAccessToken(userToken);
      //get user
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //get playlist
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlist,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcBXEJe1UtJHL").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: response,
        });
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, []);
  console.log(user);
  console.log("disc", discoverWeekly);
  return <div className="app">{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
