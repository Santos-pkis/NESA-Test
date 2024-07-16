import Button from "@/components/Common/Button";
import FAQs from "@/components/Common/Others/faq";
import CategoriesHeader from "@/components/UI/Categories/header";
import { allCategories, howToNominate } from "@/lib/data/category";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <CategoriesHeader />

      <main>
        <div className="bg-[#fff5e0] space-y-20 py-20">
          <div className="container space-y-3">
            <p className="text-2xl font-medium _under_border">How to Nominate Your Champion</p>

            <ul className="space-y-4">
              {howToNominate.map((how, id) => (
                <li key={id} className="flex items-center gap-2">
                  <div className="size-4 bg-midGold rounded-full"></div>
                  <p className="font-medium text-lg">{how}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="container space-y-10">
            <p className="text-3xl text-center _under_border_center w-fit mx-auto">The Blue Garnet Award Categories</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {allCategories.slice(0, 15).map((data, id) => (
                <div
                  key={id}
                  className="w-full max-w-md min-h-[12rem] rounded-[2.3rem] bg-[#191307] overflow-hidden text-white relative flex flex-col justify-between"
                >
                  <div className="px-4 py-6 w-full h-full flex flex-col justify-between gap-5">
                    <div className="overflow-hidden rounded-xl md:h-[14rem] h-[10rem] flex-shrink-0">
                      <Image
                        src={"/images/nesa-card.png"}
                        alt="card cover"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-xl md:text-2xl">{data.title}</p>
                        <p className="leading-[1.8] line-clamp-4">{data.description}</p>
                      </div>

                      <div className="mt-4">
                        <Link href={`/categories/${data.id}`}>
                          <Button text="See Sub-Categories" fullWidth variant="filled" rounded="lg" size="medium" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container space-y-8 py-12">
          <p className="text-2xl font-medium _under_border">Frequently Asked Questions</p>
          <FAQs />
        </div>
      </main>
    </>
  );
};

export default Page;
