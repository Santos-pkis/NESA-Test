"use client";

import Image from "next/image";
import { bottomLinks, contactInfos, footerData, socials } from "./data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Social } from "@/lib/types/global";

const Footer = () => {
  return (
    <footer className="py-20 relative text-white overflow-hidden">
      <Image
        src={"/images/bg/back_.jpeg"}
        alt="dark background"
        className="w-full h-full object-cover -z-[2] absolute top-0 left-0"
        width={1024}
        height={600}
      />

      <div className="bg-[#15110999] absolute top-0 left-0 w-full -z-[1] h-full"></div>
      <div className="space-y-8">
        <div className="container grid md:grid-cols-4 sm:grid-cols-2 md:gap-2 gap-6">
          <div className="space-y-5">
            <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} />

            {contactInfos.map((info, id) => (
              <div key={id} className="flex items-center gap-3">
                {info.icon}
                <p className="text-white/80 text-sm">{info.value}</p>
              </div>
            ))}
          </div>

          {footerData.map((data, id) => (
            <div key={id} className="space-y-6">
              <h5 className="font-medium">{data.heading}</h5>
              <ul className="text-white/80 space-y-5 mt-2">
                {data.children.map((child, id) => (
                  <li key={id}>
                    <Link href={child.path}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-[#ffd37a] text-black self-start rounded-md py-5 px-8 space-y-3">
            <h5 className="font-bold">Subscribe to our Newsletter</h5>

            <div className="flex items-center">
              <input
                type="text"
                className="w-full bg-white rounded-l-md p-2 text-sm outline-none"
                placeholder="Input your Email address"
              />
              <button className="h-full py-2 px-3 bg-[#1E1E1E] border-[#1E1E1E] border-2 flex-shrink-0 text-white rounded-r-md grid place-content-center">
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="text-[#191307] text-sm font-light leading-relaxed tracking-wide">
  Stay in the loop with the latest updates! Subscribe to our newsletter for exclusive insights, exciting announcements, and all things NESA 2024. Don't miss a beat{" "}
</p>

          </div>
        </div>

        <div className="container border-t-2 border-white/10 pt-8">
          <div className="flex items-center md:justify-between gap-7 md:gap-0 md:flex-row flex-col">
            <p>Nesa©2024</p>

            <div className="flex items-center gap-6">
              {bottomLinks.map((data, id) => (
                <div key={id} className="text-sm font-medium">
                  <Link href={data.path}>{data.label}</Link>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              {socials.map((social, id) => (
                <div key={id} className="text-sm font-medium">
                  <Link href={social.path} title={social.label}>
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 grid place-content-center">
                      {social.icon}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
