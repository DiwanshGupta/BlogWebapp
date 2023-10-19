"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import "react-quill/dist/quill.bubble.css";
import dynamic from 'next/dynamic';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { app } from "../utils/firebase";
import axios from "axios";

const storage = getStorage(app);
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false, // Set ssr to false to ensure the component is only rendered on the client side
});
const Writepages = () => {
  const [open, setopen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, Setmedia] = useState("");
  const [value, setValue] = useState("");
  const [tittle, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState(""); // Added state for category

  const { status } = useSession();
  const router = useRouter();
  const notify = () => toast("Please Fill the fields");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              // console.log("Upload is paused");
              break;
            case "running":
              // console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            Setmedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handlesubmit = async () => {
    if (!tittle || !value || !media || !catSlug) {
      // Add validation here to ensure all required data is present
      console.error("Title, value, media, and category are required.");
      notify();
      return;
    }

    const data = {
      tittle,
      desc: value,
      img: media,
      cateSlug: catSlug || "style",
      category: tittle,
    };

    try {
      const res = await axios.post("/api/post", data);
      if (res.status === 200) {
        const data = await res.data; // Use res.data to access response data
        router.push(`/posts/${data.tittle}`);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="text-2xl p-2 h-screen">
      <ToastContainer />
      <div>
        <input
          type="text"
          placeholder="Tittle"
          className="border-none outline-none text-3xl p-16 bg-transparent"
          onChange={(e) => setTitle(e.target.value)}
        />
        <select className="" onChange={(e) => setCatSlug(e.target.value)}>
          <option value="Style">style</option>
          <option value="Fashion">fashion</option>
          <option value="Food">food</option>
          <option value="Culture">culture</option>
          <option value="Travel">travel</option>
          <option value="Coding">coding</option>
        </select>
        <div className="flex flex-row relative p-1 m-3">
          <div className="">
            <button
              onClick={() => {
                setopen(!open);
              }}
            >
              <Image src="/plus.png" width={16} height={16} alt="tittle" />
            </button>
          </div>
          {open && (
            <div className="left-6 absolute flex  gap-2 flex-row">
              {" "}
              <input
                type="file"
                id="images"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
              <button className="w-9 h-9 rounded-full border border-green-900 items-center justify-center flex">
                <label htmlFor="images">
                  <Image
                    src="/external.png"
                    width={16}
                    height={16}
                    alt="tittle"
                  />
                </label>
              </button>{" "}
              <button className="w-9 h-9 rounded-full border border-green-900 items-center justify-center flex">
                <Image src="/video.png" width={16} height={16} alt="tittle" />
              </button>{" "}
              <button className="w-9 h-9 rounded-full border border-green-900 items-center justify-center flex">
                <Image src="/image.png" width={16} height={16} alt="tittle" />
              </button>
            </div>
          )}
        </div>
      </div>{" "}
      <div className="text-2xl paracontainer text-gree">
      {typeof window !== 'undefined' && (
            <ReactQuill
              theme="bubble"
              value={value}
              onChange={setValue}
              className=""
              placeholder="Tell your Story"
            />
          )}
      </div>
      <div className="items-center justify-center absolute bottom-3 flex">
        <button
          className="p-2 bg-teal-500 rounded-2xl px-5"
          onClick={handlesubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Writepages;
