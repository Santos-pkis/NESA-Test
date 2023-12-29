"use client";

import Image from "next/image";
import Link from "next/link";

const navlinks = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Awards",
    path: "",
  },
  {
    label: "Media",
    path: "",
  },
  {
    label: "N.E.S.A",
    path: "",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#17120a]">
      <div className="container py-4 flex items-center justify-between text-white">
        <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} />

        <div className="flex items-center gap-12 font-medium text-lg">
          {navlinks.map((link, id) => (
            <div key={id}>
              <Link href={link.path}>{link.label}</Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <button className="text-[#17120a] px-4 py-3 rounded-lg bg-gradient-to-r from-primaryGoldLight to-deepGold">
            Nominate a Champ
          </button>
          <button className="px-4 py-3 rounded-lg border-2 border-white text-white">Get Involved</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
