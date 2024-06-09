"use client";
import { primaryBtn } from "@/lib/helpers";
import { DivParentInView } from "@/lib/utils/framer-transitions";
import { toTopV } from "@/lib/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutNewEducation = () => {
  return (
    <>
      <section className="relative bg-[#fff5e0]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <DivParentInView className="space-y-6 container">
            <motion.h3 variants={toTopV} className="_under_border font-bold text-darkGold">
              About NESA Africa
            </motion.h3>

            <motion.p variants={toTopV} className="font-bold text-4xl">
              Championing Education <br /> Excellence in Africa
            </motion.p>

            <DivParentInView className="space-y-6 text-lg">
              <motion.p variants={toTopV} className="text-black">
                <span className="text-primaryGold">New Education Standard Award Africa (NESA Africa) 2024</span> is an
                initiative designed to recognize and honor outstanding achievements in the educational sector across the
                Africa.
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
          <div className="grid place-content-center">
            <Image src={"/images/about-vid.png"} alt="dark background" width={600} height={600} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNewEducation;
