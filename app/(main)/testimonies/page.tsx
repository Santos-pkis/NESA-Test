import TestimoniesShowcase from "@/components/UI/Testimonies/showcase";
import "../../../public/styles/fade.css";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header className="md:min-h-[40rem] min-h-screen bg-[#1e1e1e] text-white flex items-center pt-10">
        <div className="container space-y-8">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-deepGold">
            NESA AFRICA: Igniting Excellence in African Education
          </h1>
          <div className="space-y-5 md:text-lg">
            <p>
              In a land rich with diversity, innovation, and untapped potential, NESA AFRICA seeks to showcase the
              incredible stories, initiatives, and transformative endeavors that are making an indelible impact. Our
              initiative is more than an accolade; it&apos;s a movement, a rallying call for change, and an ode to those
              dedicated to uplifting education to new heights.
            </p>
            <p>
              IWe believe that within the vast expanse of Africa lies an untapped wealth of educational brilliance,
              waiting to be recognized and celebrated. NESA AFRICA is the conduit through which these stories find their
              stage, inspiring others to join the ranks of those committed to reshaping the narrative of education on
              our continent.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="-mt-[35rem] md:block hidden">
          <Image
            className="w-full"
            src={"/images/testimonies/world_map.svg"}
            alt="world map"
            width={1000}
            height={1000}
          />
        </div>

        <div className="md:-mt-[30rem]"></div>
        <TestimoniesShowcase />
      </main>
    </>
  );
};

export default Page;
