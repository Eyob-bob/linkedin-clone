import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";

const Main = () => {
  return (
    <div className="flex-1">
      <Post />
      <Feeds />
    </div>
  );
};

export default Main;
