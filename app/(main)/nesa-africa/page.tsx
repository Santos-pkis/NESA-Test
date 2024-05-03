import TestimoniesShowcase from "@/components/UI/Testimonies/showcase";
import "../../../public/styles/fade.css";
import Image from "next/image";
import GradientBtn from "@/components/Common/Button/gradient-btn";
import NesaAfricaHeader from "@/components/UI/NesaAfrica/header";

const Page = () => {
  return (
    <>
      <NesaAfricaHeader />

      <main>
        <div className="container mb-10">
          <Image className="w-full" src={"/images/testimonies/mapish.svg"} alt="world map" width={1000} height={1000} />
          <div className="flex items-center justify-center -mt-16">
            <GradientBtn text="Request to Host NESA AFRICA" />
          </div>
        </div>

        <TestimoniesShowcase />
      </main>
    </>
  );
};

export default Page;
