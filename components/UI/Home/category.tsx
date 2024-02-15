"use client";
import CategorySlide from "@/components/Common/Slide/category";
import styles from "@/components/Common/Slide/style.module.scss";
import { allCategories } from "@/lib/data/category";

const Category = () => {
  return (
    <section className="py-[10rem] bg-[#fff5e0]">
      <div className="space-y-5">
        <div className="space-y-5 container">
          <h2 className="_under_border font-bold text-sm text-darkGold">NOMINATION CATEGORY</h2>

          <p className="font-bold text-gray-800 text-3xl">
            Celebrating Unsung Heroes: <span className="font-black">Nominate Today!</span>
          </p>
        </div>

        <div className={`overflow-hidden flex items-center relative space-x-4 ${styles["award_con"]}`}>
          <CategorySlide categories={allCategories} />
        </div>
      </div>
    </section>
  );
};

export default Category;
