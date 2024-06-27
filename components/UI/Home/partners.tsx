import Button from "@/components/Common/Button";
import Partners from "@/components/Common/Slide/partners";
import Image from "next/image";

const HomePartners = () => {
  return (
    <section className="py-[7rem] mb-[5rem] text-white relative">
      <Image
        src={"/images/bg/timeline.png"}
        alt="dark background"
        className="w-full h-full object-cover -z-[2] absolute top-0 left-0"
        width={1024}
        height={600}
      />

      <div className="bg-[#15110999] absolute top-0 left-0 w-full -z-[1] h-full"></div>

      <div className="space-y-8 container">
        <p className="text-white text-center text-4xl font-semibold">Meet Our Key Partners </p>

        <div>
          <div className={"relative whitespace-nowrap md:container overflow-hidden"}>
            <Partners />
            <Partners />
            <Partners />
          </div>
        </div>

        <div className="grid place-content-center">
          <Button text="Partner with us" variant="filled" size="medium" />
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
