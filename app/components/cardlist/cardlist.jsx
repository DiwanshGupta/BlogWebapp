"use client";
import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";
import Card from "../cards";
import axios from "axios";

const getdata = async (page, cat) => {
  const res = await axios(
    `http://localhost:3000/api/post?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (res.status !== 200) {
    throw new Error("Failed");
  }

  return res.data;
};

const Cardlist = ({ page, cat }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);

  const fetchData = async (newPage, newCat) => {
    try {
      const newData = await getdata(newPage, newCat);
      setData(newData);
      setCurrentPage(newPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(page, cat);
  }, [page, cat]);

  const handlePageChange = (newPage) => {
    fetchData(newPage, cat);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="py-8">
          <h1 className="font-bold text-2xl">Recent Posts</h1>
        </div>
        <div>
          <div>
            {data && data.length > 0 ? (
              data.map((item) => <Card item={item} key={item._id} />)
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
        <Pagination page={currentPage} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Cardlist;
