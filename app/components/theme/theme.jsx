"use client";
import { ThemeContext } from "@/app/context/themecontext";
import Image from "next/image";
import React, { useContext } from "react";

const Theme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="items-center m-auto">
      <div
        className={`flex flex-row w-10 h-5 p-1  rounded-3xl cursor-pointer relative  items-center justify-between ${
          theme === "dark" ? " bg-white " : "bg-gray-900 "
        }`}
        onClick={toggle}
      >
        <Image src="/moon.png" width={14} height={14} alt="moon" />{" "}
        <div
          className={`w-4 h-4 rounded-full absolute ${
            theme === "dark" ? "left-1 bg-gray-800 " : "bg-white right-1"
          }`}
        ></div>
        <Image src="/sun.png" width={14} height={14} alt="sun" />{" "}
      </div>
    </div>
  );
};

export default Theme;
