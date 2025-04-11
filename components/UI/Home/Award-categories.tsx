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
    <div className="p-8 bg-[#f5eedd] min-h-screen">
      <h1 className="text-3xl text-[#191307] mb-10">Award Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <Link
            href={index === 0 ? "/competitive" : "/non-competitive"}
            key={index}
          >
            <div
              className="bg-[#191307] text-white rounded-xl p-6 flex flex-col items-center justify-center relative shadow-lg"
              style={{ minHeight: "480px" }}
            >
              {/* Category Title */}
              <h2 className="text-2xl mb-12 self-start ml-4 mt-4">{category.title}</h2>
              
              {/* Three-dot menu */}
              <div className="absolute top-6 right-6 flex flex-col items-center">
                <div className="w-1.5 h-6 bg-white rounded-full mb-1"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full mb-1"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full mb-1"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              
              {/* NESA Logo */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AwardCategories;