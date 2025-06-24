"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth"; // Import the useAuth hook
import { ChevronDown, Menu, X, User } from "lucide-react";
import { navlinks } from "@/lib/data/global";
import styles from "./style.module.scss";
import Button from "@/components/Common/Button";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth(); // Get the user from the useAuth hook

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
        <div className="container mx-auto flex justify-between items-center md:gap-x-6 space-x-10">
          <motion.div>
            <Link href={"/"}>
              <Image
                src={"/svgs/logo.svg"}
                alt="nesa logo"
                width={150}
                height={150}
                id="nav_logo"
                className="min-w-250"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <AuthButtons user={user} />
          </div>

          <motion.div className="lg:hidden cursor-pointer">
            <Menu
              className="text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </motion.div>
        </div>
      </nav>

      <MobileSidebar sidebarOpen={sidebarOpen} controlMenu={controlMenu} user={user} />
    </>
  );
};

const NavLinks = () => (
  <motion.ul className="flex items-center space-x-8">
    {navlinks.map((link, id) => (
      <NavLink key={id} link={link} />
    ))}
  </motion.ul>
);

const NavLink = ({ link }: { link: any }) => (
  <motion.li>
    {link.children && (link.label === "About" || link.label === "Awards") ? (
      <DropdownLink link={link} />
    ) : (
      <Link
        href={link.path}
        className="font-normal text-white hover:text-deepGold duration-200"
      >
        {link.label}
      </Link>
    )}
  </motion.li>
);

const DropdownLink = ({ link }: { link: any }) => (
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

const AuthButtons = ({ user }: { user: any }) => {
  if (user) {
    // If the user is logged in, show the profile icon
    return (
      <Link href="/member">
        <motion.div className="flex items-center space-x-2 cursor-pointer">
          <User className="text-white w-6 h-6" />
          <span className="text-white font-medium">Account</span>
        </motion.div>
      </Link>
    );
  }

  // If the user is not logged in, show login and register buttons
  return (
    <div className="flex space-x-4">
      <Link href="/ambassador">
              <Button text="Join as an Ambassador" className="rounded-lg px-3 md:px-4 py-2     flex items-center justify-center
    px-1 md:px-8 py-2
    text-xs sm:text-sm md:text-sm
    text-center hover:bg-[#E48900] hover:text-black
    rounded-lg
    w-full sm:w-auto
    truncate
  " />
          
      </Link>
      <Link href="/account/signup/membersignup">
        <motion.button
          className="text-[#17120a] w-[7.5rem] flex justify-center items-center py-2 px-4 font-medium text-[15px] rounded-lg"
          style={{
            background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)`,
          }}
        >
          Sign Up / Login
        </motion.button>
      </Link>
    </div>
  );
};

const MobileSidebar = ({
  sidebarOpen,
  controlMenu,
  user,
}: {
  sidebarOpen: boolean;
  controlMenu: (action: boolean) => void;
  user: any;
}) => (
  <aside
    className={`${
      sidebarOpen ? "translate-x-0" : "translate-x-full"
    } fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-sm text-white select-none flex duration-300 ease-out items-center justify-center z-[2000] overflow-hidden lg:hidden`}
  >
    <motion.div className="absolute right-8 top-8 cursor-pointer">
      <X size={28} onClick={() => controlMenu(false)} />
    </motion.div>
    <MobileSideMenu controlMenu={controlMenu} user={user} />
  </aside>
);

const MobileSideMenu = ({
  controlMenu,
  user,
}: {
  controlMenu: (action: boolean) => void;
  user: any;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State to track open dropdown

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label)); // Toggle dropdown
  };

  return (
    <motion.div className="flex flex-col justify-center items-center w-full px-8">
      <ul className="flex flex-col text-center justify-center text-lg space-y-4 w-full">
        {navlinks.map((link, id) => (
          <motion.li
            key={id}
            className="py-3 text-center" // Ensure all items are centered
          >
            {link.children ? (
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer font-normal duration-200 text-white"
                  onClick={() => toggleDropdown(link.label)}
                >
                  <span className="w-full text-center">{link.label}</span>
                  <ChevronDown
                    size={18}
                    className={`duration-300 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === link.label && (
                  <ul className="mt-2 space-y-2 text-sm text-gray-300">
                    {link.children.map((child: any, childId: number) => (
                      <li key={childId}>
                        <Link
                          href={child.path}
                          target={child.external ? "_blank" : "_self"}
                          className="block py-2 px-4 hover:bg-gray-700 rounded-lg text-center"
                          onClick={() => controlMenu(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={link.path}
                className="font-normal duration-200 text-white text-center block"
                onClick={() => controlMenu(false)}
              >
                {link.label}
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
      <div className="mt-8 w-full flex justify-center">
        <AuthButtons user={user} />
      </div>
    </motion.div>
  );
};

export default Navbar;