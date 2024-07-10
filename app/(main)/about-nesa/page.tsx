"use client";
import "../../../public/styles/fade.css";
import Image from "next/image";
import NesaAfricaHeader from "@/components/UI/NesaAfrica/header";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import TypeOfAwards from "@/components/UI/About/type-of-awards";
import useSlider from "@/lib/hooks/useSlider";
import { panel } from "@/lib/data/about";
import TestimoniesShowcase from "@/components/UI/Testimonies/showcase";
import Button from "@/components/Common/Button";

const Page = () => {
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();

  return (
    <>
      <NesaAfricaHeader />

      <main className="space-y-20">
        <section className="bg-[#fff5e0] space-y-20 py-20">
          <div className="container flex flex-col lg:flex-row items-center gap-20">
            {/* <ImageIcon /> */}
            <Image
              src={"/images/globe_nesa.png"}
              alt="award"
              className=""
              height={585}
              width={521}
            />
            <div className="space-y-5">
              <h2 className="text-[2.5rem] font-[500] leading-[3rem] mb-4 bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                Two Prestigious awards awaits in every category
              </h2>
              <p className="font-[300] text-[1.125rem] lg:text-[1.125rem] leading-[1.75rem]">
                Through the selection process, our judges meticulously examine
                nominees, choosing a winner from each subcategory to be honored
                with the esteemed &apos;Platinum Award.&apos; These winners
                progress to the final stage within their respective categories,
                where the ultimate victor in each group claims success and is
                honored with the prestigious &apos;Blue Garnet Award,&apos;
                marking the pinnacle of excellence.
              </p>
            </div>
          </div>

          <TypeOfAwards />
        </section>

        <section className="space-y-20 pb-20">
          <div className="container space-y-10">
            <div className="space-y-4 md:px-24 lg:px-32 text-center">
              <h3 className="text-3xl font-semibold">
                NESA Africa in every African Country
              </h3>
              <p>
                NESA Africa is committed to reaching every corner of the African
                continent. Each country has a dedicated portal to manage local
                educational projects, ensuring tailored solutions and direct
                impact in every community.
              </p>
            </div>

            <div>
              <Image
                className="w-full"
                src={"/images/testimonies/map_.png"}
                alt="world map"
                width={1000}
                height={1000}
              />
            </div>

            <div className="grid place-content-center">
              <Button text="Request to Host NESA Africa" variant="filled" />
            </div>
          </div>

          <div>
            <TestimoniesShowcase />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
