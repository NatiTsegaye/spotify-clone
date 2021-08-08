import React from "react";
import "./css/Footer.css";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useStateProvider } from "./StateProvider";

function Footer() {
  const [{ spotify, playing }, dispatch] = useStateProvider();

  const PlayPause = () => {
    if (playing) {
      spotify.pause();
    } else spotify.play();
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
  };

  const next = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((track) => {
      dispatch({
        type: "SET_ITEM",
        item: track.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const prev = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((track) => {
      dispatch({
        type: "SET_ITEM",
        item: track.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="myFooter">
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
          alt=""
        />
        <div className="songInfo">
          <h4>The Weeknd</h4>
          <p>Blinding Lights</p>
        </div>
      </div>
      <div className="center">
        <ShuffleIcon className="green" />
        <SkipPreviousIcon onClick={prev} className="icon" />
        <PlayCircleOutlineIcon
          onClick={PlayPause}
          className="icon"
          fontSize="large"
        />
        <SkipNextIcon onClick={next} className="icon" />
        <RepeatIcon className="green" />
      </div>

      <div className="right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
