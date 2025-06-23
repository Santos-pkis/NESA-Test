"use client";
"use client";
import React from "react";
import styles from "@/components/Common/Slide/style.module.scss";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";
import SantosLink from "@/components/Common/Links/santos";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";

const HeroCenter = () => {
  const router = useRouter();

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

      <motion.div
        className="grid md:grid-cols-2 items-center md:justify-start gap-1 md:gap-x-1 lg:gap-x-0 md:py-2 lg:py-2 px-2  lg:px-12 py-2 h-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <motion.div
          className="space-y-3 text-center md:text-left md:min-w-full"
          variants={{
        hidden: {},
        visible: {},
          }}
        >
          <motion.div
        className="flex items-center justify-center md:justify-start md:gap-2 gap-1 text-primaryGold pt-4 md:pt-8 lg:pt-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
          >
        <FaStar />
        <p className="text-lg md:font-semibold ">The NESA Africa Awards 2025</p>
        <FaStar />
          </motion.div>

          <motion.h1
        className="text-[24px] md:text-[28px] lg:text-[40px] lg:leading-[54px] tracking-[1%] text-white font-raleway"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
        🏆 Honoring Africa's Changemakers – Building the Future of Education Across the Continent
          </motion.h1>

          <motion.p
        className="lg:text-[16px] lg:text-[18px] md:text-[16px] text-[14px] md:leading-[26px] font-normal md:text-gray-300 text-[#FFFFFF] font-poppins"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
        After 15 years of vision, setbacks, and unwavering commitment — NESA-Africa 2025 emerges as the continent’s highest platform for honoring those rebuilding African education from the ground up.
          </motion.p>

          <motion.p
        className="md:text-[20px] text-[14px] leading-[32px] font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] to-[#E48900]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          >
        The NESA Africa Awards 2025 is a flagship initiative of the Santos Creations Educational Foundation (SCEF) — recognizing visionaries across NGOs, corporations, policy, media, EdTech, philanthropy, creative sectors, and the diaspora who are architecting Africa’s education systems. <SantosLink />
        <br />
          </motion.p>

          <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
        <span className="text-red">🛑</span> This is not a teacher or student award. It celebrates builders of systems, advocates of change, and funders of futures.
          </motion.p>
        </motion.div>
        

        <motion.div
          className="lg:w-auto md:ml-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <Image
            src="/images/nesa-mg.png"
            alt="home logo"
            width={300}
            height={300}
            className="max-w-440px md:min-w-72 lg:min-w-440px"
          />
        </motion.div>
    </motion.div>

      {/* buttons */}
          <motion.div
      className="lg:flex lg:pb-1 pb-10 sm:flex flex-wrap lg:flex-nowrap lg:px-10 items-center md:grid md:grid-cols-2 gap-1 space-y-2 md:gap-2 pt-5 w-full lg:w-full md:w-[640px] md:pl-2 md:pr-44"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
    >
        <Button
          text="Vote with Afrigold coin"
          className="rounded-lg px-3 md:px-4 py-2 flex items-center justify-center px-1 md:px-8 py-2 md:-mb-2 text-xs sm:text-sm md:text-sm text-center hover:bg-[#E48900] hover:text-black rounded-lg w-full sm:w-auto truncate"
        />
        <Button
          text="Sponsor a category"
          onClick={() => router.push("/sponsor")}
          className="rounded-lg px-3 md:px-4 py-2 flex items-center justify-center px-1 md:px-8 py-2 text-xs sm:text-sm md:text-sm text-center hover:bg-[#E48900] hover:text-black rounded-lg w-full sm:w-auto truncate"
        />
        <Button
          text="Watch NESA TV"
          onClick={() => router.push("/nesatv")}
          className="rounded-lg px-3 md:px-4 py-2 flex items-center justify-center px-1 md:px-8 py-2 text-xs sm:text-sm md:text-sm text-center hover:bg-[#E48900] hover:text-black rounded-lg w-full sm:w-auto truncate"
        />
        <Button
          text="Nominate Now"
          variant="filled"
          onClick={() => router.push("/nomination/sub-categories/africa-lifetime-education-icon")}
          className="rounded-lg px-3 md:px-4 py-2 flex items-center justify-center px-1 md:px-8 py-2 text-xs sm:text-sm md:text-sm text-center hover:bg-[#E48900] hover:text-black rounded-lg w-full sm:w-auto truncate"
        />
      </motion.div>

      {/* Video Section */}
      <div className="w-full flex justify-center lg:p-16 lg:pt-8">
        <div className="relative w-[95%] max-w-[1528px] h-auto aspect-[1528/832] border border-black rounded-[24px] shadow-lg overflow-hidden">
          <video controls className="w-full h-full object-cover">
            <source src="/images/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroCenter;