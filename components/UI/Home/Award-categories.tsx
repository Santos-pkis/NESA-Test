"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AwardCategories = () => {
  return (
    <section className="bg-[#fdf3dc] px-4 py-10 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#191307] mb-3">
          Nominate now
        </h2>
        <p className="text-[#191307] text-sm md:text-base mb-1">
          At the New Education Standard Award Africa (NESA–Africa) 2025, we celebrate the real changemakers shaping the future of education across Africa.
        </p>
        <p className="text-[#191307] text-sm md:text-base mb-8">
          You can Nominate a Hero Today in two distinct ways
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Competitive Category */}
          <div>
          <Link
            href={"/competitive"}
          >
          <div className="bg-[#191307] text-white rounded-2xl p-6 relative">
            {/* Dots */}
            <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
              <div className="w-[6px] h-6 bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
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
 
          <ul className="text-sm mt-6 space-y-2">
              <li>✅ Open to the public! Nominate individuals, organizations, or projects</li>
              <li>✅ Public voting through the GetFinance Africa Wallet using Afri–Gold Coin</li>
              <li>✅ Final selection by an independent panel of judges</li>
              <li>✅ Winners honored live at the NESA–Africa 2025 Awards Gala</li>
            </ul>

            <Link
              href="/competitive"
              className="block mt-4 text-[#F5B400] text-sm font-semibold"
            >
              Nominate Now
            </Link>
            </div>
          {/* Non-Competitive Category */}
          <div>
          <Link
              href="/non-competitive"
              className="block  text-[#F5B400] text-sm font-semibold"
            >
          <div className="bg-[#191307] text-white rounded-2xl p-6 relative">

            {/* Dots */}
            <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
              <div className="w-[6px] h-6 bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
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
          
          <ul className="text-sm mt-6 space-y-2">
              <li>✅ Selected by expert panels based on merit! Nominate leaders, associations, or institutions</li>
              <li>✅ No public voting — reviewed by SCEF/NESA Panels and Boards</li>
              <li>✅ Recognitions are based on longstanding impact and strategic contributions to education in Africa</li>
            </ul>

            <Link
              href="/non-competitive"
              className="block mt-4 text-[#F5B400] text-sm font-semibold"
            >
              Nominate Now
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AwardCategories;
