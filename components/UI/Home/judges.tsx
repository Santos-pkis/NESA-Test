"use client";

import Button from "@/components/Common/Button";
import useSlider from "@/lib/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Judges = () => {
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();

  return (
    <div>
      <div className="min-h-[50rem] relative flex items-center">
        <Image
          src={"/images/bg/timeline.png"}
          alt="dark background"
          className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
          width={1024}
          height={600}
        />

        <div className="container text-white space-y-16 py-10">
          <div className="space-y-2">
            <h3 className="_under_border font-semibold text-2xl">Meet The Judges</h3>
            <p className="text-2xl">Get to know the NESA Judges, their background, and acheivements</p>
          </div>

          <div className="flex items-center justify-between overflow-x-auto scroll-smooth" ref={ref}>
            {Array.from({ length: 3 }).map((_, id) => (
              <div key={id}>
                <Image src={`/images/j${id + 1}.png`} alt={`Judge ${id + 1}`} width={300} height={400} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {Array.from({ length: 4 }).map((_, id) => (
                <div
                  key={id}
                  className={`w-3 h-3 rounded-full bg-white cursor-pointer ${id === 0 ? "bg-primaryGold" : ""}`}
                ></div>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-black">
              <button className="size-12 rounded-xl bg-white grid place-content-center" onClick={moveLeft}>
                <ArrowLeft />
              </button>
              <button className="size-12 rounded-xl bg-primaryGold grid place-content-center" onClick={moveRight}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
