import React from "react";
import Avatar from "./Avatar";

function SideNAvBar() {
  return (
    <div className="flex items-start w-1/5 shadow-xl h-screen">
      <div className="flex justify-between items-center p-5">
        <Avatar />
        <h6>Hi, Amar</h6>
      </div>
    </div>
  );
}

export default SideNAvBar;
