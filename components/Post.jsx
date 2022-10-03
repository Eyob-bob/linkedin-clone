import { OutlinedInput } from "@mui/material";
import { Avatar } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { auth } from "../firebase";

const Post = ({ handleOpen, open }) => {
  const user = auth.currentUser;
  const inputRef = useRef(null);

  return (
    <div className="bg-white border-2 shadow-sm rounded-md px-4 py-2">
      <div className="flex gap-4 justify-center items-center">
        <Avatar src={user?.photoURL} />
        <OutlinedInput
          ref={inputRef}
          onClick={handleOpen}
          className="w-full rounded-full"
          placeholder="Start a post"
        />
      </div>
      <div className="flex justify-around mt-2">
        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src="/images/photo.svg" alt="photo" className="w-5 h-5" />
          <p>Photo</p>
        </div>
        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src="/images/video.svg" alt="video" className="w-5 h-5" />
          <p>Video</p>
        </div>
        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src="/images/event.svg" alt="event" className="w-5 h-5" />
          <p>Event</p>
        </div>
        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img
            src="/images/write_article.svg"
            alt="write-article"
            className="w-5 h-5"
          />
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
