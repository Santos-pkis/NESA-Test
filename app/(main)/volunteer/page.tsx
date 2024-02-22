import TitleDescriptionHeader from "@/components/Common/Hero/basic-title-description";
import { volunteerCategories, volunteerFeatures } from "@/lib/data/others";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <TitleDescriptionHeader
        title="Volunteers @ NESA 2023"
        description="Volunteering with us offers a unique opportunity to give back, develop new skills, and work on projects that have a real impact. Our volunteers are a testament to the power of community engagement in driving educational initiatives"
      />
      <main className="py-10">
        <div className="container">
          <h2 className="max-w-4xl mx-auto text-center font-bold md:text-5xl sm:text-4xl text-3xl mb-4">
            Santos Creations Educational Foundation Volunteer Program
          </h2>
          <div className="mt-6 space-y-10">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
              {volunteerCategories.map((data, id) => (
                <div key={id} className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <Image src={`/images/careers/volunteers/${data.image}`} alt={data.title} width={300} height={300} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{data.title}</p>
                    <p className="text-zinc-600">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {volunteerFeatures.map((item, id) => (
                <div key={id} className="p-6 space-y-3">
                  <p className="md:text-3xl text-2xl font-semibold">{item.title}</p>
                  <ul className="ml-8 list-disc space-y-1 text-zinc-600">
                    {item.options.map((option, id) => (
                      <li key={id}>{option}</li>
                    ))}
                  </ul>
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
