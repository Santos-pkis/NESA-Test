"use client";
import { useState } from "react";
import useSlider from "@/lib/hooks/useSlide"; // your custom hook
import { categoryData } from "@/lib/data/categoryData"; // extract to separate file
import Image from "next/image";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";
import styles from "@/components/Common/Slide/style.module.scss";

const LiveTV = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);
  const { ref, scrollLeft, scrollRight } = useSlider();
    
  return (
    <section className="w-full px-6 py-10 max-w-7xl mx-auto">
      {/* Announcement */}
      <div className="z-10 text-white relative pt-12">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`container relative ${styles["scroll-con"]}`}
        >
          <motion.div
            {...opacityTrans}
            className={`space-x-3 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]} bg-transparent`}
          >
            {new Array(3).fill(null).map((_, id) => (
              <p key={id} className={`py-1 ${styles["head-scroll-text"]}`}>
          <div className="text-sm text-center font-medium text-gray-800">
            <span className="text-[#F0B561] font-bold">NESA TV</span> <strong>ANNOUNCEMENT</strong> - Nomination Starts from March 15th, 2024 , Get ready to nominate your Education Champion!
          </div>
          </p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Video Player */}
      <div className="mt-6 relative rounded-xl overflow-hidden bg-black aspect-video">
        {/* "Live", view count and comment badge */}

        <div className="absolute top-3 left-3 text-xs bg-primaryGold text-black px-2 py-1 rounded-full z-10">
          Live 🔴
        </div>
        <div className="absolute top-3 left-20 text-xs bg-white text-black px-2 py-1 rounded-full z-10">
          👁 15.2K
        </div>
        <div className="absolute top-4 right-3 bg-primaryGold px-3 py-1 rounded-full text-sm font-medium z-10 inline-flex items-center gap-2">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="text-black"
          >
            Comment 💬
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
            <div className="mb-3">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddComment();
            }
          }}
          placeholder="Write a comment..."
        />
          <button
            onClick={() => setShowDropdown(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            X
          </button>
              </div>
              <div className="mb-3">
   
              </div>
              <button
          onClick={handleAddComment}
          className="bg-primaryGold text-white px-3 py-1 rounded-lg text-sm"
              >
          →
              </button>
              <div className="mt-3">
          {comments.map((c, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <span className="font-bold text-sm">Santos:</span>
              <span className="text-sm">{c}</span>
            </div>
          ))}
              </div>
            </div>
          )}
        </div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded">
                  <Image src="/images/play.png" alt="NESA Logo" width={100} height={100} className="rounded-full" />
              </div>
        {/* Video content */}   
        {/* Replace with your actual video content */}
        <video className="w-full h-full object-cover" autoPlay muted loop controls>
          <source src="https://www.youtube.com/watch?v=MOQNd7ZcLek" type="video/mp4" />
        </video>
      </div>

      {/* Category Title */}
      <h2 className="text-lg font-semibold mt-6 mb-6 _under_border">
        {activeCategory.title}
      </h2>


      <div className="relative mt-4">

        <div
          ref={ref}
          className="flex overflow-x-auto gap-3 no-scrollbar px-10"
        >
          {categoryData.map((cat, idx) => (
            <div
              key={idx}
              className={`min-w-[200px] cursor-pointer p-2 rounded-lg border ${
                cat.title === activeCategory.title
                  ? "border-[#F0B561]"
                  : "border-gray-300"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              <div className="bg-black aspect-video flex items-center justify-center text-white">
                <span className="text-xs">Live Preview</span>
              </div>
              <p className="text-xs text-center mt-2 font-medium leading-tight">{cat.title}</p>
            </div>
          ))}
        </div>


         {/* Scroll Feature */}
         <div className="relative bottom-0 inset-x-0 flex items-center justify-between mx-12 ">

            {/* Dots */}
            <div className="flex items-center space-x-2 ">
              {Array.from({ length: categoryData.length }).map((_, id) => (
            <div
                key={id}
                className={`w-3 h-3  rounded-full cursor-pointer ${id===0 ? "bg-primaryGold" : "bg-gray-300"}`}
            ></div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-black shadow-lg hover:bg-gray-800 transition"
                  >
                <span className="material-icons">←</span>
                </button>
                <button
                    onClick={scrollRight}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F0B561] text-white shadow-lg hover:bg-gray-200 transition"
                      >
                    <span className="material-icons">→</span>
              </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default LiveTV;
