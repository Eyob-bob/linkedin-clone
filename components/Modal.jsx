import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextareaAutosize } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, handleClose, handleOpen }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const [post, setPost] = React.useState("");
  const textAreaRef = React.useRef(null);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[400px] bg-white border shadow-md p-4 rounded-md">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create A Post
          </Typography>

          <textarea
            cols="40"
            rows="5"
            placeholder="write something"
            className="outline-none border-2 p-2"
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
            autoFocus={open}
          ></textarea>
          <Button
            disabled={post.length <= 0}
            className="bg-blue-600"
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}