"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fromLeft, fromRight, fromTop, opacityTrans, parentTrans, parentTransActivate } from "@/lib/utils/transitions";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <>
      <nav className="bg-[#17120a]">
        <div
          className="container py-4 lg:grid flex justify-between items-center grid-cols-3 overflow-y-hidden text-white"
          ref={ref}
        >
          <motion.div {...fromLeft}>
            <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} id="nav_logo" />
          </motion.div>

          <div className="flex items-center justify-center">
            <motion.ul
              variants={parentTrans}
              {...parentTransActivate}
              className="hidden items-center gap-12 font-medium text-lg lg:flex"
            >
              {navlinks.map((link, id) => (
                <motion.li variants={fromTop} key={id}>
                  <Link href={link.path} className={link.path === pathname ? "font-bold" : "font-normal"}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={parentTrans}
            {...parentTransActivate}
            className="lg:flex hidden items-center gap-6 font-semibold justify-end"
          >
            <motion.button
              variants={fromTop}
              className="text-[#17120a] xl:px-4 xl:py-3 px-3 py-2 xl:text-base text-sm rounded-lg bg-gradient-to-r from-primaryGoldLight to-deepGold"
            >
              Nominate a Champ
            </motion.button>
            <motion.button
              variants={fromTop}
              className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base text-sm rounded-lg border-2 border-white text-white"
            >
              Get Involved
            </motion.button>
          </motion.div>

          <motion.div {...fromRight} className="block lg:hidden cursor-pointer">
            <Menu className="text-white" onClick={() => setSidebarOpen(!sidebarOpen)} />
          </motion.div>
        </div>
      </nav>

      <aside
        className={`${
          sidebarOpen ? "w-full" : "w-0"
        } fixed top-0 right-0 min-h-screen bg-black/90 text-white select-none flex duration-200 items-center justify-center z-[20] overflow-hidden`}
      >
        <motion.div {...fromRight} className="absolute right-8 top-8 cursor-pointer">
          <X size={28} onClick={() => setSidebarOpen(!sidebarOpen)} />
        </motion.div>

        <motion.ul {...opacityTrans} className="flex flex-col gap-6 text-center text-lg">
          {navlinks.map((link, id) => (
            <motion.li variants={fromTop} key={id}>
              <Link href={link.path} className={link.path === pathname ? "font-bold" : "font-normal"}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </aside>
    </>
  );
};

export default Navbar;
