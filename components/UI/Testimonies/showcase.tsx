"use client";
import useSlider from "@/lib/hooks/useSlider";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TestimoniesShowcase = () => {
  const [slideAmount, setSlideAmount] = useState(800);
  const { sliderRef, moveLeft, moveRight } = useSlider(slideAmount);

  useEffect(() => {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 768) {
      setSlideAmount(480);
    }

    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth <= 768) {
        setSlideAmount(480);
      } else {
        setSlideAmount(800);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#fff5e0] py-28 space-y-16">
      <div className="space-y-5 text-center">
        <h2 className="capitalize font-bold md:text-4xl text-3xl">what People are saying</h2>
        <p className="relative font-semibold w-fit mx-auto">
          Do not take our word for it, See what others are saying about NESA Africa
        </p>
      </div>

      <div className="container space-y-5">
        <div className="relative side-fade overflow-x-auto">
          <div className="flex items-center gap-8 overflow-x-auto px-0 hide_scroll scroll-smooth" ref={sliderRef}>
            {new Array(10).fill(null).map((_, id) => (
              <div
                key={id}
                className="py-6 px-7 flex-shrink-0 md:w-[30rem] w-[90%] border border-primaryGold rounded-lg space-y-6"
              >
                <p className="text-zinc-600">
                  As the founder of an education-focused NGO, joining NESA Africa has been a game-changer. The network,
                  resources, and collaborative spirit have amplified our impact. NESA Africa is not just an initiative;
                  it&apos;s a force for positive change in Ghana and across Africa.
                </p>

                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, id) => (
                    <Star className="text-primaryGold" key={id} />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="size-16 bg-zinc-200/50 rounded-full relative overflow-hidden">
                    <Image
                      src={"/images/about/judges/j3.png"}
                      alt=""
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-lg">Davidson Nikoli</p>
                    <p className="text-zinc-600 text-sm">NGO Coordinator, Kenya</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default TestimoniesShowcase;
