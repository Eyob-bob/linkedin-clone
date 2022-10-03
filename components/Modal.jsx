import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextareaAutosize } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function BasicModal({ open, setOpen, handleClose, handleOpen }) {
  const [post, setPost] = React.useState("");
  const [image, setImage] = React.useState(null);
  const textAreaRef = React.useRef(null);
  const user = auth.currentUser;

  const handleSave = async () => {
    if (image) {
      const file = Date.now() + image.name;

      const storageRef = ref(storage, file);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const docRef = await addDoc(collection(db, "posts"), {
              postText: post,
              image: downloadURL,
              username: user.displayName,
              userPhoto: user.photoURL,
              timestamp: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);

            setPost("");

            console.log("File available at", downloadURL);

            handleClose();
          });
        }
      );
    }
  };

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

          <label class="block mb-2 text-sm font-medium" for="file_input">
            Upload file
          </label>
          <input
            class="block w-full text-sm rounded-lg border cursor-pointer focus:outline-none"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <p class="mt-1 text-sm" id="file_input_help">
            SVG, PNG, JPG or GIF.
          </p>

          <div className="mt-8 flex justify-between items-center">
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleSave}
              disabled={post.length <= 0}
              className="bg-blue-600"
              variant="contained"
            >
              Post
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
