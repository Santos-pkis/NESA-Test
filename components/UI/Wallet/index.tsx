"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="space-y-40 pb-20 pt-40 container">
      <div className="space-y-7">
        <h1 className="text-darkBrown text-3xl font-medium">Welcome Mujeeb,</h1>

        <div className="max-w-3xl bg-darkBrown relative py-16 rounded-[2rem] mx-auto">
          <div className="space-y-4 text-center">
            <div className="space-y-3">
              <p className="text-darkBrown bg-white rounded-xl px-4 w-fit mx-auto font-semibold py-[6px]">Africoin</p>
              <p className="text-xl text-white">Current Balance</p>
            </div>
            <div className="flex items-center bg-gradient-to-r from-[#febf44] to-[#ed9d19] bg-clip-text text-transparent justify-center gap-1 text-6xl font-bold">
              <Image src={"/svgs/africoin.svg"} alt="africoin" width={80} height={80} />
              <p>25</p>
            </div>
            <button className="bg-gradient-to-r from-[#febf44] to-[#ed9d19] px-8 font-semibold py-3 rounded-lg">
              Donate to get more coins
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-darkBrown text-2xl font-medium">Recent Transactions</h2>

        {Array.from({ length: 5 }).map((_, id) => (
          <div key={id} className={`bg-whiteGold p-5 rounded-2xl flex items-center justify-between`}>
            <div className="space-y-2">
              <p className="font-medium text-xl">Voting Points</p>
              <div className="flex items-center gap-2 text-[#5f6368]">
                <p>{id % 2 === 0 ? "Credit" : "Debit"}</p>
                <div className="size-2 rounded-full bg-gray-300"></div>
                <p>20 Jan, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gradient-to-r from-[#febf44] to-[#ed9d19] bg-clip-text text-transparent justify-center gap-1 text-2xl font-bold">
                <Image src={"/svgs/africoin.svg"} alt="africoin" width={35} height={35} />
                <p>25</p>
              </div>

              {id % 2 === 0 ? <ArrowUp className="text-green-500" /> : <ArrowDown className="text-red-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
