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
          <div className="container grid grid-cols-2 items-center gap-20">
            <div className="border rounded-md grid place-content-center border-black h-auto aspect-square">
              <ImageIcon />
            </div>
            <div className="space-y-5">
              <h2 className="text-primaryGold text-4xl font-semibold">
                Two Prestigious awards awaits in every category
              </h2>
              <p className="text-lg text-justify text-black">
                Through the selection process, our judges meticulously examine nominees, choosing a winner from each
                subcategory to be honored with the esteemed &apos;Platinum Award.&apos; These winners progress to the
                final stage within their respective categories, where the ultimate victor in each group claims success
                and is honored with the prestigious &apos;Blue Garnet Award,&apos; marking the pinnacle of excellence.
              </p>
            </div>
          </div>

          <TypeOfAwards />
        </section>

        <section className="space-y-20 pb-20">
          <div className="container space-y-7">
            <p className="text-3xl text-center font-bold">The NESA Awards Panel of Judges</p>

            <div className="relative">
              {/* left arrow */}
              <div
                className="size-12 cursor-pointer rounded-full bg-black/50 z-[100] duration-300 hover:bg-black text-white grid place-content-center absolute -left-2 top-[40%]"
                onClick={moveLeft}
              >
                <ChevronLeft />
              </div>

              <div className={`flex items-center gap-8 overflow-x-auto container hide_scroll scroll-smooth`} ref={ref}>
                {panel.map((judge, id) => (
                  <div
                    key={id}
                    className={`rounded-2xl flex-shrink-0 max-w-[23rem] min-h-[25rem] duration-200 hover:shadow-2xl ring-midGold bg-darkGold w-full text-white relative overflow-hidden`}
                  >
                    <div className="py-8 px-5">
                      <div className="flex flex-col space-y-3 h-full">
                        <div className="max-h-[16rem] overflow-hidden rounded-2xl">
                          <Image
                            src={judge.image}
                            alt={"judge - " + judge.name}
                            className="w-full h-full object-cover"
                            width={400}
                            height={200}
                          />
                        </div>

                        <div className="space-y-1">
                          <p className="font-bold text-xl">{judge.name}</p>
                          <p className="font-light leading-[1.8]">{judge.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* right arrow */}
              <div
                className="size-12 cursor-pointer rounded-full bg-black/50 z-[100] duration-300 hover:bg-black text-white grid place-content-center absolute -right-2 top-[40%]"
                onClick={moveRight}
              >
                <ChevronRight />
              </div>

              {/* <div className="flex items-center gap-2 justify-center py-10">
                {Array.from({ length: 5 }).map((_, id) => (
                  <div
                    key={id}
                    className={`w-3 h-3 cursor-pointer rounded-full ${id === 0 ? "bg-darkGold" : "bg-zinc-300"}`}
                  ></div>
                ))}
              </div> */}
            </div>
          </div>

          <div className="container space-y-10">
            <div className="space-y-4 md:px-24 lg:px-32 text-center">
              <h3 className="text-3xl font-semibold">NESA Africa in every African Country</h3>
              <p>
                NESA Africa is committed to reaching every corner of the African continent. Each country has a dedicated
                portal to manage local educational projects, ensuring tailored solutions and direct impact in every
                community.
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
