import React from "react";
import "./css/Banner.css";
import { useStateProvider } from "./StateProvider";
import Header from "./Header";
function Banner({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useStateProvider();
  return (
    <div className="banner">
      <Header spotify={spotify} />
      <div className="info">
        <img src={discoverWeekly?.images[0]?.url} alt="" />
        <div className="info_text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
