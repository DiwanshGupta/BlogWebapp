"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  try {
    const res = await axios(url);
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data = res.data;
    // console.log("Data received from the API:", data);
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error for debugging
    return { data: [] };
  }
};
const Commentcart = ({ postslug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postslug=${postslug}`,
    fetcher
  );
  const [desc, setdesc] = useState("");
  const handleSubmit = async () => {
    try {
      await axios.post("/api/comments", { desc, postslug });
      mutate();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="">
      <div className="text-3xl text-gray-700 font-semibold py-2">Comments</div>
      {status === "unauthenticated" ? (
        <Link href="/login">Login to write a commet</Link>
      ) : (
        <div className="flex sm:flex-row gap-1 justify-between">
          <textarea
            placeholder="Write a comment ...."
            className="w-3/4 p-2 rounded-xl"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <div>
            <button
              className="bg-teal-400 p-2  rounded-xl "
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      )}
      <div>
        <div className="py-3">
          {isLoading
            ? "Loading"
            : data && Array.isArray(data.data)
            ? data.data.map((item) => (
                <div key={item._id} className="py-2">
                  <div className="flex flex-row">
                    <div className="items-center m-auto">
                      <img
                        src={item.user.image}
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="flex-1 px-3 py-4">
                      <div className="flex font-medium text-slate-600 justify-between flex-col">
                        <div className="font-semibold text-base">
                          {item.user.name}
                          <div className="text-slate-600">
                            {item.createdat.substring(0, 10)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))
            : "No comments available"}
        </div>
      </div>
    </div>
  );
};

export default Commentcart;
