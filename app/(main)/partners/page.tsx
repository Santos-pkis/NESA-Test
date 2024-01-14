import GetInvolved from "@/components/Common/Others/get-involved";
import UnderlineText from "@/components/Common/Others/underline-text";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[40rem] bg-zinc-200 text-white relative py-10`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/about_.png"}
              alt="hero image"
              width={1240}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden">
            <div className="text-center space-y-4">
              <h1 className="font-bold md:text-6xl text-5xl">
                Partnerships and <br className="hidden md:block" /> Collaborations @ NESA Africa
              </h1>
              <p>
                Recognizing players who contributed to the growth of the Nigerian <br /> education sector and fostering
                innovations
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="space-y-20 py-20 container">
          <div>
            <UnderlineText text="GOVERNMENT BODIES PARTNERS" />
            <Logos />
          </div>
          <div>
            <UnderlineText text="NGO PARTNERS" />
            <Logos />
          </div>
          <div>
            <UnderlineText text="AGENCY PARTNERS" />
            <Logos />
          </div>
        </div>

        <div className="mb-20">
          <GetInvolved />
        </div>
      </main>
    </>
  );
};

const Logos = () => {
  const imgs = [1, 2, 4, 6, 7, 4, 7];

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 my-6">
      {imgs.map((_, id) => (
        <div key={id} className="p-4 shadow-lg rounded-md flex items-center justify-center">
          <Image src={`/images/logos/logo_${_}.png`} alt="logo" width={150} height={150} />
        </div>
      ))}
    </div>
  );
};

export default Page;
