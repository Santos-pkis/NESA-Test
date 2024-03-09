"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { fromLeft, fromTop, parentTrans, parentTransActivate } from "@/lib/utils/transitions";

const AccountNavbar = () => {
  const ref = useRef<HTMLDivElement>(null);

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
      <nav className="bg-[#17120a]/40 fixed top-0 left-0 w-full duration-[400ms] z-[1000]" ref={ref}>
        <div className="container py-3 flex justify-between items-center grid-cols-3 text-white">
          <motion.div {...fromLeft}>
            <Link href={"/"}>
              <Image src={"/svgs/logo.svg"} alt="nesa logo" width={100} height={100} id="nav_logo" />
            </Link>
          </motion.div>

          <motion.div
            variants={parentTrans}
            {...parentTransActivate}
            className="lg:flex hidden items-center gap-6 font-semibold justify-end"
          >
            <div>
              <Link href={"/categories"}>
                <motion.button variants={fromTop} className="px-3 py-2 border-[1px] text-sm rounded-xl">
                  Back to Category
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default AccountNavbar;
