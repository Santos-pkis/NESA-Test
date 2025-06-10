"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AwardCategories = () => {
  return (
    <section className="bg-[#fdf3dc] px-6 lg:px-2 py-10 lg:py-16">
      <div className="max-w-6xl md:min-w-screen mx-auto">
        <h2 className="_under_border lg:text-[32px] md:text-[28px] text-[20px] font-semibold text-[#191307] mb-3">
          Nominate now
        </h2>
        <p className="text-[#191307] font-poppins md:text-[18px] text-[16px] md:text-base mb-8">
          At the New Education Standard Award Africa (NESA–Africa) 2025, we celebrate the real changemakers shaping the future of education across Africa. You can Nominate a Hero Today in two distinct ways.
        </p>

        <div className="grid md:grid-cols-2 md:gap-x-6 gap:10">
          
                                        {/* africa lifet time Category */}
          <div className=" md:col-span-2 md:px-20  lg:px-14 container md:mx-auto md:pb:4">
          <Link
            href={"/nomination/sub-categories/africa-lifetime-education-icon"}
          >
          <div className="bg-[#191307] text-white  rounded-2xl p-10 relative md:pb-10 lg:pb-28">
            {/* Dots */}
            <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
              <div className="w-[6px] h-6 bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
            </div>

            <h3 className="text-white  md:text-xl text-[16px] font-normal mb-4">
Africa Lifetime Education Icon Award
            </h3>

            <div className="w-full flex justify-center">
              <Image
                src="/images/nesa-mg.png"
                alt="Competitive"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
    </Link>
 
          <ul className="text-[14px] md:text-base my-6 space-y-2  font-poppins">
              <li>✅ Open to the public! Nominate individuals, organizations, or projects</li>
              <li>✅ Public voting through the GetFinance Africa Wallet via Afri–Gold Coin</li>
              <li>✅ Final selection by an independent panel of judges</li>
              <li>✅ Winners honored live at the NESA–Africa 2025 Awards Gala</li>
              <Link
              href={"/nomination/sub-categories/africa-lifetime-education-icon"}
              className="block mt-4 text-[#F5B400] text-sm font-semibold"
            >
              Nominate Now
            </Link>
            </ul>
            </div>


          {/* Competitive Category */}
          <div className=" md:pb:4 ">
          <Link
            href={"/competitive"}
          >
          <div className="bg-[#191307] text-white  rounded-2xl p-10 relative md:pb-8 lg:pb-12">
            {/* Dots */}
            <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
              <div className="w-[6px] h-6 bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
            </div>

            <h3 className="text-white md:text-xl text-[16px] font-normal mb-4">
              Competitive Categories
            </h3>

            <div className="w-full flex justify-center">
              <Image
                src="/images/nesa-mg.png"
                alt="Competitive"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
    </Link>
 
          <ul className="text-[14px] md:text-base my-6 space-y-2  font-poppins">
              <li>✅ Open to the public! Nominate individuals, organizations, or projects</li>
              <li>✅ Public voting through the GetFinance Africa Wallet via Afri–Gold Coin</li>
              <li>✅ Final selection by an independent panel of judges</li>
              <li>✅ Winners honored live at the NESA–Africa 2025 Awards Gala</li>
              <Link
              href="/competitive"
              className="block mt-4 text-[#F5B400] text-sm font-semibold"
            >
              Nominate Now
            </Link>
            </ul>


            </div>
          {/* Non-Competitive Category */}
          <div className=" md:pb:4 ">
          <Link
              href="/non-competitive"
              className="block  text-[#F5B400] text-sm font-medium"
            >
          <div className="bg-[#191307] text-white rounded-2xl p-10 relative md:pb-8 lg:pb-12">

            {/* Dots */}
            <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
              <div className="w-[6px] h-6 bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
            </div>

            <h3 className="text-white md:text-xl text-[16px] font-medium mb-4">
              Non-Competitive Categories
            </h3>

            <div className="w-full flex justify-center">
              <Image
                src="/images/nesa-mg.png"
                alt="Non-Competitive"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            </div>
          </Link>
          
          <ul className="text-[14px] font-poppins md:text-base mt-6 space-y-2">
              <li>✅ Selected by expert panels based on merit! Nominate leaders, associations, or institutions</li>
              <li>✅ No public voting — reviewed by SCEF/NESA Panels and Boards</li>
              <li>✅ Recognitions are based on longstanding impact and strategic contributions to education in Africa</li>
              <Link
              href="/non-competitive"
              className="block mt-4 text-[#F5B400] text-sm font-semibold"
            >
              Nominate Now
            </Link>
            </ul>


            </div>
        </div>
      </div>
    </section>
  );
};

export default AwardCategories;
