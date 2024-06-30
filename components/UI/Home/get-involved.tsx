"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const involveData: {
  heading: string;
  description: string;
  cta: string;
}[] = [
  {
    heading: "Sponsorship",
    description: `Support the NESA Africa 2024 Awards by becoming a Sponsor. Our sponsorship packages offer valuable benefits and exposure at one of the most prestigious educational award ceremonies in Africa.`,
    cta: `Sponsor Us`,
  },
  {
    heading: `Volunteer`,
    description: `You can become a part of a ground breaking moment and history by choosing to volunteer for us at NESA, whatever your background or skills may be, your help is needed in organizing the award ceremony. This would serve as a fantastic opportunity to meet some of the leading figures in African Education `,
    cta: `Volunteer now`,
  },
  {
    heading: `Become a Member`,
    description: `Join our growing global community and celebrate excellence in learning. By becoming a member of our organization, you'll directly contribute to recognizing outstanding educators across the globe, Together, we elevate the standards of education and empower educators.`,
    cta: `Register now`,
  },
];

const GetInvolved = () => {
  return (
    <section className="bg-[#fff5e0] py-16">
      <div className="container">
        <div className="space-y-10">
          <div className="space-y-2">
            <h3 className="_under_border font-bold text-2xl">Get Involved</h3>
            <p className="md:text-2xl text-lg">
              Becoming a member of NESA can help you fulfil your desire to improve the world by giving back to the
              community in your own unique way.
            </p>
          </div>

          <div className="space-y-8">
            {involveData.map((data, id) => (
              <div
                key={id}
                className={`p-8 sm:grid grid-cols-2 gap-10 items-center text-[#f3f3f3] bg-[#191307] rounded-2xl flex flex-col`}
              >
                {/* { id % 2 === 0 ? <></> : <></>} */}

                <div className="min-h-[10rem] overflow-hidden rounded-2xl">
                  <Image
                    src={`/images/i${id + 1}.png`}
                    alt={data.heading}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className={`space-y-3 ${id % 2 !== 0 ? "col-start-1 row-start-1" : ""}`}>
                  <h4 className="font-bold text-3xl">{data.heading}</h4>
                  <p className="">{data.description}</p>
                  <button className="flex text-primaryGold items-center gap-2">
                    <p>{data.cta}</p>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
