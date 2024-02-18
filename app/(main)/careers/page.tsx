import BasicHeader from "@/components/Common/Hero/basic-1";
import careers from "@/lib/data/carees";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <BasicHeader
        heading="Careers @ NESA 2023"
        description="Join NESA Africa, facilitated by Santos Creations Educational Foundation, and become part of a transformative educational community. "
      />

      <main>
        <div className="container py-16 space-y-5">
          <div className="text-center max-w-3xl space-y-2 mx-auto">
            <h2 className="font-bold text-4xl">Careers Departments</h2>
            <p>
              Become an integral part of our passionate team! Explore any of the diverse opportunities to collaborate
              and contribute to the resounding success of NESA 2023.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 lg:px-20 md:px-10">
            {careers.map((career, id) => (
              <div key={id}>
                <div className="w-full max-h-[24rem] aspect-square">
                  <Image
                    src={career.image}
                    alt={career.title}
                    width={300}
                    height={300}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="p-2 text-center font-semibold">
                  <p>{career.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
