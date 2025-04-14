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
      <div className="grid md:grid-cols-2 items-center md:gap-2 gap-12 container py-20">
        <div>
          <div className="space-y-5 md:text-left text-center">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primaryGold">
              <FaStar />
              <p className="text-lg">Category {index}</p>
              <FaStar />
            </div>

            <h1 className="font-semibold text-2xl text-white">
            {title}
            </h1>

            <p>
            {description}
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
            
            
    </>
  );
};

export default CompetitiveHeroCenter;
