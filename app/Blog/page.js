import React from "react";
import Cardlist from "../components/cardlist/cardlist";
import Menu from "../components/menu/menu";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <>
      <div className="m-auto items-center flex justify-center mt-2 bg-yellow-400 font-bold text-slate-50 text-lg sm:text-2xl p-3 ">
        {cat} Blog
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-5 justify-between">
        <div className="sm:col-span-4 col-span-3">
          <Cardlist page={page} cat={cat} />
        </div>
        <div className="sm:col-span-2 col-span-2">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Blog;
