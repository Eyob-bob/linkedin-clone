import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Right from "../components/Right";
import Sidebar from "../components/Sidebar";
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
      <div className="h-[9vh]"></div>
      <div className="bg-gray-100 min-h-[91vh]">
        <div className="max-w-[920px] mx-auto flex justify-between">
          <Sidebar />
          <Main />
          <Right />
        </div>
      </div>
    </>
  );
};

export default Feed;
