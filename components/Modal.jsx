import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";

export default function BasicModal({ open, setOpen, handleClose, handleOpen }) {
  const [post, setPost] = React.useState("");
  const [image, setImage] = React.useState(null);
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSave = async () => {
    setIsLoading(true);

    if (
      image &&
      (image.type == "image/jpg" ||
        image.type == "image/png" ||
        image.type == "image/jpeg" ||
        image.type == "image/gif" ||
        image.type == "image/svg")
    ) {
      const file = Date.now() + image.name;

      const storageRef = ref(storage, file);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
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
          console.log(error);
        },
        () => {
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
            setIsLoading(false);
          });
        }
      );
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        postText: post,
        image: null,
        username: user.displayName,
        userPhoto: user.photoURL,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);

      setPost("");
      handleClose();
      setIsLoading(false);
    }
  };

  return (
    <div>
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

          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm rounded-lg border cursor-pointer focus:outline-none"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <p className="mt-1 text-sm" id="file_input_help">
            SVG, PNG, JPG or GIF.
          </p>

          <div className="mt-8 flex justify-between items-center">
            <Button onClick={handleClose}>Cancel</Button>
            {isLoading && <CircularProgress />}
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
