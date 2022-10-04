import { onAuthStateChanged, signOut } from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Right from "../components/Right";
import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";

const Feed = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      }
    });
  });

  return (
    <>
      <Head>
        <title>Feed | Linkedin</title>
      </Head>
      <Navbar />
      <div className="h-[9vh]"></div>
      <div className="bg-gray-100 min-h-[91vh] pb-8">
        <div>
          <div className="h-8" />
          <div className="max-w-[1050px] lg:px-8 md:px-8 mx-auto flex justify-center gap-8">
            <Sidebar />
            <Main />
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
