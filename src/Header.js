import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateProvider } from "./StateProvider";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateProvider();

  return (
    <div className="myHeader">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        ></input>
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
