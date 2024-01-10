"use client";
import { primaryBtn } from "@/lib/helpers";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/components/Common/Slide/style.module.scss";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";
import Link from "next/link";

const HeroCenter = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!ref.current) return;

      timeline
        .set(ref.current, { visibility: "visible" })
        .from("._h_text", { y: "100%", opacity: 0, skewY: 4, delay: 0.2, stagger: { amount: 0.5 } })
        .from("._h_button", { y: "100%", opacity: 0, stagger: { amount: 0.1 } });
    }, ref);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="relative">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`container mt-10 -mb-3 relative ${styles["scroll-con"]}`}
        >
          <motion.div
            {...opacityTrans}
            className={`space-x-8 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]}`}
          >
            {new Array(3).fill(null).map((_, id) => (
              <p key={id} className={`text-lg py-1 ${styles["head-scroll-text"]}`}>
                -- <span className="font-bold">ANNOUNCEMENT</span> - Nomination Starts from January 20th, 2024, Get
                ready to nominate your Education Champion!
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center h-[calc(100%-200px)] invisible" ref={ref}>
        <div className="container flex items-end justify-between md:mt-0 mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-7">
              <div className="overflow-hidden">
                <h1 className="lg:text-2xl md:text-xl text-lg _h_text">Welcome to NESA Nigeria 2023 Awards</h1>
              </div>
              <div className="overflow-hidden">
                <p className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#d9a53c] _h_text">
                  A Decade of Educational Excellence & Transformation
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="md:text-xl sm:text-lg _h_text">
                  A flagship initiative under NESA Africa by Santos Creations Educational Foundation
                </p>
              </div>
            </div>

            <div className="flex items-center md:gap-6 gap-4 text-sm md:text-base justify-center mt-8 overflow-hidden">
              <button className={`${primaryBtn} _h_button bg-midGold`}>Vote Now</button>
              <div>
                <Link href={"/about"}>
                  <button className="border-[#e0aa3e] px-5 font-semibold _h_button py-3 rounded-md border-2 bg-[#191307]">
                    What&apos;s NESA?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCenter;
