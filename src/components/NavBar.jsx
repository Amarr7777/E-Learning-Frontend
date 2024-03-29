import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function NavBar({ setSearchText }) {
  return (
    <ul className="flex justify-between items-center bg-white border-b-2 border-purple-200 p-5">
      <li>
        <h6 className="font-bold cursor-pointer">
          <Link to="/">E-Learning</Link>
        </h6>
      </li>
      <li className="flex items-center gap-2">
        <input
          type="text"
          placeholder="course / instructor"
          className="border p-2 rounded-lg border-black"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <Avatar />
      </li>
    </ul>
  );
}

export default NavBar;
