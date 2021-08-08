import React from "react";
import "./css/SongRow.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useStateProvider } from "./StateProvider";

function SongRow({ track }) {
  const [{ spotify, discoverWeekly }, dispatch] = useStateProvider();

  const Play = (uri) => {
    spotify.play({ uris: [uri] }).then((response) => {
      spotify.getMyCurrentPlayingTrack().then((response) => {
        console.log("Playyyying", response);
        dispatch({
          type: "SET_ITEM",
          item: response.item,
        });
        dispatch({ type: "SET_PLAYING", playing: true });
      });
    });
  };

  return (
    <div className="Song_row" onClick={Play(track?.uri)}>
      <img src={track?.album.images[0].url} alt="" />
      <div className="Song_row_info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artists?.map((artist) => artist?.name).join(", ")}
          <br></br>
          {"Album: " + track?.album?.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
