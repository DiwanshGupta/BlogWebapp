import React from "react";
import Menu from "../../components/menu/menu";
import Commentcart from "../../components/comment";
import axios from "axios";

const getdata = async (slugs) => {
  const res = await axios(`http://localhost:3000/api/post/${slugs}`, {
    cache: "no-store",
  });

  if (res.status !== 200) {
    throw new Error("Failed");
  }

  return res.data;
};

const Postpages = async ({ params }) => {
  const { slugs } = params;

  const data = await getdata(slugs);
  return (
    <div className="sm:p-4 ">
      <div className="flex sm:flex-row flex-col justify-center ">
        <div className="text-3xl m-auto  sm:text-4xl font-bold flex flex-col justify-between ">
          <div className="items-center flex flex-1 justify-center m-auto">
            {data.tittle}
          </div>
          <div>
            {" "}
            <div className=" py-4">
              <div className="flex flex-row  ">
                <div className="items-center m-auto">
                  <img
                    src={data.user.image}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="flex-1 px-3 py-4">
                  <div className="flex font-medium text-slate-600 justify-between flex-col">
                    <div className="font-semibold text-base">
                      {data.user.name}
                      <div className="text-slate-600">
                        {data.createdAt.substring(0, 10)}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="items-center flex  m-auto md:w-2/4  justify-center ">
          {" "}
          <div className="w-3/5 h-2/5 ">
            <img
              src={data.img}
              alt="postimg"
              className="w-3/5 h-2/4 rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-7  m-auto">
        <div className="col-span-4  py-7">
          <div className="items-center flex justify-center m-auto">
            <div dangerouslySetInnerHTML={{ __html: data?.desc || "" }} />
          </div>
          <div>
            <Commentcart postslug={slugs} />
          </div>
        </div>
        <div className="col-span-3 ">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Postpages;
