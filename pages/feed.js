import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";

const Feed = () => {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/");
    }
  });

  return (
    <>
      <Navbar />
    </>
  );
};

export default Feed;
