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

const HeroCenter = () => {
  const ref = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   const cxt = gsap.context(() => {
  //     const timeline = gsap.timeline();

  //     if (!ref.current) return;

  //     timeline
  //       .set(ref.current, { visibility: "visible" })
  //       .from("._h_text", { y: "100%", opacity: 0, skewY: 4, delay: 0.2, stagger: { amount: 0.5 } })
  //       .from("._h_button", { y: "100%", opacity: 0, stagger: { amount: 0.1 } });
  //   }, ref);

  //   return () => cxt.revert();
  // }, []);

  return (
    <>
      <div className="relative pt-12">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`container mt-10 -mb-3 relative ${styles["scroll-con"]}`}
        >
          <motion.div
            {...opacityTrans}
            className={`space-x-8 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]} bg-transparent`}
          >
            {new Array(3).fill(null).map((_, id) => (
              <p key={id} className={`py-1 ${styles["head-scroll-text"]}`}>
                -- <span className="font-bold">ANNOUNCEMENT</span> - Nomination
                Starts December 30th 2024. Get ready to nominate your
                Education Champion!
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 items-center md:gap-2 gap-12 container py-20">
        <div>
          <div className="space-y-5 md:text-left text-center">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primaryGold">
              <FaStar />
              <p className="text-lg">The NESA Africa Awards 2024</p>
              <FaStar />
            </div>

            <h1 className="font-semibold text-2xl text-white">
              Welcome to NESA Africa 2025, hosted by SCEF Nigeria Local Chapter! Join us in celebrating excellence in education across Africa
            </h1>

            <p>
              Join Us in Recognizing Excellence & Nominate Outstanding
              Individuals and Organizations for the Prestigious New Education
              Standard Awards, and be inspired by their stories.
            </p>

            <p className="text-primaryGold">
              A flagship initiative under <SantosLink />
            </p>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Button
              text="View Categories"
              className="rounded-md"
              />
              <Button text="Nominate Now" variant="filled" className="rounded-md" />
            </div>
            
            {/* Scroll Feature */}
            <div className="flex justify-between items-center mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-primaryGold"></span>
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
              </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition">
                  <span className="material-icons">&lt;</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition">
                  <span className="material-icons">{'>'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="grid place-content-center">
          <Image src={"/images/nesa-mg.png"} alt="" width={300} height={300} />
        </div>
      </div>

      <CountdownTimer />
    </>
  );
};

export default HeroCenter;
