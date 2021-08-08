import React from "react";
import { useStateProvider } from "./StateProvider";
import SongRow from "./SongRow";
function Songs() {
  const [{ spotify, discoverWeekly }, dispatch] = useStateProvider();

  return (
    <div>
      {discoverWeekly?.tracks?.items.map((item) => (
        <SongRow track={item?.track} />
      ))}
    </div>
  );
}

export default Songs;
