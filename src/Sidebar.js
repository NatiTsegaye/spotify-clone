import React from "react";
import "./css/Sidebar.css";
import SidebarElement from "./SidebarElement";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProvider } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateProvider();
  console.log("playlist from sidebar", playlists);
  return (
    <div className="mySideBar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarElement title="Home" Icon={HomeIcon} />
      <SidebarElement title="Search" Icon={SearchIcon} />
      <SidebarElement title="Library" Icon={LibraryMusicIcon} />
      <strong className="playlists">PLAYLISTS</strong>
      <hr />
      {console.log("inside", playlists)}
      {playlists?.items?.map((playlist) => (
        <SidebarElement title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
