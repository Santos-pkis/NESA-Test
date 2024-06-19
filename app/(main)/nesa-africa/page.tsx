import "../../../public/styles/fade.css";
import Image from "next/image";
import GradientBtn from "@/components/Common/Button/gradient-btn";
import NesaAfricaHeader from "@/components/UI/NesaAfrica/header";
import { ImageIcon } from "lucide-react";

const Page = () => {
  return (
    <>
      <NesaAfricaHeader />

      <main>
        <section className="bg-[#fff5e0]">
          <div className="container grid grid-cols-2 items-center gap-20 py-20">
            <div className="border rounded-md grid place-content-center border-black h-auto aspect-square">
              <ImageIcon />
            </div>
            <div className="space-y-5">
              <h2 className="text-primaryGold text-4xl font-semibold">
                Two Prestigious awards awaits in every category
              </h2>
              <p className="text-lg text-justify text-black">
                Through the selection process, our judges meticulously examine nominees, choosing a winner from each
                subcategory to be honored with the esteemed &apos;Platinum Award.&apos; These winners progress to the
                final stage within their respective categories, where the ultimate victor in each group claims success
                and is honored with the prestigious &apos;Blue Garnet Award,&apos; marking the pinnacle of excellence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
