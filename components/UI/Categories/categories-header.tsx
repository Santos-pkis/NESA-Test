"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import HeroCenter from "../Home/hero-center";
import SlideImage2 from "../Home/SlideImage2";
import SlideImage3 from "../Home/SlideImage3";
import SlideImage4 from "../Home/SlideImage4";  
import SlideImage5 from "../Home/SlideImage5";
import SlideImage6 from "../Home/SlideImage6";
import styles from "@/components/Common/Slide/style.module.scss";
import CompetitiveHeroCenter from "@/components/UI/Categories/categories-hero-center";


export interface CategoryCardProps {
  categoryData: {
    title: string;
    description: string;
    subCategoryPath: string;
  }[];
 }

const CompetitiveHeader: React.FC<CategoryCardProps> = ({ categoryData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    const totalSlides = 8; 

    const Slides = categoryData.map((item, index) => {

      return (
      <CompetitiveHeroCenter
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
      <div className={`min-h-screen max-w-screen bg-[#17120a] text-white bg-gradient-to-t from-transparent via-[#f7ae2758] to-transparent ${styles.homeHeader}`}>
        
          {Slides.map((slide, index) => {
            return (
              <section key={index} className={` h-[80] w-full bg-opacity-80  md:pt-16  transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0 hidden"}`}>
                  {slide}
             
              </section>  
            );
          })
        }
                        {/* Scroll Feature */}
        <div className="pb-8 md:pb-4 pt-6 flex items-center justify-between md:px-4 px-2">
          {/* Dots */}
          <div className="flex items-center md:space-x-2 space-x-1">
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
          <div className="flex items-center gap-1 ">
            <button
              onClick={() => {
                prevSlide();
                setActiveDot((prev) => (prev - 1 + totalSlides) % totalSlides);
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition"
            >
              <span className="material-icons">&lt;</span>
            </button>
            <button
              onClick={() => {
                nextSlide();
                setActiveDot((prev) => (prev + 1) % totalSlides);
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
            >
              <span className="material-icons">{'>'}</span>
            </button>
          </div>
              </div>

               </div>
    </header>
  );
};

export default CompetitiveHeader;
