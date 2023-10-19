import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="py-8 px-1">
      <div>What's Hot</div>
      <div className="font-semibold text-xl">Most Popular</div>
      <div>
        {" "}
        <div className="">
          <div className="flex-1 px-3 py-4">
            <span className="font-semibold text-white border border-white bg-red-500 rounded-3xl px-2 ">
              <Link href={`/Blog?cat=Travel`}> Travel</Link>
            </span>
            <div className="flex font-medium text-slate-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <span className="font-semibold text-base">
              Diwansh Gupta -<span className="text-slate-600">11.2.2003</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex-1 px-3 py-4">
            <span className="font-semibold text-white border border-white bg-yellow-400 rounded-3xl px-2 ">
              <Link href={`/Blog?cat=Culture`}> Culture</Link>
            </span>
            <div className="flex font-medium text-slate-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <span className="font-semibold text-base">
              Diwansh Gupta -<span className="text-slate-600">11.2.2003</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex-1 px-3 py-4">
            <span className="font-semibold text-white border border-white bg-blue-400 rounded-3xl px-2 ">
              <Link href={`/Blog?cat=Style`}> Style</Link>
            </span>
            <div className="flex font-medium text-slate-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <span className="font-semibold text-base">
              Diwansh Gupta -<span className="text-slate-600">11.2.2003</span>
            </span>
          </div>
        </div>{" "}
        <div className="">
          <div className="flex-1 px-3 py-4">
            <span className="font-semibold text-white border border-white bg-orange-600 rounded-3xl px-2 ">
              <Link href={`/Blog?cat=Food`}> Food</Link>
            </span>
            <div className="flex font-medium text-slate-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <span className="font-semibold text-base">
              Diwansh Gupta -<span className="text-slate-600">11.2.2003</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
