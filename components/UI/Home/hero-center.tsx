// "use client";
// import { useLayoutEffect, useRef } from "react";
// import styles from "@/components/Common/Slide/style.module.scss";
// import { motion } from "framer-motion";
// import { opacityTrans } from "@/lib/utils/transitions";
// import SantosLink from "@/components/Common/Links/santos";
// import { FaStar } from "react-icons/fa6";
// import Image from "next/image";
// import Button from "@/components/Common/Button";
// import CountdownTimer from "@/components/Common/Others/counter";
// import Link from "next/link";

// import { useState } from "react";

// const HeroCenter = () => {
// ``
//   const ref = useRef<HTMLDivElement>(null);

//   const totalSlides = [ ]
//   // useLayoutEffect(() => {
//   //   const cxt = gsap.context(() => {
//   //     const timeline = gsap.timeline();

//   //     if (!ref.current) return;

//   //     timeline
//   //       .set(ref.current, { visibility: "visible" })
//   //       .from("._h_text", { y: "100%", opacity: 0, skewY: 4, delay: 0.2, stagger: { amount: 0.5 } })
//   //       .from("._h_button", { y: "100%", opacity: 0, stagger: { amount: 0.1 } });
//   //   }, ref);

//   //   return () => cxt.revert();
//   // }, []);

//   return (
//     <>
//       <section className="relative bg-black text-white overflow-hidden px-4 py-10 md:py-16">
//       {/* Logo & Menu */}
//       <div className="flex items-center justify-between mb-6">
//         <Image
//           src="/logo.png"
//           alt="NESA Logo"
//           width={160}
//           height={50}
//           className="object-contain"
//         />
//         <div className="space-y-1 cursor-pointer md:hidden">
//           <div className="w-8 h-1 bg-white rounded"></div>
//           <div className="w-8 h-1 bg-white rounded"></div>
//           <div className="w-8 h-1 bg-white rounded"></div>
//         </div>
//       </div>

//       {/* Announcement */}
//       <p className="border-t border-b border-yellow-600 py-2 text-sm md:text-base text-center mb-6">
//         Nomination Starts from March 15th, 2024. Get ready to nominate your Educators!
//       </p>

//       {/* Text Content */}
//       <div className="text-center space-y-6 max-w-3xl mx-auto">
//         <p className="text-yellow-500 font-semibold">
//           ★ The NESA Africa Awards 2024 ★
//         </p>
//         <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-yellow-400">
//           Celebrating Educational Excellence Across Africa
//         </h1>
//         <p className="text-base md:text-lg leading-relaxed">
//           Join Us in Recognizing Excellence & Nominate Outstanding Individuals and
//           Organizations for the Prestigious New Education Standard Awards, and be
//           inspired by their stories.
//         </p>
//         <p className="text-yellow-400">
//           A flagship initiative under <Link href="#" className="underline">Santos Creations</Link>
//         </p>
//         <Link href="#" className="underline">Educational Foundation</Link>

//         {/* CTA Button */}
//         <Link href="#nominate">
//           <button className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg">
//             Nominate now
//           </button>
//         </Link>
//       </div>

//       {/* Logo Image (Resized and Pushed Down) */}
//       <div className="mt-10 flex justify-center">
//         <Image
//           src="/images/nesa-mg.png"
//           alt="NESA Badge"
//           width={220}
//           height={220}
//           className="object-contain"
//         />
//       </div>
//     </section>
//       </>
//   );
// };

// export default HeroCenter;

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
      <div className="relative max-h-[100vh] pt-12">
        <motion.div
          {...opacityTrans}
          transition={{ delay: 1, duration: 1.5 }}
          className={`container mt-10 md:mb-19 mb-5 relative ${styles["scroll-con"]}`}
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
      
        {/* content */}
      <div className="grid md:grid-cols-2 items-center md:gap-9 gap-9 container md:pt-9 pt-19 pb-19">
        <div>
          <div className="space-y-5 md:text-left text-justify ">
            <div className="flex items-center justify-center md:justify-start text-primaryGold">
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
          </div>
        </div>

        <div className="grid place-content-center max-h-[100%]" >
          <Image src={"/images/nesa-mg.png"} alt="" width={220} height={220} object-contain/>
        </div>
      </div>

      </>
  );
};

export default HeroCenter;
