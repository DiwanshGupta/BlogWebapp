"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const { data, status } = useSession();
  // console.log(data);
  const router = useRouter();
  // console.log(status);

  if (status === "authenticated") {
    router.push("/");
    console.log(status);
  }

  return (
    <div>
      <div className="flex justify-center m-auto h-screen items-center ">
        <div className="bgglass p-10 rounded-xl gap-3 flex flex-col">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-9 rounded-2xl text-yellow-200 cursor-pointer"
            onClick={() => signIn("google")}
          >
            SignIn with Google
          </div>{" "}
          <div
            className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 p-9  rounded-2xl text-white"
            onClick={() => signIn("github")}
          >
            SignIn with GitHub
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
