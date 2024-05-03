import Partners from "@/components/Common/Slide/partners";
import { primaryBtn } from "@/lib/helpers";
import Image from "next/image";

const HomePartners = () => {
  return (
    <section className="py-[10rem] mb-[5rem] text-white relative">
      <Image
        src={"/images/bg/back_.jpeg"}
        alt="dark background"
        className="w-full h-full object-cover -z-[2] absolute top-0 left-0"
        width={1024}
        height={600}
      />

      <div className="bg-[#15110999] absolute top-0 left-0 w-full -z-[1] h-full"></div>

      <div className="space-y-8 container">
        <p className="text-white text-center text-2xl font-medium">Meet our Key Partners Powering Education Together</p>

        <div>
          <div className={"relative whitespace-nowrap md:container overflow-hidden md:border-x-2"}>
            <Partners />
            <Partners />
            <Partners />
          </div>
        </div>

        <div className="grid place-content-center">
          <button className={primaryBtn + " bg-midGold"}>Partner with us</button>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
