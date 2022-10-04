import React from "react";
import Feeds from "./Feeds";
import BasicModal from "./Modal";
import Post from "./Post";

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="sm:w-[50%] 2xl:w-[400px]">
      <Post
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <div className="h-[2px] bg-gray-500 rounded-full my-4"></div>
      <Feeds />
      <BasicModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Main;
