import React from "react";
import "./css/Login.css";
import { url } from "./spotify";

function Login() {
  return (
    <div className="myLogin">
      <img
        src="https://www.ieee-security.org/TC/EuroSP2019/images/Spotify-symbol.jpg"
        alt="SPOTIFY"
      />
      <a href={url}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
