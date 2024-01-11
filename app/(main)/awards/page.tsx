import { aboutLeftCategories, aboutRightCategories } from "@/lib/store/category";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[40rem] bg-zinc-200 text-white relative`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/about_.png"}
              alt="hero image"
              width={12400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="w-full h-full flex items-center absolute top-0 left-0 -mt-6">
            <div className="container grid grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="font-bold text-5xl text-midGold leading-[1.4]">The NESA Award Categories</h1>

                <p>15 categories to nominate your champions from.</p>
              </div>

              <div className="grid place-content-center">
                <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container py-20">
          <div className="grid grid-cols-3 gap-8">
            {[...aboutLeftCategories, ...aboutRightCategories].map((data, id) => (
              <div key={id} className={`h-[26rem] w-auto rounded-2xl bg-darkGold overflow-hidden text-white relative`}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#181818a8]"></div>

                <div className="py-8 px-6 absolute top-0 left-0 w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-16 h-16">
                      <Image src={"/images/logos/small_logo.png"} alt="medal" width={200} height={200} />
                    </div>

                    <p className="font-bold text-xl uppercase">{data.title}</p>
                    <p className="font-light leading-[1.8]">{data.description}</p>

                    <button
                      className="bg-[#e0aa3e] w-fit px-5 text-sm font-semibold py-3 rounded-lg text-black"
                      style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
                    >
                      View Nominies
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
