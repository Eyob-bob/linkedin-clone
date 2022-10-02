import React from "react";
import Feeds from "./Feeds";
import BasicModal from "./Modal";
import Post from "./Post";

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex-1">
      <Post
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
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
