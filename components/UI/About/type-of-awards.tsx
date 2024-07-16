"use client";

import PlayIcon from "@/components/Common/Icons/play";
import { opacityV } from "@/lib/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Selector = "platinum" | "blue-garnet" | "certificate-of-recognition";

interface AwardType {
  selector: Selector;
  tab: string;
  heading: string;
}

const awardDescriptionData: AwardType[] = [
  {
    selector: "certificate-of-recognition",
    tab: "CERTIFICATE OF RECOGNITION",
    heading: "Certificate of Recognition Award",
  },
  {
    selector: "platinum",
    tab: "PLATINUM AWARD",
    heading: "The Platinum Award",
  },
  {
    selector: "blue-garnet",
    tab: "BLUE GARNET AWARD",
    heading: "The Blue Garnet Award",
  },
];

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0 },
};

const TypeOfAwards = () => {
  const [selected, setSelected] = useState<Selector>("platinum");

  return (
    <section className="my-10 md:my-20 px-4 md:px-8 lg:px-28">
      <div className="container mx-auto">
        <div className="space-y-6 md:space-y-8">
          <h3 className="font-[600] text-2xl md:text-3xl lg:text-4xl text-darkBrown">
            Excellence unfolds across three distinguished tiers within the
            N.E.S.A Awards
          </h3>
          <p className="text-sm md:text-base">
            The Nigeria Standard Awards is committed to honoring every nominee,
            ensuring recognition and appreciation, irrespective of winning. To
            achieve this, we&#39;ve designed three tiers of awards, guaranteeing
            acknowledgment and celebration for all nominees contributions.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {awardDescriptionData.map((data, id) => (
              <div
                key={id}
                onClick={() => setSelected(data.selector)}
                className={`py-3 md:py-4 rounded-xl cursor-pointer text-center border duration-300 font-bold text-sm md:text-base ${
                  selected === data.selector
                    ? "text-deepGold bg-secondaryDark border-transparent"
                    : "text-primaryGold border-primaryGold"
                }`}
              >
                <p className="uppercase">{data.tab}</p>
              </div>
            ))}
          </div>

          <AnimatePresence initial={false} mode="wait">
            {awardDescriptionData
              .filter((data) => data.selector === selected)
              .map((data) => (
                <motion.div
                  {...variants}
                  key={data.selector}
                  className="space-y-6 md:space-y-8"
                >
                 <div className="w-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl">
  <div className="aspect-video sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] xl:aspect-[28/9]">
    <video
      src={"/images/about.mp4"}
      autoPlay
      loop
      muted={false}
      controls
      playsInline
      className="w-full h-full object-cover rounded-2xl"
    ></video>
  </div>
</div>
                  <div className="space-y-3 md:space-y-4">
                    <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-darkGold">
                      {data.heading}
                    </p>
                    <p className="text-sm md:text-base">
                      {data.heading} signifies acknowledgment of specific
                      excellence within the sub-categories under each main
                      category. Recipients of {data.heading} experience
                      increased visibility and recognition in their specialized
                      areas, positioning them as experts and leaders. This
                      recognition extends beyond the immediate community,
                      establishing the awardees as noteworthy contributors with
                      influence in their chosen fields.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font- text-sm md:text-base">Criteria:</p>
                    <p className="text-sm md:text-base">
                      Nominees for {data.heading} are organizations and
                      individuals nominated and voted for in the sub-categories
                      under each main category. The criteria are tailored to
                      identify outstanding achievements and noteworthy
                      contributions within these specialized areas. The
                      highest-voted nominee in each sub-category is awarded{" "}
                      {data.heading}, representing excellence and innovation
                      within their respective fields.
                    </p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TypeOfAwards;