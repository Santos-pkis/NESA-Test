import Image from "next/image";
import styles from "@/components/UI/Home/style.module.scss";
import Category, { Partners } from "@/components/UI/Home/category";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[43rem] bg-zinc-200 text-white relative ${styles.homeHeader}`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/hero-image.jpeg"}
              alt="hero image"
              width={1024}
              height={650}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-[#17120aae]"></div>

          <div className="absolute top-0 left-0 h-full w-full text-center">
            <div
              className={`mt-10 -mb-3 container space-x-8 border-y-[2.5px] overflow-hidden border-[#d9a53c] ${styles["head-scroll-con"]}`}
            >
              {new Array(3).fill(null).map((_, id) => (
                <p key={id} className={`text-lg py-1 ${styles["head-scroll-text"]}`}>
                  -- <span className="font-bold">ANNOUNCEMENT</span> - Nomination Starts from January 20th, 2024, Get
                  ready to nominate your Education Champion!
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center h-[calc(100%-200px)]">
              <div className="container flex items-end justify-between">
                <Image src={"/images/medal.png"} alt="medal" width={90} height={270} />

                <div className="max-w-6xl mx-auto">
                  <div className="space-y-4">
                    <h1 className="text-3xl">Welcome to NESA Nigeria 2023 Awards</h1>
                    <p className="font-bold text-7xl text-[#d9a53c]">
                      A Decade of Educational Excellence & Transformation
                    </p>
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

                <Image src={"/images/medal.png"} alt="medal" width={90} height={270} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Category />

        <section className="py-[10rem] my-[5rem] text-white relative">
          <Image
            src={"/images/bg/back_.jpeg"}
            alt="dark background"
            className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
            width={1024}
            height={600}
          />
          <div className="space-y-8 container">
            <p className="text-white text-center text-2xl">Meet our Key Partners Powering Education Together</p>

            <div>
              <div className={"relative whitespace-nowrap container overflow-hidden border-x-2"}>
                <Partners />
                <Partners />
                <Partners />
              </div>
            </div>

            <div className="grid place-content-center">
              <button className="bg-[#e0aa3e] px-5 font-semibold py-3 rounded-md text-black">Partner with us</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
