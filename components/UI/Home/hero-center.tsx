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
 <div className="h-screen py-32 pb-0">
      <div className="absolute inset-0 -z-[1]">
          <Image
          src={"/images/header.png"}
          alt="hero image"
          fill
          className="object-cover z-0 opacity-40"
            />
        </div>
       {/* <div className="grid md:grid-cols-2 items-center md:gap-2 gap-12 container py-20">
        <div> 
          <div className="space-y-5 md:text-left text-center">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primaryGold"> */}
        <div className="z-10 grid md:grid-cols-2 items-center justify-center md:justify-between container pb-0 mx-auto">
          <div className="space-y-2 text-center md:text-left">
            {/* <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 mx-auto lg:mx-0 max-w-[700px] bg-gradient-to-r from-[#FFC247] to-[#E48900] bg-clip-text text-transparent lg:-ml-10"> */}
            <div className="flex items-center justify-center md:justify-start text-primaryGold mb-1">
              <FaStar />
              <p className="text-lg">{  } The NESA Africa Awards 2024 {  }</p>
              {/* <p >The NESA Africa Awards 2024</p> */}
              <FaStar />
            </div>

          
            <h1 className="font-semibold text-2xl text-white">
            Celebrating Educational Excellence Across Africa
         </h1>
         <p className="text-base md:text-lg leading-relaxed">
           Join Us in Recognizing Excellence & Nominate Outstanding Individuals and
           Organizations for the Prestigious New Education Standard Awards, and be
           inspired by their stories.
         </p>


            <p className="text-primaryGold">
              A flagship initiative under <SantosLink />
            </p>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Button
                text="View Categories"
                
                className="rounded-lg"
              />
              <Button text="Nominate Now" variant="filled" className="rounded-lg" />
            </div>
          </div>
        {/* </div> */}

        <div className="grid place-content-center">
        {/* <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0"> */}
          <Image src={"/images/nesa-mg.png"} alt="home logo" width={220} height={220} />
        </div>
      </div>
      </div>
    
      
    </>
  );
};
export default HeroCenter;





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