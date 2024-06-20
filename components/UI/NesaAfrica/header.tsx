"use client";

import Image from "next/image";

const NesaAfricaHeader = () => {
  return (
    <header className={`bg-[#17120a] min-h-[40rem] text-white z-[100] flex items-center pt-28 md:pt-10`}>
      <div className="container grid md:grid-cols-2 gap-4 py-20 items-center">
        <div className="space-y-8 text-center md:text-start">
          <h1 className="text-4xl font-bold text-deepGold leading-[1.6]">
            New Education Standard Award : The Award of the Decade
          </h1>
          <p className="md:leading-[2.1] leading-loose tracking-wide md:text-lg text-justify">
            NESA stands as the pinnacle award of the decade, a fervent celebration of excellence within the Nigerian
            education system. We uplift contributors, ignite innovation, and envision an ecosystem where excellence
            becomes the driving force for transformative change
          </p>
        </div>

        <div className="grid place-content-center opacity-40 md:opacity-100 duration-300">
          <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />
        </div>
      </div>
    </header>
  );
};

export default NesaAfricaHeader;
