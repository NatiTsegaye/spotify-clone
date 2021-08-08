import React from "react";
import "./css/Body.css";
import Header from "./Header";
import { useStateProvider } from "./StateProvider";
import Banner from "./Banner";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Songs from "./Songs";

function Body({ spotify }) {
  return (
    <div className="myBody">
      <Banner spotify={spotify} />
      <hr />
      <div className="body_icons">
        <PlayCircleFilledWhiteIcon
          className="body_green_play"
          style={{ fontSize: 60 }}
        />
        <FavoriteIcon className="body_green_fav" fontSize="large" />
        <MoreHorizIcon className="more_button" />
      </div>
      <Songs />
    </div>
  );
}

export default Body;
