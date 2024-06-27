import CareerCategoryHeader from "@/components/Common/Hero/career-category";
import { CareerCategory, careerCategories } from "@/lib/data/careers";
import Image from "next/image";

export const dynamicParams = true;

export type CareerProps = { params: { categoryId: string } };

const Page = ({ params: { categoryId } }: CareerProps) => {
  const category = careerCategories.find((el) => el.id === categoryId) as CareerCategory;

  return (
    <>
      <CareerCategoryHeader {...category} />
      <main>
        <div className="container py-10">
          <div className="max-w-3xl space-y-2">
            <h3 className="font-bold md:text-3xl text-2xl capitalize">see Jobs Open under this Category</h3>
            <p>
              Become an integral part of our passionate team! Explore any of the diverse opportunities to collaborate
              and contribute to the resounding success of NESA 2023.
            </p>
          </div>

          <div className="mt-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {Array.from({ length: 9 }).map((_, id) => (
                <div key={id} className="p-3 bg-[#fff5e0] space-y-2">
                  <div className="max-h-[12rem] overflow-hidden">
                    <Image
                      src={"/images/careers/jobs/image.png"}
                      alt="img"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-2xl">Chief Executive Officer (CEO)</p>
                    <p className="text-sm font-medium">
                      As the Chief Executive Officer (CEO) of NNESA 2023, you are the visionary leader at the helm,
                      steering the organization towards its mission of transforming education in Nigeria. Your role is
                      multi-faceted, encompassing strategic leadership, operational excellence, and stakeholder
                      engagement. <span className="underline text-blue-700">Learn More</span>
                    </p>
                    <p>Lagos, Nigeria</p>
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <button className="border rounded-lg px-3 py-[6px] border-black">Full Time</button>
                      <button className="bg-deepGold rounded-lg px-4 py-2">Apply Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
