import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { auth, logOut } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = auth.currentUser;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="shadow-md h-[9vh] md:px-10 lg:px-28 fixed bg-white w-full z-20">
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
              <PeopleIcon /> <p>My Network</p>
            </div>
          </li>

          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <WorkIcon /> <p>Jobs</p>
            </div>
          </li>

          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <CommentIcon /> <p>Messaging</p>
            </div>
          </li>
          <li className="grid place-content-center h-full px-2">
            <div className="flex flex-col justify-center items-center">
              <NotificationsIcon /> <p>Notifications</p>
            </div>
          </li>
          <li>
            <div>
              {/* <div className="w-8 h-8 rounded-full">
                <Image
                  src={user?.photoURL}
                  width={30}
                  height={30}
                  alt="avatar"
                />
              </div> */}
              <Avatar src={user?.photoURL} sx={{ width: 30, height: 30 }} />
              <div
                id="avatar"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="cursor-pointer flex"
              >
                <p>Me</p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "avatar",
              }}
            >
              <MenuItem>
                <div className="flex gap-2 justify-center items-center">
                  <div className="w-8 h-8 rounded-full">
                    <Image
                      src={user?.photoURL}
                      width={30}
                      height={30}
                      alt="avatar"
                    />
                  </div>
                  <p>{user?.displayName}</p>
                </div>
              </MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
