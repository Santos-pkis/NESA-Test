"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const involveData: {
  heading: string;
  description: string;
  cta: string;
}[] = [
  {
    heading: "Sponsor a Category or the Gala Event",
    description: "Be the force behind Africa's changemakers. By sponsoring an award category, a session at the EduAid Expo, or the NESA-Africa Awards Gala itself, your organization directly empowers the heroes working to achieve education for all. Your brand will be featured in front of millions across Africa, celebrated for investing in social impact, sustainability, and the future of our continent.",
    cta: `Sponsor a Category`,
  },
  {
    heading: `Join as an Ambassador (Local Chapters — Online or Real-Time)`,
    description: `Lead the change, locally and globally. Join our vibrant network of Ambassadors, representing cities, universities, diaspora communities, and local chapters across Africa and the world. Ambassadors are the heart of our engagement strategy — they organize, promote, and expand the movement both online and on-ground.`,
    cta: `Become a NESA Ambassador`,
  },
  {
    heading: `Become a Member`,
    description: `Membership that makes a difference. When you join NESA-Africa and Santos Creations Educational Foundation (SCEF) as a Member, you become part of a growing community of educators, innovators, advocates, and businesses committed to changing lives through education.`,
    cta: `Become a member now`,
  },
  {
    heading: `Volunteer with Us`,
    description: `Give your time. Grow your impact. Volunteers are the backbone of our movement. From media production to ambassador support, logistics to research, volunteering with NESA-Africa offers the opportunity to gain experience, make friends, and leave a lasting mark on education transformation across Africa.`,
    cta: `Volunteer now`,
  },
  {
    heading: `Donate to Empower Education for All`,
    description: `Every contribution creates opportunities. Your donation directly funds scholarships, provides rural schools with digital tools, supports displaced learners, and strengthens our sustainable education programs. Secure and easy — donate through the GFA Wallet and make a real difference.`,
    cta: `Donate one`,
  },
];

const GetInvolved = () => {
  return (
    <section className="bg-[#fff5e0]  py-2">
      <div className=" mx-auto container lg:ml-14">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="_under_border lg:text-[32px] text-[20px] font-poppins leading-[38px] font-semibold text-[#191307]   lg:mb-10 mb-6 mt-2 lg:-mt-5">Get Involved</h3>
            <p className="font-poppins font-normal md:leading-[30px] tracking-[1%] md:text-[18px]">
              Becoming a member of NESA can help you fulfil your desire to improve the world by giving back to the
              community in your own unique way.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:gap-2 gap-4">
            {involveData.map((data, id) => (
              <div
              key={id}
              className={`p-3 flex flex-col items-start text-black rounded-2xl lg:space-y-1 space-y-6 ${
                id === involveData.length - 1 ? "md:col-span-2 lg:mx-auto mx-32" : ""
              }`}
              >
              <div className="w-full lg:max-w-[650px] lg:max-h-[450px] aspect-square overflow-hidden">
              <Image
              src={`/images/getinvolved/get${id + 1}.png`}
              alt={data.heading}
              width={500}
              height={200}
              className="w-full h-full object-cover"
              />
              </div>

              <div className="space-y-3 lg:max-w-[650px]">
              <h4 className="text-2xl font-semibold font-poppins">{data.heading}</h4>
              <p className="font-poppins pb-6 text-justify font-normal md:leading-[30px] tracking-[1%] md:text-[18px]">{data.description}</p>
              <Link className="py-4" href="/donate" passHref>
                
              <button className="flex text-primaryGold items-center gap-2">
              <p>{data.cta}</p>
              <ChevronRight />
              </button>
              
              </Link>
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
