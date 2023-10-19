import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getdata = async () => {
  const res = await axios("http://localhost:3000/api/category", {
    cache: "no-store",
  });

  if (res.status !== 200) {
    throw new Error("Failed");
  }

  return res.data;
};
const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-orange-400",
  "bg-purple-400",
  "bg-teal-400",
  "bg-pink-400",
  "bg-brown-400",
  "bg-gray-400",
  "bg-cyan-400",
];
const Category = async () => {
  const data = await getdata();
  return (
    <div className="mx-2">
      <h1 className="text-xl font-semibold ">Popular Categories</h1>
      <div className="m-2 flex flex-wrap gap-5 justify-around">
        {data?.map((item, index) => (
          <div
            className={`w-56 h-20 items-center justify-center flex rounded-2xl ${
              colors[index % colors.length]
            }`}
          >
            <Link
              href={`/Blog?cat=${item.tittle}`}
              className="flex flex-row m-auto p-2  items-center justify-center "
              key={item._id}
            >
              <img src={item.img} className="w-10 h-10 rounded-full" />
              <div className="font-semibold mx-2">{item.tittle}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
