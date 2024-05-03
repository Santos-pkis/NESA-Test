import BasicHeader from "@/components/Common/Hero/basic-1";
import { joinUsContents } from "@/lib/data/others";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <BasicHeader heading="Join the NESA 2023 Community!" description="Explore Opportunities to Make a Difference" />
      <main>
        <div className="my-20 container space-y-20">
          {joinUsContents.map((content, id) => (
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
                <div className="w-fit">
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
