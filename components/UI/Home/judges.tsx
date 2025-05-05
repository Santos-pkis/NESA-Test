"use client";
import { ChevronRight } from "lucide-react";
import Button from "@/components/Common/Button";
import useSlider from "@/lib/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Judges = () => {
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();

  return (
    <div>
      <div className="min-h-[50rem] relative flex items-center" style={{ backgroundColor: "#FFF5E0" }}>
        {/* <Image
          src={"/images/bg/timeline.png"}
          alt="dark background"
          className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
          width={1024}
          height={600}
        /> */}

        <div className="container  text-white space-y-16 py-10">
          <div className="space-y-2">
        <h3 className="_under_border text-[32px] font-poppins leading-[40px] font-normal text-black mb-10 mt-2 lg:-mt-5">Meet some of our Judges</h3>
        <div className="grid grid-cols-2 min-w-screen">
        <p className="font-poppins font-normal leading-[30px] tracking-[1%] text-[18px] text-black w-[74vw]">At the New Education Standard Award Africa (NESA-Africa) 2025, <br/>
        <span> our esteemed panel of judges brings together education leaders, innovators, philanthropists, policymakers, and experts across Africa and the diaspora.<br/></span>
<span>They are responsible for ensuring fairness, transparency, and credibility in evaluating nominees across 17 major categories and 141 specialized sub-categories — covering media, corporate social responsibility, NGOs, diaspora contributions, STEM education, and more.<br/></span>
<span>Each judge is carefully vetted for integrity, expertise, and commitment to advancing education for all. </span>
</p>
                <div className="flex justify-end items-end ">
                <button className="flex text-primaryGold items-center gap-2">
                <p>see all Judges</p>
                <ChevronRight />
                </button>
                </div>
                </div>
          </div>

            <div
            className="flex items-center justify-between overflow-x-auto hide_scroll scroll-smooth w-screen px-12 lg:space-x-4 space-x-4 pb-20 pt-6"
            ref={ref}
            style={{
              backgroundImage: "url('/images/bg/judgebg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
            }}
            >
{Array.from({ length: 5 }).map((_, id) => {
  return (
    <div key={id} className="flex-shrink-0 lg:w-[23%] w-[34%]">
      <div className="relative w-full h-[350px]"> {/* Force same height */}
        <Image
          src={`/images/jud${id + 1}.png`}
          alt={`Judge ${id + 1}`}
          fill
        />
      </div>
    </div>
  );
})}

            </div>

          <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {Array.from({ length: 5 }).map((_, id) => (
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