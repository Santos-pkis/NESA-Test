"use client";
import { primaryBtn } from "@/lib/helpers";
import { DivParentInView } from "@/lib/utils/framer-transitions";
import { toTopV } from "@/lib/utils/variants";
import { motion } from "framer-motion";

const AboutNewEducation = () => {
  return (
    <section className="relative py-36">
      <DivParentInView className="space-y-6 container">
        <motion.h3 variants={toTopV} className="_under_border font-bold text-darkGold">
          ABOUT NEW EDUCATION STANDARD AWARDS:
        </motion.h3>
        <motion.p variants={toTopV} className="font-bold md:text-5xl text-4xl">
          Championing Education <br /> Excellence in Africa
        </motion.p>

        <DivParentInView className="space-y-6 text-lg">
          <motion.p variants={toTopV} className="text-black">
            <span className="font-bold">New Education Standard Award Africa (NESA Africa)</span> is an initiative
            designed to recognize, celebrate and foster educational excellence and innovation across the African
            continent.
          </motion.p>

          <motion.p variants={toTopV}>
            Rooted in the vision of enhancing the quality of education and making it accessible to all,{" "}
            <span className="font-bold">NESA Africa</span> operates with the mission of spotlighting significant
            contributions by individuals, organizations, educational institutions, and other stakeholders towards
            achieving these goals.
          </motion.p>

          <button className={primaryBtn}>Learn More</button>
        </DivParentInView>
      </DivParentInView>
    </section>
  );
};

export default AboutNewEducation;
