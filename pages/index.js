import { Button } from "@mui/material";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, provider, signInWithGoogle } from "../firebase";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/feed");
      }
    });
  });

  return (
    <div className="grid place-content-center h-screen">
      <Head>
        <title>Login | Linkedin</title>
      </Head>
      <button
        onClick={signInWithGoogle}
        className="px-8 py-4 flex justify-center items-center gap-2 bg-black text-white shadow-xl rounded-full"
      >
        <img className="w-8 h-8" src="/images/google.svg" alt="google" />{" "}
        <p>Sign In With Google</p>
      </button>
    </div>
  );
}
