"use client";
import { primaryBtn } from "@/lib/helpers";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/components/UI/Home/style.module.scss";
import { motion } from "framer-motion";
import { opacityTrans } from "@/lib/utils/transitions";

const HeroCenter = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!ref.current) return;

      timeline
        .set(ref.current, { visibility: "visible" })
        .from("._h_text", { y: "100%", opacity: 0, skewY: 4, delay: 0.2, stagger: { amount: 0.5 } })
        .from("._h_button", { y: "100%", opacity: 0, stagger: { amount: 0.1 } })
        .from("._h_medal", { y: "-100%", opacity: 0, duration: 1.5, ease: "power4.inOut", stagger: { amount: 0.1 } });

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      t2.to("#_h_medal1", { y: "40%" }).to("#_h_medal2", { y: "40%" }, 0);
    }, ref);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <motion.div
        {...opacityTrans}
        transition={{ delay: 1, duration: 1.5 }}
        className={`mt-10 -mb-3 container space-x-8 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]}`}
      >
        {new Array(3).fill(null).map((_, id) => (
          <p key={id} className={`text-lg py-1 ${styles["head-scroll-text"]}`}>
            -- <span className="font-bold">ANNOUNCEMENT</span> - Nomination Starts from January 20th, 2024, Get ready to
            nominate your Education Champion!
          </p>
        ))}
      </motion.div>
      <div className="flex items-center justify-center h-[calc(100%-200px)] invisible" ref={ref}>
        <div className="container flex items-end justify-between">
          <Image src={"/images/medal.png"} alt="medal" width={90} height={270} className="_h_medal" id="_h_medal1" />

          <div className="max-w-6xl mx-auto">
            <div className="space-y-7">
              <div className="overflow-hidden">
                <h1 className="text-3xl _h_text">Welcome to NESA Nigeria 2023 Awards</h1>
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-7xl text-[#d9a53c] _h_text">
                  A Decade of Educational Excellence & Transformation
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="text-xl _h_text">
                  A flagship initiative under NESA Africa by Santos Creations Educational Foundation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 justify-center mt-8 overflow-hidden">
              <button className={`${primaryBtn} _h_button`}>Nominate A Champion</button>
              <button className="border-[#e0aa3e] px-5 font-semibold _h_button py-3 rounded-md border-2 bg-[#191307]">
                What&apos;s NESA?
              </button>
            </div>
          </div>

          <Image src={"/images/medal.png"} alt="medal" width={90} height={270} className="_h_medal" id="_h_medal2" />
        </div>
      </div>
    </>
  );
};

export default HeroCenter;
