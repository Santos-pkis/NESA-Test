"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Competitive Categories", image: "/images/nesa-mg.png" },
  { title: "Non-Competitive Categories", image: "/images/nesa-mg.png" },
];

const AwardCategories = () => {
  return (
    <div className="p-6 bg-[#f5eedd] min-h-screen">
      <h2 className="text-xl mb-4">Award Categories</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
                  <Link
                  href={
                    index === 0
                    ? "/competitive"
                    : "/non-competitive"
                  }
                  className="flex flex-col items-center justify-center"
                  >
        <div
          key={index}
          className="relative bg-[#191307] text-white rounded-xl p-8 flex flex-col items-center justify-center shadow-md"
          style={{ width: "400px", height: "450px" }}
        >
          {/* Three-dot menu */}
          <div className="absolute top-4 right-4">
            <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>

          {/* Category Title */}
          <h2 className="text-base mb-4 text-left w-full absolute top-4 left-4">{category.title}</h2>


            <Image
              src={category.image}
              alt={category.title}
              width={128}
              height={128}
              className="object-contain"
            />
                    </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCategories;
