"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { fromLeft, fromTop, parentTrans, parentTransActivate } from "@/lib/utils/transitions";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Awards",
    path: "/awards",
  },
  {
    label: "Media",
    path: "/media",
  },
  {
    label: "N.E.S.A",
    path: "/nesa",
  },
];

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <nav className="bg-[#17120a]">
      <div className="container py-4 grid grid-cols-3 overflow-y-hidden text-white" ref={ref}>
        <motion.div {...fromLeft}>
          <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} id="nav_logo" />
        </motion.div>

        <motion.div
          variants={parentTrans}
          {...parentTransActivate}
          className="flex items-center gap-12 font-medium text-lg justify-center"
        >
          {navlinks.map((link, id) => (
            <motion.div variants={fromTop} key={id}>
              <Link href={link.path} className={link.path === pathname ? "font-bold" : "font-normal"}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={parentTrans}
          {...parentTransActivate}
          className="flex items-center gap-6 font-semibold justify-end"
        >
          <motion.button
            variants={fromTop}
            className="text-[#17120a] px-4 py-3 rounded-lg bg-gradient-to-r from-primaryGoldLight to-deepGold"
          >
            Nominate a Champ
          </motion.button>
          <motion.button variants={fromTop} className="px-4 py-3 rounded-lg border-2 border-white text-white">
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
