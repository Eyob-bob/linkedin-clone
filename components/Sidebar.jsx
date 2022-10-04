import { Avatar } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <div className="sm:hidden">
      <div className="border-2 p-4 w-[10rem] bg-white shadow-sm rounded-md flex flex-col justify-center items-center gap-4">
        <Avatar sx={{ width: 56, height: 56 }} src={user?.photoURL} />
        <h3 className="font-bold">{user?.displayName}</h3>
        <p className="text-gray-600 font-light text-center text-xs">
          Flutter | Next.js | Express.js | GraphQL
        </p>
      </div>
      <div className="h-2"></div>
      <div className="border-2 sticky top-[10vh] w-[10rem] bg-white shadow-sm rounded-md flex flex-col justify-center gap-4 p-8">
        <p>Recent</p>
        <p>Groups</p>
        <p>Events</p>
      </div>
    </div>
  );
};

export default Sidebar;
