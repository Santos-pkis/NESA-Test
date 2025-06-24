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

        {/* Award Structure Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-[#191307] font-bold text-lg md:text-2xl mb-2 flex items-center gap-2">
            🏅 NESA–AFRICA 2025 AWARD STRUCTURE
          </h3>
          <ul className="list-none space-y-1 text-[#191307] font-poppins md:text-base text-sm pl-1">
            <li className="flex items-center gap-2">
              <span>🔷</span>
              <span>8 Competitive Blue Garnet Award Categories</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🥇</span>
              <span>101 Subcategory Gold Certificate Winners</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🏵</span>
              <span>53 Platinum Recognition Certificates (Non-Competitive)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>💌</span>
              <span>6,000+ Letters of Recognition</span>
            </li>
          </ul>
          <p className="mt-3 text-[#191307] text-sm md:text-base">
            All determined through nomination, expert judging, AGC-powered voting, and stakeholder validation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-6 gap:10">
          
          {/* africa lifet time Category */}
          <div className=" md:col-span-2 md:px-20  lg:px-14 md:container md:mx-auto md:pb:4">
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

            <h3 className="text-white font-medium md:text-xl text-[16px] font-normal mb-4">
          💎 AFRICA LIFETIME EDUCATION ICON AWARD (Blue Garnet Tier)
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
             
          <div className="text-[14px] md:text-base my-6 space-y-2  font-poppins">
              <p>
          <h2 className="font-bold ">💎 AFRICA LIFETIME EDUCATION ICON AWARD (Blue Garnet Tier)</h2>
          <br/> <p className="font-medium">The highest honor of the NESA Awards — celebrating education legends whose decade-long work (2014–2024) has reshaped the destiny of millions across Africa.</p>
          </p>
              <ul>
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

        {/* Powered by GFA Wallet – AfriGold Coin (AGC) */}
        <div className="bg-[#fff7e3] rounded-xl shadow p-6 mt-10 border border-[#f5b400]/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💳</span>
            <span className="font-bold text-[#191307] text-lg md:text-xl">
              POWERED BY GFA WALLET – AFRIGOLD COIN (AGC)
            </span>
          </div>
          <p className="text-[#191307] mb-4 text-sm md:text-base">
            Nominations, voting, ticketing, and certificates are transacted securely using AfriGold Coin (AGC):
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#191307] text-sm md:text-base font-poppins">
            <li>Nominate or Vote using AGC</li>
            <li>Buy Gala Tickets or Access Webinars</li>
            <li>Download Gold &amp; Platinum Certificates</li>
            <li>Support EduAid Africa or Chapter Projects</li>
            <li>Make Donations — Securely and Transparently</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AwardCategories;
