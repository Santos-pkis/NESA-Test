"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  fromLeft,
  fromRight,
  fromTop,
  opacityTrans,
  parentTransActivate,
} from "@/lib/utils/transitions";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navlinks } from "@/lib/data/global";
import styles from "./style.module.scss";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(pathname);
  const controlMenu = (action: boolean) => setSidebarOpen(action);

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
      <nav
        className="bg-[#17120a] fixed h-[5rem] px-[2.5rem] flex items-center justify-center top-0 left-0 w-full duration-[400ms] z-[1000]"
        ref={ref}
      >
        <div className="container lg:grid flex justify-between items-center grid-cols-3 text-white">
          <motion.div>
            <Link href={"/"}>
              <Image
                src={"/svgs/logo.svg"}
                alt="nesa logo"
                width={150}
                height={150}
                id="nav_logo"
              />
            </Link>
          </motion.div>

          <div className="flex text-[1.125rem] leading-[1.75rem] font-[400] items-center justify-center">
            <motion.ul
              {...parentTransActivate}
              className="hidden w-fit items-center gap-12 font-medium text-lg relative lg:flex"
            >
              {navlinks.map((link, id) => (
                <motion.li key={id} className="">
                  {link.children && link.label === "About" ? (
                    <div
                      className={`cursor-pointer relative whitespace-nowrap font-[400] text-[1rem] leadig-[1.6rem] ${
                        link.path === pathname
                          ? "font-semibold bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text"
                          : "font-normal duration-200"
                      } ${styles["nav-link"]}`}
                    >
                      <div className="flex items-center whitespace-nowrap gap-2">
                        <span>{link.label}</span>
                        <ChevronDown
                          size={18}
                          className={`duration-300 ${styles["chevron"]}`}
                        />
                      </div>

                      <div
                        className={`absolute ${styles["nav-link-child"]} top-full  duration-300 overflow-hidden shadow-xl text-sm min-w-[15rem] bg-darkGold text-white rounded-md`}
                      >
                        {link.children.map((child, id) => (
                          <div
                            key={id}
                            className="hover:bg-deepGold duration-200 px-2"
                          >
                            <Link
                              href={child.path}
                              target={child.external ? "_blank" : "_self"}
                              className={"w-full"}
                            >
                              <div className="py-3">{child.label}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={
                        link.path === pathname
                          ? "font-semibold bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text hover:bg-deepGold duration-200 px-2"
                          : "font-normal duration-200"
                      }
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            {...parentTransActivate}
            className="lg:flex hidden items-center gap-4 font-semibold justify-end"
          >
            <motion.button
              className="text-[#17120a] w-[7rem] flex justify-center items-center xl:py-3 px-6 py-1 font-[500] text-sm rounded-[1rem]"
              style={{
                background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
              }}
            >
              Login
            </motion.button>{" "}
            <motion.button
              className="text-[#17120a] w-[7rem] flex justify-center items-center xl:py-3 px-6 py-1 font-[500] text-sm rounded-[1rem]"
              style={{
                background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
              }}
            >
              Sign Up
            </motion.button>
            {/* {!pathname.startsWith("/categories/") ? (
              <motion.button
                className="text-[#17120a] xl:py-3 px-6 py-1 font-[500] text-sm rounded-[1rem]"
                style={{
                  background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
                }}
              >
                Register now
              </motion.button>
            ) : (
              <div>
                <Link href={"/categories"}>
                  <motion.button className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base border text-sm rounded-full text-white">
                    Go Back to Category
                  </motion.button>
                </Link>
              </div>
            )} */}
            {/* <motion.button
              variants={fromTop}
              className="xl:px-4 xl:py-3 px-3 py-2 xl:text-base border text-sm rounded-lg text-white"
            >
              Get Involved
            </motion.button> */}
          </motion.div>

          <motion.div className="block lg:hidden cursor-pointer">
            <Menu
              className="text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </motion.div>
        </div>
      </nav>

      <aside
        className={`${
          sidebarOpen ? "h-full" : "h-0"
        } fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm text-white select-none flex duration-300 ease-out items-center justify-center z-[2000] overflow-hidden`}
      >
        <motion.div className="absolute right-8 top-8 cursor-pointer">
          <X size={28} onClick={() => setSidebarOpen(!sidebarOpen)} />
        </motion.div>

        <MobileSideMenu controlMenu={controlMenu} />
      </aside>
    </>
  );
};

const MobileSideMenu: React.FC<{ controlMenu: (action: boolean) => void }> = ({
  controlMenu,
}) => {
  const pathname = usePathname();

  const [activeDrop, setActiveDrop] = useState<number | null>(null);

  const toggleDrop = (id: number) =>
    setActiveDrop((prev) => (prev === id ? null : id));

  return (
    <motion.ul
      {...opacityTrans}
      className="flex divide-y-2 divide-white/30 flex-col text-center justify-center text-lg"
    >
      {navlinks.map((link, id) => (
        <motion.li
          variants={fromTop}
          key={id}
          className="py-3"
          onClick={() => toggleDrop(id)}
        >
          {link.children ? (
            <div
              className={`cursor-pointer group ${
                link.path === pathname
                  ? "font-semibold"
                  : "font-normal duration-200"
              } ${styles["nav-link"]}`}
            >
              <div className="flex items-center gap-1 justify-center group-hover:font-bold">
                <span>{link.label}</span>
                <ChevronDown
                  size={18}
                  className={`duration-300 ${
                    activeDrop === id && "rotate-180"
                  }`}
                />
              </div>

              <div
                className={`duration-300 overflow-hidden text-sm ${
                  activeDrop === id ? "h-[12rem]" : "h-0"
                }`}
              >
                {link.children.map((child, id) => (
                  <div
                    key={id}
                    className="hover:text-deepGold duration-200 px-5"
                    onClick={() => controlMenu(false)}
                  >
                    <Link
                      href={child.path}
                      target={child.external ? "_blank" : "_self"}
                      className={"w-full"}
                    >
                      <div className="py-3">{child.label}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={link.path}
              className={
                link.path === pathname
                  ? "font-semibold"
                  : "font-normal duration-200"
              }
              onClick={() => controlMenu(false)}
            >
              {link.label}
            </Link>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;
