"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import HeroCenter from "./hero-center";
import SlideImage2 from "./SlideImage2";
import SlideImage3 from "./SlideImage3";
import SlideImage4 from "./SlideImage4";  
import SlideImage5 from "./SlideImage5";
import SlideImage6 from "./SlideImage6";
import styles from "@/components/Common/Slide/style.module.scss";
import NonCompetitiveHeroCenter from "@/components/UI/Home/non-competitive-hero-center";

export interface CategoryCardProps {
  categoryData: {
    title: string;
    description: string;
    subCategoryPath: string;
  }[];
 }


const NonCompetitiveHeader: React.FC<CategoryCardProps> = ({ categoryData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    const totalSlides = 8; // Total number of slides

    const Slides = categoryData.map((item, index) => {

      return (
      <NonCompetitiveHeroCenter
        key={index}
        index={index+1}
        title={item.title}
        description={item.description}
        subCategoryPath={item.subCategoryPath}
      />
    )});
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto-scroll feature
    useEffect(() => {
      const interval = setInterval(() => {
      nextSlide();
      setActiveDot((prev) => (prev + 1) % totalSlides);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

  return (
    <header>
      <div className={`h-screen z-[4] bg-[#17120a] text-white relative ${styles.homeHeader}`}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
                      src={"/images/header.png"}
                      alt="hero image"
                      fill
                      className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-transparent via-[#f7ae2758] to-transparent"></div>

        <div className="absolute top-0 left-0 h-full w-full text-center pt-[3rem]">
        <div className="min-h-screen">
          {Slides.map((slide, index) => {
            return (
              <div key={index} className={`absolute top-0 left-0 w-full h-full pt-32 transition-opacity duration-500 ${
    currentSlide === index ? "opacity-100" : "opacity-0"
  }`}>
                  {slide}
              </div>  
            );
          })
        }

        {/* Scroll Feature */}
        <div className="absolute bottom-16 inset-x-0 flex items-center justify-between px-4">
          {/* Dots */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, id) => (
              <div
                key={id}
                onClick={() => {
            setCurrentSlide(id);
            setActiveDot(id);
                }}
                className={`w-3 h-3 rounded-full cursor-pointer ${
            currentSlide === id ? "bg-primaryGold" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => {
                prevSlide();
                setActiveDot((prev) => (prev - 1 + totalSlides) % totalSlides);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition"
            >
              <span className="material-icons">&lt;</span>
            </button>
            <button
              onClick={() => {
                nextSlide();
                setActiveDot((prev) => (prev + 1) % totalSlides);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
            >
              <span className="material-icons">{'>'}</span>
            </button>
          </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NonCompetitiveHeader;
