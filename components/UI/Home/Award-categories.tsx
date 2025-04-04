"use client";
import React from "react";
import Image from "next/image";

const categories = [
  { title: "Competitive Categories", image: "/images/nesa-mg.png" },
  { title: "Non-Competitive Categories", image: "/images/nesa-mg.png" },
];

const AwardCategories = () => {
  return (
    <div className="p-6 bg-[#f5eedd] min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Award Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-black text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md"
          >
            {/* Three-dot menu */}
            <div className="absolute top-4 right-4">
              <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
              <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>

            {/* Category Title */}
            <h3 className="text-md font-medium mb-4">{category.title}</h3>

            {/* Category Image */}
            <Image src={category.image} alt={category.title} width={128} height={128} className="w-32 h-32 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardCategories;
