"use client";
import { allCategories } from "@/lib/data/category";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useSlider from "@/lib/hooks/useSlider";

const Category = () => {
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();

  return (
    <section className="bg-white">
      <div className="space-y-5 py-10">
        <div className="container flex items-center justify-between">
          <div className="space-y-2">
          <h2 className="font-bold text-3xl relative inline-block">
  Nomination Categories
  <span
    className="absolute left-0 w-1/2 h-1"
    style={{
      bottom: '-5px',
      borderBottom: '4px solid',
      borderImageSource: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
      borderImageSlice: 1,
    }}
  ></span>
</h2>

            <p className="text-gray-800 text-2xl">Celebrate the unsung heroes and NOMINATE today!!</p>
          </div>

          <Link href="/categories" className="text-yellow-500 hover:underline">
            See all Categories &gt;
          </Link>
        </div>

        <div className="relative container">
          {/* left arrow */}
          <div
            className="size-12 cursor-pointer rounded-full bg-gray-300 text-gray-600 grid place-content-center absolute -left-6 top-1/2 transform -translate-y-1/2 z-10"
            onClick={moveLeft}
          >
            <ChevronLeft />
          </div>

          <div className={`flex items-stretch gap-6 overflow-x-auto hide_scroll scroll-smooth`} ref={ref}>
            {allCategories.map((category, id) => (
              <div
                key={id}
                className="flex-shrink-0 w-[340px] bg-[#191307] text-white rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <Image
                      src="/images/nesa-card.png"
                      alt="NESA"
                      width={300}
                      height={150}
                      className="w-full object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                  <p className="text-sm flex-grow">{category.description}</p>
                  <button
                    className="w-full py-3 mt-4 text-black font-normal hover:bg-yellow-600 transition duration-300 rounded-xl"
                    style={{
                      background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
                    }}
                  >
                    Nominate
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* right arrow */}
          <div
            className="size-12 cursor-pointer rounded-full bg-gray-300 text-gray-600 grid place-content-center absolute -right-6 top-1/2 transform -translate-y-1/2 z-10"
            onClick={moveRight}
          >
            <ChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6">
          {Array.from({ length: 4 }).map((_, id) => (
            <div 
              key={id} 
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${id === 1 ? 'bg-yellow-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;