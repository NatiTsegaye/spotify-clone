import React from "react";
import "./css/SidebarElements.css";
function SidebarElement({ title, Icon }) {
  return (
    <div className="elements">
      {Icon && <Icon className="Icon" />}
      {Icon ? <h4 className="title">{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarElement;
