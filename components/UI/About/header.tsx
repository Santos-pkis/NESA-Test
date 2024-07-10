"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { toTopV, parentV, opacityV } from "@/lib/utils/variants";

const data = [
  { heading: "15k+", name: "Students Reached" },
  { heading: "500+", name: "Students Reached" },
  { heading: "300+", name: "Students Reached" },
];

const AboutHeader = () => {
  return (
    <header>
      <div
        className={`min-h-[80rem] h-fit w-full bg-zinc-200 text-white relative py-10`}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/header.png"}
            alt="hero image"
            width={1240}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

        <div className="w-full h-fit mt-[5rem] lg:mt-[6rem] justify-center flex items-center absolute top-0 left-0 overflow-hidden md:pt-20 pt-28 space-y-16">
          <div className="space-y-16">
            <div>
              <motion.div
                variants={parentV}
                initial="initial"
                animate="animate"
                className="container grid md:grid-cols-2 gap-16 lg:px-8 px-4 items-center -mt-6"
              >
                <motion.div
                  variants={toTopV}
                  key={"header-2"}
                  className="space-y-28"
                >
                  <div className="space-y-1 lg:text-left text-center">
                    <h1 className="text-[2.5rem] font-[500] leading-[4.5rem] bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                      About Us
                    </h1>
                    <p className="font-medium text-[1.75rem] leading-[3rem]">
                      The Founding Story
                    </p>
                  </div>

                  <div className="lg:flex hidden items-center divide-x-2 divide-primaryGold">
                    {data.map((item, id) => (
                      <div
                        key={id}
                        className="flex flex-col items-center justify-center px-4 text-center"
                      >
                        <p className="text-[1.8rem] font-[600] leading-[3.125rem] bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                          {item.heading}
                        </p>
                        <p className="font-medium text-[1rem] leading-[1.5rem]">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={toTopV}
                  key={"header-1"}
                  className="flex lg:text-left text-center flex-col justify-between gap-8 md:text-lg"
                >
                  <p className="font-[300] text-[1.2rem] lg:text-[1.25rem] leading-[2rem]">
                    New Education Standard Award Africa (NESA Africa) is an
                    initiative designed to recognize, celebrate, and foster
                    educational excellence and innovation across the African
                    continent. Rooted in the vision of enhancing the quality of
                    education and making it accessible to all.
                  </p>
                  <p className="font-[300] text-[1.2rem] lg:text-[1.25rem] leading-[2rem]">
                    NESA Africa operates with the mission of spotlighting
                    significant contributions by individuals, organizations,
                    educational institutions, and other stakeholders towards
                    achieving these goals.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              {...opacityV}
              className="container rounded-2xl relative overflow-hidden"
            >
              <Image
                src={"/images/about-vid-cover.png"}
                alt="cover"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex lg:hidden items-center divide-x-2 divide-primaryGold">
              {data.map((item, id) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center px-4 text-center"
                >
                  <p className="text-[2rem] font-[600] leading-[3.125rem] bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                    {item.heading}
                  </p>
                  <p className="font-medium text-[1rem] leading-[1.5rem]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
