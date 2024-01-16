"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { opacityFromBottomV, parent } from "@/lib/utils/variants";

const AboutHeader = () => {
  return (
    <header>
      <div className={`md:min-h-[44rem] min-h-[52rem] bg-zinc-200 text-white relative py-10`}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/bg/about_.png"}
            alt="hero image"
            width={1240}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

        <div className="w-full h-full flex items-center absolute top-0 left-0 overflow-hidden md:pt-20 pt-28">
          <motion.div
            variants={parent}
            initial="initial"
            animate="animate"
            className="container grid md:grid-cols-2 gap-16 items-center -mt-6"
          >
            <motion.div variants={opacityFromBottomV} key={"header-1"} className="flex items-center justify-center">
              <div className="md:w-4/5 grid place-content-center md:aspect-square aspect-video h-auto border-4 border-primaryGold rounded-xl relative overflow-hidden">
                <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />

                <div className="absolute top-0 left-0 w-full h-full bg-black/30 grid place-content-center">
                  <Image src={"/images/video-play.png"} className="mt-5" alt="play" width={60} height={60} />
                </div>
              </div>
            </motion.div>
            <motion.div variants={opacityFromBottomV} key={"header-2"}>
              <div className="space-y-2">
                <h1 className="md:text-5xl text-4xl font-bold text-midGold">About NESA</h1>
                <p className="font-semibold md:text-2xl text-xl">The Founding Story</p>
              </div>
              <p className="mt-8 text-white/90">
                In 2013, NESA was born out of a commitment to address the pressing challenges facing Nigeria&apos;s
                educational sector. The visionaries at Santos Creations saw an opportunity to uplift educational
                standards by acknowledging and rewarding those making significant contributions.
              </p>
              <div className="md:mt-10 mt-4 flex items-center md:gap-3 gap-2 cursor-pointer w-fit">
                <Image src={"/images/about/play.svg"} className="mt-5" alt="play button" width={80} height={80} />
                <p className="text-midGold font-semibold">
                  Watch Our <br /> Short Story
                  <div className="w-[6px] inline-block ml-[2px] h-[6px] rounded-full bg-[#18A0FB]"></div>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
