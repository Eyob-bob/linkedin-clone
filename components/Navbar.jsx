import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-md h-[8vh]">
      <div className="flex justify-between max-w-[920px] mx-auto h-full">
        <Link href="/feed">
          <a className="grid place-content-center">
            <img src="/images/linkedin.svg" alt="" />
          </a>
        </Link>
        <ul className="flex items-center gap-8 h-full">
          <li className="grid place-content-center h-full border-b-black border-b-2 px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon /> <p>Home</p>
            </div>
          </li>
          <li>
            <Avatar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
