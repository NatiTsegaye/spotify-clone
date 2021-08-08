import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./css/Player.css";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="body">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
