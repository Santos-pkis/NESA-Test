"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "@/components/Common/Slide/style.module.scss";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";
import SantosLink from "@/components/Common/Links/santos";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/components/Common/Button";
import CountdownTimer from "@/components/Common/Others/counter";

import { useState } from "react";

const HeroCenter = () => {

  const ref = useRef<HTMLDivElement>(null);

  const totalSlides = [ ]

  return (
    <>
      <div className="absolute inset-0 min-h-full w-full pointer-events-none">
          <Image
          src={"/images/headhero.png"}
          alt="hero image"
          fill
          className="object-cover h-full w-full -z-[1]"
            />
        </div>

        <div className="text-white text-sm md:text-base relative md:pt-4 pt-20 mb-1 md:px-10 px-2">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`relative ${styles["scroll-con"]}`}
        >
          <motion.div
            {...opacityTrans}
            className={`space-x-3 border-y-[1px] overflow-hidden border-gradient-to-r from-transparent via-border-[#FFD700] to-transparent border-opacity-50 border-[#d9a53c] ${styles["head-scroll-con"]} bg-transparent`}
          >
            {new Array(3).fill(null).map((_, id) => (
              <p key={id} className={` md:py-1 py-0 ${styles["head-scroll-text"]}`}>
                <span className="text-sm uppercase tracking-wide text-white font-medium">
                  <span className="font-bold ">ANNOUNCEMENT –</span> Nomination Starts from May 1st, 2025, Get ready to nominate your Education Champion!
                </span>
              </p>
            ))}
           
          </motion.div>
        </motion.div>
      </div>
     
        <div className=" grid md:grid-cols-2 items-center md:justify-start gap-1 md:gap-x-1 lg:gap-x-0 md:py-2 lg:py-2 px-2  lg:px-12 py-2 h-auto ">
        
          <div className="space-y-3 text-center md:text-left md:min-w-full">
            <div className="flex items-center justify-center md:justify-start md:gap-2 gap-1 text-primaryGold pt-4 md:pt-8 lg:pt-10">
              <FaStar />
              <p className="md:text-lg md:font-semibold text-[14px]">The NESA Africa Awards 2025</p>
              <FaStar />
            </div>

            <h1
            className="text-[24px] md:text-[28px] lg:text-[40px] lg:leading-[54px] tracking-[1%] text-white font-raleway"
          >
            “Honoring Africa's Changemakers - Building the Future of Education Across the Continent”
          </h1>

          {/* Description */}
          <p
            className="lg:text-[16px] md:text-[24px] text-[14px] md:leading-[26px] font-normal md:text-gray-300 text-[#FFFFFF] font-poppins"
          >
            NESA Africa 2025 recognizes individuals, NGOs, corporations, policymakers, and influencers who are shaping education systems — not students or teachers, but the visionaries transforming Africa's future.
          </p>

            <p className="md:text-[20px] text-[14px] leading-[32px] font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] to-[#E48900]">
              A flagship initiative under <SantosLink />
            </p>
            {/* buttons */}
            <div className="lg:flex lg:pb-1 pb-10 sm:flex flex-wrap lg:flex-nowrap items-center justify-center md:grid md:grid md:grid-cols-2 gap-1 space-y-2 md:gap-2 pt-2 w-full">
              <Button text="Vote with Afrigold coin" className="rounded-lg px-3 md:px-4 py-2     flex items-center justify-center
    px-1 md:px-8 py-2
    text-xs sm:text-sm md:text-sm
    text-center hover:bg-[#E48900] hover:text-black
    rounded-lg
    w-full sm:w-auto 
    truncate
  " />
              <Button text="Sponsor a category" className="rounded-lg px-3 md:px-4 py-2     flex items-center justify-center
    px-1 md:px-8 py-2
    text-xs sm:text-sm md:text-sm
    text-center hover:bg-[#E48900] hover:text-black
    rounded-lg
    w-full sm:w-auto
    truncate
  " />
              <Button text="Watch NESA TV" className="rounded-lg px-3 md:px-4 py-2     flex items-center justify-center
    px-1 md:px-8 py-2
    text-xs sm:text-sm md:text-sm
    text-center hover:bg-[#E48900] hover:text-black
    rounded-lg
    w-full sm:w-auto
    truncate
  " />
              <Button text="Nominate Now" variant="filled" className="rounded-lg px-3 md:px-4 py-2     flex items-center justify-center
    px-1 md:px-8 py-2
    text-xs sm:text-sm md:text-sm
    text-center hover:bg-[#E48900] hover:text-black
    rounded-lg
    w-full sm:w-auto
    truncate
  " />
            </div>

          </div>
   

          <div className="lg:w-auto md:ml-8 flex justify-center">
          <Image 
            src="/images/nesa-mg.png" 
            alt="home logo"
            width={300} 
            height={300}
            className="max-w-440px md:min-w-72 lg:min-w-440px"
            // className="object-contain"
          />
        </div>
      </div>

            {/* Video Section */}
      <div className="w-full flex justify-center lg:p-16 lg:pt-8">
        <div
          className="relative w-[95%] max-w-[1528px] h-auto aspect-[1528/832] border border-black rounded-[24px] shadow-lg overflow-hidden"
        >
          <video
            controls
            className="w-full h-full object-cover"
            // poster="/images/video-thumbnail.jpg" // replace with actual thumbnail
          >
            <source src="/images/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    
      
    </>
  );
};
export default HeroCenter;