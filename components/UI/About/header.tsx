import Image from "next/image";
import { motion } from "framer-motion";
import { toTopV, parentV, opacityV } from "@/lib/utils/variants";

const data = [
  { heading: "15k+", name: "Students Reached" },
  { heading: "500+", name: "Partners" },
  { heading: "300+", name: "Awarded Leaders" },
];

const AboutHeader = () => {
  return (
    <header className="relative min-h-screen text-white py-10 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#191307CC] z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          variants={parentV}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 md:pt-24"
        >
          <motion.div variants={toTopV} className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl mt-2">The Founding Story</p>

            <div className="flex justify-between items-center mt-8">
              {data.map((item, id) => (
                <div key={id} className="text-center flex items-center">
                  <div className="flex flex-col items-center">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                      {item.heading}
                    </p>
                    <p className="text-sm md:text-base mt-1">{item.name}</p>
                  </div>
                  {id < data.length - 1 && (
                    <div className="w-px h-12 bg-gradient-to-r from-[#FFC247] to-[#E48900] mx-2 md:mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={toTopV} className="md:w-1/2">
            <p className="text-base md:text-lg mb-4">
              New Education Standard Award Africa (NESA Africa) is an initiative designed to recognize, celebrate, and foster educational excellence and innovation across the African continent. Rooted in the vision of enhancing the quality of education and making it accessible to all.
            </p>
            <p className="text-base md:text-lg">
              NESA Africa operates with the mission of spotlighting significant contributions by individuals, organizations, educational institutions, and other stakeholders towards achieving these goals.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={opacityV} className="mt-12 relative overflow-hidden">
          <div className="relative w-full mx-auto max-w-[1200px] h-[300px] md:h-auto">
            <video
              src="/images/about.mp4"
              className="w-full h-full object-cover rounded-md"
              controls
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default AboutHeader;
