"use client";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeroCenter from "./hero-center";
import SlideImage2 from "./SlideImage2";
import SlideImage3 from "./SlideImage3";
import SlideImage4 from "./SlideImage4";  
import SlideImage5 from "./SlideImage5";
import SlideImage6 from "./SlideImage6";
import styles from "@/components/Common/Slide/style.module.scss";

const HomeHeader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    
    const Slides = [
      <HeroCenter key={0} />,
      <SlideImage2 key={1} src="/images/landing-page-carousel/slide2.png" alt="Slide 2" />,
      <SlideImage3 key={2} src="/images/landing-page-carousel/slide3.png" alt="Slide 3" />,
      <SlideImage4 key={3} src="/images/landing-page-carousel/slide4.png" alt="Slide 4" />,
      <SlideImage5 key={4} src="/images/landing-page-carousel/slide5.png" alt="Slide 5" />,
      <SlideImage6 key={5} src="/images/landing-page-carousel/slide6.png" alt="Slide 6" />
    ];
    const totalSlides = Slides.length; // Total number of slides
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
      }, 43000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

  return (
     <>               
     <div className="min-h-screen min-w-screen bg-[#17120a]">
          <div className="z-10 text-white relative pt-12">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`container mt-9 -mb-3 relative ${styles["scroll-con"]}`}
        >
          <motion.div
            {...opacityTrans}
            className={`space-x-3 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]} bg-transparent`}
          >
            {new Array(3).fill(null).map((_, id) => (
              <p key={id} className={`py-1 ${styles["head-scroll-text"]}`}>
                {/* -- <span className="font-bold">ANNOUNCEMENT</span> - Nomination
                Starts December 30th 2024. Get ready to nominate your
                Education Champion! */}
                <span className="text-sm uppercase tracking-wide text-white font-medium">
                  <span className="font-bold">ANNOUNCEMENT –</span> Nomination Starts from May 1st, 2025, Get ready to nominate your Education Champion!
                </span>
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
     
            {Slides.map((slide, index) => {
              return (
                index === 0 ? (
                  // <section
                  //   key={index}
                  //   className={`absolute top-0 left-0 bg-[#17120a] w-full text-white sm:px-10  lg:px-20  items-center bg-gradient-to-t from-transparent via-[#f7ae2758] to-transparent  ${
                  //     currentSlide === index ? "opacity-100" : "opacity-0"
                  //   }`}
                  // >
                  <section className="min-w-full min-h-full text-white container mx-auto px-4 sm:px-10 md:py-32 sm:pt-3 bg-gradient-to-t from-transparent via-[#f7ae2758] to-transparent">
                    {slide}
                  </section>
                ) : (
                  <div
                    key={index}
                    className={` bg-[#17120a] absolute top-0 left-0  h-full w-full transition-opacity duration-500  ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {slide}
                  </div>
                )
              );
            })}

         
        {/* </div> */}
         {/* Scroll Feature */}
         {/* <div className="absolute bottom-10 inset-x-0 flex items-center justify-between md:px-36 px-20"> */}
         <div className="absolute bottom-10 inset-x-0 flex items-center justify-between mx-12 ">

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
        </>      
  );
};

export default HomeHeader;
