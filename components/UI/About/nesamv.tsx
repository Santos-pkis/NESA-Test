import Image from "next/image";

const NESAAfrica = () => {
  return (
    <section className="bg-[#fff5e0] py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          <div className="mb-8 relative">
            <h1 className="font-bold text-2xl lg:text-3xl leading-9">
              Why NESA Africa
            </h1>
            <span className="bg-gradient-to-r from-[#febf44] to-[#ed9d19] h-1 w-20 absolute -bottom-2 left-0"></span>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-x-16 items-start">
            <div className="lg:w-1/3 relative">
              <div className="bg-[#ffd68a] rounded-lg p-4 lg:p-6 absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
              <Image
                src="/images/about/mission.png"
                alt="Mission"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-2/3 mt-6 lg:mt-0 lg:pl-20">
              <h2 className="font-bold text-xl lg:text-2xl leading-7 mb-4">
                Mission
              </h2>
              <p className="text-base lg:text-lg leading-6 max-w-prose">
                To ignite transformative change within Nigeria and Africa educational sectors, creating an environment where educational excellence is not only recognized but celebrated.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:gap-x-16 items-start">
            <div className="lg:w-1/3 relative">
              <div className="bg-[#ffd68a] rounded-lg p-4 lg:p-6 absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
              <Image
                src="/images/about/vision.png"
                alt="Vision"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-2/3 mt-6 lg:mt-0 lg:pr-20">
              <h2 className="font-bold text-xl lg:text-2xl leading-7 mb-4">
                Vision
              </h2>
              <p className="text-base lg:text-lg leading-6 max-w-prose">
                Our vision is to acknowledge and encourage every effort that enhances the quality of education in Nigeria and across Africa, motivating stakeholders to invest, innovate, and participate in uplifting educational standards. Our goal is a future where every child has access to high-quality education, contributing effectively to society.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="flex-1 bg-[#ffc247] rounded-lg p-6 lg:p-8">
              <p className="text-base lg:text-lg leading-6 mb-4">
                Join us as we embark on this celebratory journey, recognizing a decade of educational champions' excellence and transformation in Nigeria. Through these stories of achievement and progress, NESA Africa aims to inspire continued effort and dedication towards an inclusive and quality education system across Nigeria and the broader African continent.
              </p>
              <p className="text-base lg:text-lg leading-6">
                Welcome to NESA Africa, where every recognition marks a milestone in our shared journey towards a brighter educational future.
              </p>
            </div>
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-base lg:text-lg leading-6 mb-4">
                In the span of a decade, Nigeria has seen transformative changes in education, thanks to the collective efforts of dedicated stakeholders.
              </p>
              <p className="text-base lg:text-lg leading-6">
                From enhancing educational infrastructures and curricula to implementing sustainable Corporate Social Responsibility (CSR) projects, the contributions have been diverse yet singular in their goal—improving education for every Nigerian child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NESAAfrica;
