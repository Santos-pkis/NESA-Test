import Image from "next/image";
import styles from "@/components/Common/Slide/style.module.scss";
import CategorySlide from "@/components/Common/Slide/category";
import { aboutLeftCategories, aboutRightCategories } from "@/lib/store/category";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[40rem] bg-zinc-200 text-white relative`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/back_.jpeg"}
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
                <h1 className="font-bold text-5xl text-midGold leading-[1.4]">
                  Nominate your Champion and Watch them Ascend to Claim the Award
                </h1>

                <p>
                  Nominate the individuals or initiatives making a significant impact in each category, from the initial
                  stages to the pinnacle of recognition in the Nigeria Education Standard Awards.
                </p>
              </div>

              <div className="grid place-content-center">
                <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="py-8">
          <div>
            <div className="container">
              <h2 className="font-bold max-w-2xl text-darkGold text-3xl">
                15 awards for the champions making impact in the Nigerian education system
              </h2>
            </div>

            <div className="space-y-4 mt-8">
              <CategorySlide categories={aboutLeftCategories} />
              <CategorySlide categories={aboutRightCategories} direction="right" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
