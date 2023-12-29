import Image from "next/image";
import styles from "./style.module.scss";

const Page = () => {
  return (
    <>
      <header>
        <div className={`h-[40rem] bg-zinc-200 text-white relative ${styles.homeHeader}`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/hero-image.jpeg"}
              alt="hero image"
              width={1024}
              height={650}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-[#17120a7e]"></div>

          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-center">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-3xl">Welcome to NESA Nigeria 2023 Awards</h1>
                <p className="font-bold text-7xl text-[#d9a53c]">A Decade of Educational Excellence & Transformation</p>
                <p className="text-xl">
                  A flagship initiative under NESA Africa by Santos Creations Educational Foundation{" "}
                </p>
              </div>

              <div className="flex items-center gap-6 justify-center mt-8">
                <button className="bg-[#e0aa3e] px-5 font-semibold py-3 rounded-md text-black">
                  Nominate A Champion
                </button>
                <button className="border-[#e0aa3e] px-5 font-semibold py-3 rounded-md border-2 bg-[#191307]">
                  What&apos;s NESA?
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1>home</h1>
      </main>
    </>
  );
};

export default Page;
