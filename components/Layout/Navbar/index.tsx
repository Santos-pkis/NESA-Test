"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
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
  const controlMenu = (action: boolean) => setSidebarOpen(action);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!ref.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        ref.current.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        ref.current.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="bg-[#17120a] fixed top-0 left-0 w-full h-[5rem] px-[2.5rem] flex items-center justify-between transition-transform duration-300 ease-in-out z-[1000]"
        ref={ref}
      >
        <div className="container mx-auto flex justify-between items-center">
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

          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks pathname={pathname} />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <AuthButtons />
          </div>

          <motion.div className="lg:hidden cursor-pointer">
            <Menu
              className="text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </motion.div>
        </div>
      </nav>

      <MobileSidebar sidebarOpen={sidebarOpen} controlMenu={controlMenu} />
    </>
  );
};

const NavLinks = ({ pathname }: { pathname: string }) => (
  <motion.ul {...parentTransActivate} className="flex items-center space-x-8">
    {navlinks.map((link, id) => (
      <NavLink key={id} link={link} pathname={pathname} />
    ))}
  </motion.ul>
);

const NavLink = ({ link, pathname }: { link: any; pathname: string }) => (
  <motion.li>
    {link.children && (link.label === "About" || link.label === "Awards") ? (
      <DropdownLink link={link} pathname={pathname} />
    ) : (
      <Link
        href={link.path}
        className={
          link.path === pathname
            ? "font-semibold bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text"
            : "font-normal text-white hover:text-deepGold duration-200"
        }
      >
        {link.label}
      </Link>
    )}
  </motion.li>
);

const DropdownLink = ({ link, pathname }: { link: any; pathname: string }) => (
  <div className={`cursor-pointer relative ${styles["nav-link"]}`}>
    <div className="flex items-center gap-2 text-white">
      <span>{link.label}</span>
      <ChevronDown size={18} className={`duration-300 ${styles["chevron"]}`} />
    </div>
    <div
      className={`absolute ${styles["nav-link-child"]} top-full duration-300 overflow-hidden shadow-xl text-sm min-w-[15rem] bg-darkGold text-white rounded-md`}
    >
      {link.children.map((child: any, id: number) => (
        <div key={id} className="hover:bg-deepGold duration-200 px-2">
          <Link
            href={child.path}
            target={child.external ? "_blank" : "_self"}
            className="w-full block py-3"
          >
            {child.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const AuthButtons = ({ isMobile = false }) => (
  <div className={`flex ${isMobile ? 'flex-col w-full' : 'flex-row'} gap-4`}>
    <Link href="/account/login" className={isMobile ? "w-full" : ""}>
      <motion.button
        className={`text-[#17120a] ${isMobile ? 'w-full' : 'w-[7rem]'} flex justify-center items-center py-2 px-4 font-[500] text-sm rounded-[1rem]`}
        style={{
          background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
        }}
      >
        Login
      </motion.button>
    </Link>
    <Link href="/account/signup" className={isMobile ? "w-full" : ""}>
      <motion.button
        className={`text-[#17120a] ${isMobile ? 'w-full' : 'w-[7rem]'} flex justify-center items-center py-2 px-4 font-[500] text-sm rounded-[1rem]`}
        style={{
          background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
        }}
      >
        Sign Up
      </motion.button>
    </Link>
  </div>
);

const MobileSidebar = ({ sidebarOpen, controlMenu }: { sidebarOpen: boolean; controlMenu: (action: boolean) => void }) => (
  <aside
    className={`${
      sidebarOpen ? "translate-x-0" : "translate-x-full"
    } fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-sm text-white select-none flex duration-300 ease-out items-center justify-center z-[2000] overflow-hidden lg:hidden`}
  >
    <motion.div className="absolute right-8 top-8 cursor-pointer">
      <X size={28} onClick={() => controlMenu(false)} />
    </motion.div>
    <MobileSideMenu controlMenu={controlMenu} />
  </aside>
);

const MobileSideMenu = ({ controlMenu }: { controlMenu: (action: boolean) => void }) => {
  const pathname = usePathname();
  const [activeDrop, setActiveDrop] = useState<number | null>(null);
  const toggleDrop = (id: number) =>
    setActiveDrop((prev) => (prev === id ? null : id));

  return (
    <motion.div
      {...opacityTrans}
      className="flex flex-col justify-center items-center w-full px-8"
    >
      <ul className="flex flex-col text-center justify-center text-lg space-y-4 w-full">
        {navlinks.map((link, id) => (
          <motion.li
            variants={fromTop}
            key={id}
            className="py-3"
            onClick={() => toggleDrop(id)}
          >
            {link.children ? (
              <MobileDropdownLink
                link={link}
                pathname={pathname}
                isActive={activeDrop === id}
                controlMenu={controlMenu}
              />
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
      </ul>
      <div className="mt-8 w-full">
        <AuthButtons isMobile={true} />
      </div>
    </motion.div>
  );
};

const MobileDropdownLink = ({ link, pathname, isActive, controlMenu }: { link: any; pathname: string; isActive: boolean; controlMenu: (action: boolean) => void }) => (
  <div
    className={`cursor-pointer group ${
      link.path === pathname ? "font-semibold" : "font-normal duration-200"
    } ${styles["nav-link"]}`}
  >
    <div className="flex items-center gap-1 justify-center group-hover:font-bold">
      <span>{link.label}</span>
      <ChevronDown
        size={18}
        className={`duration-300 ${isActive && "rotate-180"}`}
      />
    </div>
    <div
      className={`duration-300 overflow-hidden text-sm ${
        isActive ? "h-auto mt-4" : "h-0"
      }`}
    >
      {link.children.map((child: any, id: number) => (
        <div
          key={id}
          className="hover:text-deepGold duration-200 px-5"
          onClick={() => controlMenu(false)}
        >
          <Link
            href={child.path}
            target={child.external ? "_blank" : "_self"}
            className="w-full block py-3"
          >
            {child.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Navbar;