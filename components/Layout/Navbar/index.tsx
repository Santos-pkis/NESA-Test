"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fromLeft, fromRight, fromTop, opacityTrans, parentTrans, parentTransActivate } from "@/lib/utils/transitions";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navlinks } from "@/lib/data/global";
import styles from "./style.module.scss";

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

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const hideNavOnScroll = () => {
      if (!ref.current) return;

      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        ref.current.style.top = "0";
        ref.current.style.opacity = "100%";
      } else {
        ref.current.style.top = "-85px";
        ref.current.style.opacity = "0%";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", hideNavOnScroll);

    return () => window.removeEventListener("scroll", hideNavOnScroll);
  }, []);

  return (
    <>
      <nav className="bg-[#17120a] fixed top-0 left-0 w-full duration-[400ms] z-[1000]" ref={ref}>
        <div className="container py-4 lg:grid flex justify-between items-center grid-cols-3 text-white">
          <motion.div {...fromLeft}>
            <Link href={"/"}>
              <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} id="nav_logo" />
            </Link>
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
                      className={`cursor-pointer ${
                        link.path === pathname ? "font-semibold" : "font-normal duration-200"
                      } ${styles["nav-link"]}`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.label}</span>
                        <ChevronDown size={18} className={`duration-300 ${styles["chevron"]}`} />
                      </div>

                      <div
                        className={`absolute ${styles["nav-link-child"]} top-full -right-1/2 duration-300 overflow-hidden shadow-xl text-sm min-w-[15rem] bg-white rounded-md`}
                      >
                        {link.children.map((child, id) => (
                          <div
                            key={id}
                            className="text-center hover:bg-deepGold duration-200 px-5 text-darkGold hover:text-white"
                          >
                            <Link href={child.path} className={"w-full"}>
                              <div className="py-3">{child.label}</div>
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
            {!pathname.startsWith("/categories/") ? (
              <motion.button
                variants={fromTop}
                className="text-[#17120a] xl:px-4 xl:py-3 px-3 py-2 xl:text-base text-sm rounded-lg"
                style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
              >
                Nominate Now
              </motion.button>
            ) : (
              <div>
                <Link href={"/categories"}>
                  <motion.button
                    variants={fromTop}
                    className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base border text-sm rounded-lg text-white"
                  >
                    Go Back to Category
                  </motion.button>
                </Link>
              </div>
            )}
            {/* <motion.button
              variants={fromTop}
              className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base border text-sm rounded-lg text-white"
            >
              Get Involved
            </motion.button> */}
          </motion.div>

          <motion.div {...fromRight} className="block lg:hidden cursor-pointer">
            <Menu className="text-white" onClick={() => setSidebarOpen(!sidebarOpen)} />
          </motion.div>
        </div>
      </nav>

      <aside
        className={`${
          sidebarOpen ? "w-full" : "w-0"
        } fixed top-0 right-0 min-h-screen bg-black/90 text-white select-none flex duration-200 items-center justify-center z-[2000] overflow-hidden`}
      >
        <motion.div {...fromRight} className="absolute right-8 top-8 cursor-pointer">
          <X size={28} onClick={() => setSidebarOpen(!sidebarOpen)} />
        </motion.div>

        <motion.ul {...opacityTrans} className="flex flex-col gap-6 text-center text-lg">
          {navlinks.map((link, id) => (
            <motion.li variants={fromTop} key={id} onClick={() => setSidebarOpen(false)}>
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
