"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fromLeft, fromRight, fromTop, opacityTrans, parentTrans, parentTransActivate } from "@/lib/utils/transitions";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navlinks } from "@/lib/store/global";

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
      <nav className="bg-[#17120a] fixed top-0 left-0 w-full z-[1000]">
        <div className="container py-4 lg:grid flex justify-between items-center grid-cols-3 text-white" ref={ref}>
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
                <motion.li variants={fromTop} key={id} className="">
                  {link.children ? (
                    <div
                      className={`group cursor-pointer ${
                        link.path === pathname ? "font-semibold" : "font-normal duration-200"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.label}</span>
                        <ChevronDown size={18} className="group-hover:rotate-90 duration-300" />
                      </div>

                      <div className="absolute top-full -right-1/2 duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-1 opacity-0 overflow-hidden border-4 text-sm min-w-[15rem] bg-white/90 rounded-lg">
                        {link.children.map((child, id) => (
                          <div
                            key={id}
                            className="text-center hover:bg-deepGold duration-200 px-5 text-darkGold hover:text-white"
                          >
                            <Link href={link.path} className={"w-full"}>
                              <div className="py-2">{child.label}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={link.path === pathname ? "font-semibold" : "font-normal duration-200"}
                    >
                      {link.label}
                    </Link>
                  )}
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
              className="text-[#17120a] xl:px-4 xl:py-3 px-3 py-2 xl:text-base text-sm rounded-lg"
              style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
            >
              Vote Now
            </motion.button>
            <motion.button
              variants={fromTop}
              className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base text-sm rounded-lg text-white"
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
