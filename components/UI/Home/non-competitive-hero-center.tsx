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

const NonCompetitiveHeroCenter = () => {

  const ref = useRef<HTMLDivElement>(null);

  const totalSlides = [ ]
  return (
    <>
      <div className="grid md:grid-cols-2 items-center md:gap-2 gap-12 container py-20">
        <div>
          <div className="space-y-5 md:text-left text-center">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primaryGold">
              <FaStar />
              <p className="text-lg">Category 1</p>
              <FaStar />
            </div>

            <h1 className="font-semibold text-2xl text-white">
              Best Educational-Friendly State in Nigeria
            </h1>

            <p>
            Education is the foundation of progress, and this category honors the Nigerian state that <br /> has demonstrated outstanding commitment to fostering a thriving learning <br /> environment. The Best Educational-Friendly State award recognizes a state government <br /> that has invested significantly in quality education, infrastructure, policies, and initiatives <br /> that enhance accessibility, innovation, and academic excellence.
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

        <div className="grid place-content-center">
          <Image src={"/images/nesa-mg.png"} alt="" width={300} height={300} />
        </div>
      </div>

      <CountdownTimer />

              
            
    </>
  );
};

export default NonCompetitiveHeroCenter;
