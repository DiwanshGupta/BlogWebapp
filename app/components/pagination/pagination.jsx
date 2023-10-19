"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, onPageChange }) => {
  const router = useRouter();

  const handlePrev = () => {
    if (page > 1) {
      const newPage = page - 1;
      router.push(`?page=${newPage}`);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    const newPage = page + 1;
    router.push(`?page=${newPage}`);
    onPageChange(newPage);
  };

  return (
    <div className="justify-between flex">
      <button
        className="p-2 bg-red-600 rounded-xl text-white font-bold"
        disabled={page === 1}
        style={{ cursor: page === 1 ? "not-allowed" : "pointer" }}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="p-2 bg-red-600 rounded-xl text-white font-bold"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
