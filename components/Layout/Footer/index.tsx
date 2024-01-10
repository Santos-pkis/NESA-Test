"use client";

import Image from "next/image";
import { bottomLinks, footerData } from "./data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Social } from "@/lib/types/global";

const socials: Social[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          d="M13.3333 7.16602C14.6594 7.16602 15.9312 7.6928 16.8688 8.63048C17.8065 9.56816 18.3333 10.8399 18.3333 12.166V17.9993H15V12.166C15 11.724 14.8244 11.3001 14.5118 10.9875C14.1993 10.6749 13.7753 10.4993 13.3333 10.4993C12.8913 10.4993 12.4674 10.6749 12.1548 10.9875C11.8422 11.3001 11.6666 11.724 11.6666 12.166V17.9993H8.33331V12.166C8.33331 10.8399 8.8601 9.56816 9.79778 8.63048C10.7355 7.6928 12.0072 7.16602 13.3333 7.16602Z"
          fill="white"
        />
        <path d="M5.00002 7.99951H1.66669V17.9995H5.00002V7.99951Z" fill="white" />
        <path
          d="M3.33335 5.49935C4.25383 5.49935 5.00002 4.75316 5.00002 3.83268C5.00002 2.91221 4.25383 2.16602 3.33335 2.16602C2.41288 2.16602 1.66669 2.91221 1.66669 3.83268C1.66669 4.75316 2.41288 5.49935 3.33335 5.49935Z"
          fill="white"
        />
      </svg>
    ),
    label: "LinkedIn",
    path: "",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          d="M15 2.16602H12.5C11.395 2.16602 10.3352 2.605 9.55376 3.3864C8.77236 4.16781 8.33337 5.22761 8.33337 6.33268V8.83268H5.83337V12.166H8.33337V18.8327H11.6667V12.166H14.1667L15 8.83268H11.6667V6.33268C11.6667 6.11167 11.7545 5.89971 11.9108 5.74343C12.0671 5.58715 12.279 5.49935 12.5 5.49935H15V2.16602Z"
          fill="white"
        />
      </svg>
    ),
    label: "Facebook",
    path: "",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M5 2.99951V12.9995" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15 7.99951C16.3807 7.99951 17.5 6.88022 17.5 5.49951C17.5 4.1188 16.3807 2.99951 15 2.99951C13.6193 2.99951 12.5 4.1188 12.5 5.49951C12.5 6.88022 13.6193 7.99951 15 7.99951Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17.9995C6.38071 17.9995 7.5 16.8802 7.5 15.4995C7.5 14.1188 6.38071 12.9995 5 12.9995C3.61929 12.9995 2.5 14.1188 2.5 15.4995C2.5 16.8802 3.61929 17.9995 5 17.9995Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7.99951C15 9.98864 14.2098 11.8963 12.8033 13.3028C11.3968 14.7093 9.48912 15.4995 7.5 15.4995"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "",
    path: "",
  },
];

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
          {footerData.map((data, id) => (
            <div key={id}>
              <h5 className="font-bold">{data.heading}</h5>
              <ul className="text-[#b6b6b6] space-y-2 mt-2">
                {data.children.map((child, id) => (
                  <li key={id}>
                    <Link href={child.path}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-[#ffd37a] text-black self-start rounded-md p-5 space-y-3">
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

            <p className="text-[#191307] text-sm">
              Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio
              aliquam bibendum. Metus et lectus id viverra fringilla magna morbi.{" "}
            </p>
          </div>
        </div>

        <div className="container border-t-2 border-white/10 pt-8">
          <div className="flex items-center md:justify-between gap-7 md:gap-0 md:flex-row flex-col">
            <Image src={"/svgs/logo.svg"} alt="nesa logo" width={150} height={150} />

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
