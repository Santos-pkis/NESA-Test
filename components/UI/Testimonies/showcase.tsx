"use client";
import useSlider from "@/lib/hooks/useSlider";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const TestimoniesShowcase = () => {
  const { sliderRef, moveLeft, moveRight } = useSlider(800);

  return (
    <section className="bg-[#fff5e0] py-28 space-y-16">
      <div className="space-y-5 text-center">
        <h2 className="capitalize font-bold md:text-5xl text-3xl">what People are saying</h2>
        <p className="relative _under_border_center w-fit mx-auto">
          Do not take or word for it, See what others africans are saying
        </p>
      </div>

      <div className="container flex items-center gap-1">
        {/* left button */}
        <button className="outline-none" onClick={moveLeft}>
          <ChevronLeft size={40} className="-ml-5" />
        </button>
        <div className="relative side-fade overflow-x-auto">
          <div className="flex items-center gap-8 overflow-x-auto px-0 hide_scroll scroll-smooth" ref={sliderRef}>
            {new Array(10).fill(null).map((_, id) => (
              <div
                key={id}
                className="py-6 px-7 flex-shrink-0 md:w-[35rem] w-[90%] border border-zinc-400/50 rounded-lg space-y-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-zinc-200/50 rounded-full flex items-center justify-center">
                    <User />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-lg">Davidson Nikoli</p>
                    <p className="text-zinc-600 text-sm">NGO Coordinator, Kenya</p>
                  </div>
                </div>

                <p className="text-zinc-600">
                  Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed quis id mauris massa. Eros, nec egestas
                  vestibulum augue aenean arcu leo vulputate. Magna feugiat ac adipiscing mattis velit facilisi metus.
                  Dolor urna, mi at tincidunt. Nulla.
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="outline-none" onClick={moveRight}>
          <ChevronRight size={40} className="-mr-5" />
        </button>
      </div>
    </section>
  );
};

export default TestimoniesShowcase;
