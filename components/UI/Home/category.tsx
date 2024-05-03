"use client";
import CategorySlide from "@/components/Common/Slide/category";
import styles from "@/components/Common/Slide/style.module.scss";
import { allCategories } from "@/lib/data/category";
import { DivToTopInView } from "@/lib/utils/framer-transitions";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fromBottom, parentTrans } from "@/lib/utils/transitions";

const Category = () => {
  return (
    <section className="py-[10rem] bg-[#fff5e0]">
      <div className="space-y-5">
        <DivToTopInView className="space-y-5 container">
          <h2 className="_under_border font-bold text-sm text-darkGold">NOMINATION CATEGORY</h2>

          <p className="font-bold text-gray-800 text-3xl">
            Celebrating Unsung Heroes: <span className="font-black">Nominate Today!</span>
          </p>
        </DivToTopInView>

        <div className="space-y-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={parentTrans}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-3 sm:grid-cols-2 gap-8 container`}
          >
            {allCategories.slice(0, 6).map((category, id) => (
              <motion.div
                variants={fromBottom}
                key={id}
                className={`rounded-2xl min-h-[25rem] duration-200 hover:shadow-2xl ring-midGold bg-darkGold w-full text-white relative overflow-hidden`}
              >
                {/* <div className="absolute top-0 left-0 w-full h-full bg-[#181818a8]"></div> */}

                <div className="py-8 px-5">
                  <div className="flex flex-col space-y-6 h-full">
                    <div className="w-16 h-16">
                      <Image src={"/images/logos/small_logo.png"} alt="medal" width={200} height={200} />
                    </div>

                    <p className="font-bold text-xl uppercase">{category.title}</p>
                    <p className="font-light leading-[1.8]">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center justify-center">
            <div>
              <Link href={"/categories"} className="font-bold bg-midGold px-4 py-3 text-black rounded-md">
                See all categories
              </Link>
            </div>
          </div>
        </div>

        <DivToTopInView className={`overflow-hidden flex items-center relative space-x-4 ${styles["award_con"]}`}>
          {/* <CategorySlide categories={allCategories} /> */}
        </DivToTopInView>
      </div>
    </section>
  );
};

export default Category;
