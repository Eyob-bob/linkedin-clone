import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { ThumbUp } from "@mui/icons-material";
import { Comment } from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Feeds = ({ handleOpen }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (querySnapshot) => {
        setData(querySnapshot.docs);
        setIsLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  if (isLoading)
    return (
      <div className="w-full grid place-content-center">
        <img src="images/loading.svg" alt="loading indicator" />
      </div>
    );

  if (data?.length === 0) return <p>There is no data</p>;

  return (
    <>
      {data?.map((doc) => {
        return (
          <div
            key={doc.data().timestamp}
            className="bg-white border-2 shadow-sm rounded-md px-4 py-2"
          >
            <div className="flex justify-between items-center ">
              <div className="flex items-center justify-center gap-2">
                <Avatar
                  src={doc.data().userPhoto}
                  sx={{ width: 50, height: 50 }}
                />
                <div>
                  <h5>{doc.data().username}</h5>
                </div>
              </div>

              <Button>+ Follow</Button>
            </div>

            <p className="my-2">{doc.data().postText}</p>

            {doc.data().image && <img src={doc.data().image} alt="image" />}

            <div className="flex justify-around items-center mt-4">
              <IconButton className="flex items-center gap-2">
                <ThumbUp />
                <p className="text-sm">Like</p>
              </IconButton>
              <IconButton className="flex items-center gap-2">
                <Comment />
                <p className="text-sm">Comment</p>
              </IconButton>
              <IconButton className="flex items-center gap-2">
                <Share />
                <p className="text-sm">Share</p>
              </IconButton>
              <IconButton className="flex items-center gap-2">
                <Send />
                <p className="text-sm">Send</p>
              </IconButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Feeds;
