"use client";
import React, { useState } from "react";
import Link from "next/link";

import Theme from "../theme/theme";
import Register from "../registration/registration";
function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="flex justify-between items-center ">
      <div className={`text-3xl font-bold    `}>DevBlogs</div>

      <div className={`styles.links  text-lg font-medium flex flex-row gap-4 `}>
        <Theme />
        {isNavbarOpen ? (
          <>
            <div className="gap-4 flex-col flex">
              <Link href="/">Homepage</Link>
              <Link href="/">Contact</Link>
              <Link href="/">About</Link>
              <Register />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="gap-4 md:flex hidden">
              <Link href="/">Homepage</Link>
              <Link href="/">Contact</Link>
              <Register />
            </div>
          </>
        )}
        <div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            {isNavbarOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
