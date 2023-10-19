import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item, key }) => {
  return (
    <div className="flex flex-col sm:flex-row py-3" key={item._id}>
      <div className="flex-1 sm:flex sm:justify-center " key={key}>
        <img
          src={item.img}
          alt="postpic"
          className="h-56 sm:h-60 sm:w-60 w-56"
        />
      </div>
      <div className="flex-1">
        <div>
          <span>{item.createdAt.substring(0, 10)}</span>
          <span className="font-semibold">-</span>
          <span className="text-red-700 font-semibold">{item.cateSlug}</span>
        </div>
        <div className=" py-5">
          <Link href={`/posts/${item.category}`}>
            <h1 className="font-bold text-xl sm:text-2xl">{item.tittle}</h1>
          </Link>
          <p>
            {" "}
            <div
              dangerouslySetInnerHTML={{
                __html: (item?.desc || "").substring(0, 100),
              }}
            />
          </p>
        </div>
        <div>
          <Link href={`/posts/${item.category}`}>
            <button className="border-red-800 border-b font-semibold shadow-gray-900">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
