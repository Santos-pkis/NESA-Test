import TestimoniesShowcase from "@/components/UI/Testimonies/showcase";
import "../../../public/styles/fade.css";
import Image from "next/image";
import GradientBtn from "@/components/Common/Button/gradient-btn";

const description = `Welcome to New Education Standard Award Africa (NESA Africa), where we honor the collective journey towards educational excellence and transformation across Nigeria and Africa over the past decade. At NESA Africa, we are poised to celebrate the monumental efforts and contributions of organizations, individuals, companies, and institutions that have significantly advanced our journey towards the universal goal of education for all.

Over the span of ten years, from 2013 to 2023, Nigeria, alongside the broader African continent, has experienced transformative shifts in education, brought to life by the dedication of countless stakeholders. These changes range from improvements in educational infrastructures and curricula to the implementation of impactful Corporate Social Responsibility (CSR) projects, each effort contributing to a shared objective of enhancing education for every child in Nigeria and across Africa.

NESA Africa's award categories are thoughtfully designed to honor the extensive range of actions that have catalyzed this educational transformation. Whether it’s NGOs ensuring inclusivity, corporations weaving educational support into their CSR missions, pioneering educational institutions reshaping the learning landscape, or individuals championing policy reforms, each contributor has played a vital role in this decade-long narrative of progress.

As you navigate our website, you'll encounter the inspiring tales of our awardees: the challenges they've overcome, their notable successes, and the enduring impact of their work. These stories stand as a testament to the remarkable achievements possible when commitment is matched with action in the educational realm.
We invite you to embark on this celebratory journey with us, recognizing a decade of educational excellence and transformation in Nigeria and across Africa. Through these narratives of achievement and progress, NESA Africa aims to spark continued efforts and dedication towards fostering an inclusive and quality education system across the continent.


Welcome to NESA Africa, where every recognition marks a significant milestone in our shared quest towards a brighter educational future for all.
________________________________________
`;

const Page = () => {
  return (
    <>
      <header className="md:min-h-[70rem] min-h-screen bg-[#1e1e1e] text-white flex items-center pt-28 md:pt-10">
        <div className="container space-y-8">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-deepGold">
            NESA AFRICA: Igniting Excellence in African Education
          </h1>
          <div className="space-y-5 md:text-lg whitespace-pre-line">
            {description}
            {/* <p>
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
            </p> */}
          </div>
        </div>
      </header>
      <main>
        <div className="container mb-10">
          <Image
            className="w-full scale-[1.8]"
            src={"/images/testimonies/mapish.svg"}
            alt="world map"
            width={1000}
            height={1000}
          />
          <div className="flex items-center justify-center -mt-16">
            <GradientBtn text="Request to Host NESA AFRICA" />
          </div>
        </div>

        <TestimoniesShowcase />
      </main>
    </>
  );
};

export default Page;
