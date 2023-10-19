import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className="sm:m-5 mt-8 sm:p-5">
      <div className="flex justify-center p-2 font-bold text-3xl sm:text-5xl items-center  ">
        <div>
          Hii This is My first Blogs.<h1>Discover my new Stories </h1>
        </div>
      </div>
      <div className=" m-5 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex justify-center items-center">
          <div className="imgpost ">
            <Image
              src="/photo-1682685797507-d44d838b0ac7.avif"
              alt="postimg"
              className="postimages"
              fill
            />
          </div>
        </div>
        <div className="flex-1 items-center justify-center p-2 flex">
          <div>
            <h1 className="text-xl font-semibold py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              pariatur sequi saepe vitae in tenetur culpa, facilis modi voluptas
              a. Illo sequi earum tempora reprehenderit enim repudiandae
              consequatur quo nihil.
            </p>
            <button className="border bg-blue-300 p-2 border-yellow-400 rounded-xl">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
