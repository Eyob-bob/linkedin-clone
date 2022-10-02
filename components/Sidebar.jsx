import { Avatar } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

const Sidebar = () => {
  const user = auth.currentUser;

  return (
    <div className="h-[300vh]">
      <div className="border-2 p-4 mt-8 w-[15rem] h-[15rem] bg-white shadow-sm rounded-md flex flex-col justify-center items-center gap-4">
        <Avatar sx={{ width: 56, height: 56 }} src={user?.photoURL} />
        <h3 className="font-bold">{user?.displayName}</h3>
        <p className="text-gray-600 font-light text-center text-xs">
          Flutter | Next | Express.js | GraphQL
        </p>
      </div>
      <div className="h-2"></div>
      <div className="border-2 sticky top-[10vh] w-[15rem] h-[15rem] bg-white shadow-sm rounded-md flex flex-col justify-center gap-4 p-8">
        <p>Recent</p>
        <p>Groups</p>
        <p>Events</p>
      </div>
    </div>
  );
};

export default Sidebar;
