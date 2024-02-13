"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { opacityFromBottomV, parent } from "@/lib/utils/variants";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { Category } from "@/lib/types/global";
import toast from "react-hot-toast";
import { allCategories } from "@/lib/data/category";

type Props = { id: number; category: Category | undefined };

const CategoriesDetailsHeader: React.FC<Props> = ({ id, category }) => {
  const router = useRouter();

  if (!category) {
    toast.error("category not found");
    redirect("/categories");
  }

  return (
    <header>
      <div className={`md:min-h-[48rem] min-h-screen bg-zinc-200 text-white relative`}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/bg/about_.png"}
            alt="hero image"
            width={1240}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

        <div className="w-full h-full flex items-center absolute top-0 left-0 md:pt-12 pt-28 text-center md:text-start">
          <motion.div
            variants={parent}
            initial="initial"
            animate="animate"
            className="container flex justify-between gap-6 md:gap-0 items-center"
          >
            <motion.div variants={opacityFromBottomV} className="space-y-6 max-w-3xl">
              <div className="space-y-1">
                <p className="font-semibold text-sm text-white">Nominate an Education Champion!</p>
                <h1 className="font-bold md:text-5xl text-4xl text-midGold md:leading-[1.4]">
                  CATEGORY {id}: <br /> {category?.title}
                </h1>
              </div>

              <p>{category.detailsDescription ?? category.description}</p>

              <div className="flex items-center gap-4">
                <button
                  className={`w-12 h-12 duration-300 rounded-lg disabled:bg-zinc-400 bg-midGold text-black grid place-content-center`}
                  onClick={() => (id > 1 ? router.push(`/categories/${id - 1}`) : {})}
                  disabled={id < 2}
                >
                  <ArrowLeft />
                </button>
                <button
                  className={`w-12 h-12 duration-300 rounded-lg bg-midGold disabled:bg-zinc-400 text-black grid place-content-center`}
                  onClick={() => router.push(`/categories/${id + 1}`)}
                  disabled={id >= allCategories.length}
                >
                  <ArrowRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={opacityFromBottomV}
              className="grid place-content-center opacity-40 duration-300 md:opacity-100"
            >
              <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default CategoriesDetailsHeader;
