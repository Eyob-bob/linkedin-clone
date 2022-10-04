import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

const Right = () => {
  const user = auth.currentUser;

  return (
    <div>
      <div className="border-2 p-4 w-[15rem] bg-white shadow-sm rounded-md flex flex-col justify-center gap-4">
        <h3 className="font-bold">Added To your Feed</h3>
        <p className="text-gray-600 font-light text-xs">
          Bahir Dar University <Button>+ Follow</Button>
        </p>
        <p className="text-gray-600 font-light text-xs">
          Minab IT solution <Button>+ Follow</Button>
        </p>
        <p className="text-gray-600 font-light text-xs">
          Google <Button>+ Follow</Button>
        </p>
        <p className="text-gray-600 font-light text-xs">
          Amazon <Button>+ Follow</Button>
        </p>
      </div>
      <div className="h-8"></div>
      <div className="sticky top-[10vh]  bg-gray-100 grid grid-cols-3 gap-2 text-xs">
        <p>about</p>
        <p>accessibilty</p>
        <p>help center</p>
        <p>privacy and terms</p>
        <p>advertisement</p>
        <p>more</p>
      </div>
      <p className="mt-4 sticky top-[20vh]">
        Linkedin inc. @{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Right;
