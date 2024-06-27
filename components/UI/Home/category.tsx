"use client";
import { allCategories } from "@/lib/data/category";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useSlider from "@/lib/hooks/useSlider";

const Category = () => {
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();

  return (
    <section>
      <div className="space-y-5 py-10">
        <div className="container flex items-center justify-between">
          <div className="space-y-5">
            <h2 className="_under_border font-bold text-xl text-darkGold">Nomination Categories</h2>
            <p className="font-bold text-gray-800 text-2xl">Celebrate the unsung heroes and NOMINATE today!!</p>
          </div>

          <Button text="See all Categories" variant="filled" />
        </div>

        <div className="space-y-16">
          <div className="relative container">
            {/* left arrow */}
            <div
              className="size-12 cursor-pointer rounded-full bg-black/50 duration-300 hover:bg-black text-white grid place-content-center absolute -left-2 top-[44%]"
              onClick={moveLeft}
            >
              <ChevronLeft />
            </div>

            <div className={`flex items-center gap-8 overflow-x-auto container hide_scroll scroll-smooth`} ref={ref}>
              {allCategories.map((category, id) => (
                <div
                  key={id}
                  className={`rounded-2xl flex-shrink-0 max-w-[23rem] min-h-[25rem] duration-200 hover:shadow-2xl ring-midGold bg-darkGold w-full text-white relative overflow-hidden`}
                >
                  <div className="py-8 px-5">
                    <div className="flex flex-col space-y-3 h-full">
                      <div className="max-h-[14rem] overflow-hidden rounded-2xl">
                        <Image
                          src={"/images/category-prev.png"}
                          alt="nesa"
                          className="w-full h-full object-cover"
                          width={400}
                          height={200}
                        />
                      </div>

                      <p className="font-bold text-xl uppercase">{category.title}</p>
                      <p className="font-light leading-[1.8]">{category.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* right arrow */}
            <div
              className="size-12 cursor-pointer rounded-full bg-black/50 duration-300 hover:bg-black text-white grid place-content-center absolute -right-2 top-[44%]"
              onClick={moveRight}
            >
              <ChevronRight />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {Array.from({ length: 4 }).map((_, id) => (
              <div key={id} className="w-3 h-3 rounded-full bg-darkGold/50 mx-1 cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
