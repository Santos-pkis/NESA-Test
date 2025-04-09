"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const involveData: {
  heading: string;
  description: string;
  cta: string;
}[] = [
  {
    heading: "Become a Sponsor - Support and Showcase your Brand",
    description: `Partner with us to make a lasting impact on Africa's education system. Gain visibility, credibility, and influence in the education sector.`,
    cta: `Sponsor Us`,
  },
  {
    heading: `Become a Volunteer - Contribute to Elevating Africans Education`,
    description: `You can become a part of a ground breaking moment and history by choosing to volunteer for us at NESA, whatever your background or skills may be, your help is needed in organizing the award ceremony. This would serve as a fantastic opportunity to meet some of the leading figures in African Education`,
    cta: `Volunteer now`,
  },
  {
    heading: `Become a Member`,
    description: `Join our growing global community and celebrate excellence in learning. By becoming a member of our organization, you'll directly contribute to recognizing outstanding educators across the globe, Together, we elevate the standards of education and empower educators.`,
    cta: `Become a member now`,
  },
  {
    heading: `Join as an Ambassador – Advocate for education.`,
    description: `Be a leader in the movement! Join NESA Africa as an Ambassador and promote quality education in your region.`,
    cta: `Be a leader in the movement! Join NESA Africa as an Ambassador and promote quality education in your region.`,
  },
  {
    heading: `Donate to the cause of education in Africa`,
    description: `Your generosity fuels our mission to celebrate and empower outstanding individuals across various fields. By donating to the NESA Awards, you’re not just supporting an event—you’re investing in talent, innovation, and positive change.`,
    cta: `Donate one`,
  },
];

const GetInvolved = () => {
  return (
    <section className="bg-[#fff5e0] py-16">
      <div className="container">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="_under_border font-semibold text-2xl">Get Involved</h3>
            <p className="md:text-2xl text-lg">
              Becoming a member of NESA can help you fulfil your desire to improve the world by giving back to the
              community in your own unique way.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {involveData.map((data, id) => (
                <div
                key={id}
                className="p-8 flex flex-col items-start text-black rounded-2xl space-y-6"
                >
                <div className="w-full aspect-square overflow-hidden">
                <Image
                src={`/images/getinvolved/get${id + 1}.png`}
                alt={data.heading}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                />
                </div>

                <div className="space-y-3">
                <h4 className="text-3xl">{data.heading}</h4>
                <p>{data.description}</p>
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
