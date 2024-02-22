import BasicHeader from "@/components/Common/Hero/basic-1";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Data = {
  heading: string;
  body: string;
  image: string;
  ctaText: string;
  path: string;
};

const contents: Data[] = [
  {
    heading: "JOIN US BY BECOMING A MEMBER",
    body: `By becoming a member, you not only unlock exclusive benefits but also stay at the forefront of educational innovation. Join a community of forward-thinkers committed to spearheading the transformation of education in Nigeria. Your membership is a key to shaping the future of learning!"`,
    image: "/images/join/pic1.png",
    ctaText: "Become a Member",
    path: "/",
  },
  {
    heading: "VOLUNTEER FOR NESA",
    body: ` As a volunteer for NESA 2023, you have the power to contribute your time and skills to create an unforgettable experience. 

Be an essential part of the team that orchestrates a memorable event dedicated to advancing education in Nigeria. Your commitment can spark a positive revolution`,
    image: "/images/join/pic2.png",
    ctaText: "Volunteer Now",
    path: "/",
  },
  {
    heading: "WORK WITH US",
    body: `Become an integral part of our passionate team! Explore diverse opportunities to collaborate and contribute to the resounding success of NESA 2023. 

Whether you're an individual, organization or expert in your field, we welcome you to explore meaningful ways to shape the educational landscape together. Your expertise can be the driving force behind our collective success`,
    image: "/images/join/pic3.png",
    ctaText: "Explore Careers",
    path: "/careers",
  },
];

const Page = () => {
  return (
    <>
      <BasicHeader heading="Join the NESA 2023 Community!" description="Explore Opportunities to Make a Difference" />
      <main>
        <div className="my-20 container space-y-20">
          {contents.map((content, id) => (
            <div className="grid md:grid-cols-2 gap-8 items-center" key={id}>
              <div className="max-h-[25rem] overflow-hidden">
                <Image
                  src={content.image}
                  alt={content.heading}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-semibold md:text-5xl text-4xl">{content.heading}</h3>
                <p className="whitespace-pre-line text-zinc-500">{content.body}</p>
                <div>
                  <Link href={content.path}>
                    <button className="flex items-center text-blue-500 font-bold gap-2">
                      <span>{content.ctaText}</span>
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
