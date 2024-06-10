"use client";

import Image from "next/image";

const Judges = () => {
  return (
    <div>
      <div className="min-h-[40rem] relative flex items-center">
        <Image
          src={"/images/bg/timeline.png"}
          alt="dark background"
          className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
          width={1024}
          height={600}
        />

        <div className="container text-white space-y-6">
          <div className="space-y-2">
            <h3 className="_under_border font-bold text-2xl">Meet The Judges</h3>
            <p className="text-2xl">Get to know the NESA Judges, their background, and acheivements</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {Array.from({ length: 4 }).map((_, id) => (
                <div
                  key={id}
                  className={`w-3 h-3 rounded-full bg-white cursor-pointer ${id === 0 ? "bg-primaryGold" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
