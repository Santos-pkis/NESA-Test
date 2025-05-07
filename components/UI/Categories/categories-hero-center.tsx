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

type Props = {
  index: number;
  title: string;
  description: string;
  subCategoryPath: string;
};

const CompetitiveHeroCenter = ({ index, title, description, subCategoryPath }: Props) => {

  const ref = useRef<HTMLDivElement>(null);

  const totalSlides = [ ]
  return (
    <>
      <div className="grid md:grid-cols-2 items-center gap-2  md:container min-h-full pb-32 py-20">
          
          <div className="md:space-y-5 space-y-2.5  md:text-left text-center">
            <div className="flex px-3.5 items-center justify-center md:justify-start gap-2 text-primaryGold">
              <FaStar />
              <p className="text-lg px-3.5">Category {index}</p>
              <FaStar />
            </div>

            <h1 className="px-3.5 md:font-semibold font-bold md:text-xl text-lg text-white">
            {title}
            </h1>

            <p className="px-3.5 text-base">
            {description}
            </p>

            <p className="px-3.5 text-primaryGold text-base">
              A flagship initiative under <SantosLink />
            </p>

            <div className="flex pt-1 items-center px-1 gap-1 md:gap-3 justify-center md:justify-start">
              <Button
              text="View Categories"
              className=" rounded-md  md:px-8 py-2 text-center hover:bg-[#E48900] hover:text-black  sm:w-auto w-1/2 text-sm md:text-base"
              />
              <Button text="Nominate Now" variant="filled" className=" rounded-md md:px-8 py-2 text-center w-1/2 hover:bg-[#E48900] hover:text-black  w-auto" />
            </div>
          </div>
        

        <div className="lg:w-auto md:ml-8 pl-10 pr-10 pb-16 flex justify-center">
          <Image src={"/images/nesa-mg.png"} className="min-w-32 md:min-w-72 lg:min-w-440px" alt="" width={300} height={300} />
        </div>
      </div>
            
            
    </>
  );
};

export default CompetitiveHeroCenter;
