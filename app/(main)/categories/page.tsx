import CategoriesHeader from "@/components/UI/Categories/header";
import { aboutLeftCategories, aboutRightCategories } from "@/lib/data/category";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <CategoriesHeader />

      <main>
        <div className="container py-20">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
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
