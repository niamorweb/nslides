import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ bgColor }) {
  return (
    <header style={{ backgroundColor: bgColor }} className="">
      <nav className="flex justify-between items-center text-white py-4 px-4 sm:px-8 ">
        <span className="text-2xl  sm:text-3xl font-semibold ">Ntricks</span>
        <ul className="flex items-center text-sm gap-3 sm:gap-8 sm:text-lg font-medium ">
          <li>
            <NavLink exact to="nslides/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="nslides/codes" activeclassname="active">
              Codes
            </NavLink>
          </li>
          <li>
            <NavLink exact to="nslides/about" activeclassname="active">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
