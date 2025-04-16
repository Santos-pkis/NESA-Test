import Image from 'next/image';

const JudgesSection = () => {
  return (
    <section className="relative bg-[#17120a] text-white py-20 px-5 sm:px-10 lg:px-20 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herosection.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="background-gradient"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-8 mx-auto lg:mx-0 max-w-[700px] bg-gradient-to-r from-[#FFC247] to-[#E48900] bg-clip-text text-transparent lg:-ml-10">
            New Education Standard Award : Meet Our Prestigious Judges
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed mx-auto lg:mx-0 max-w-[500px] lg:-ml-10">
            NESA stands as the pinnacle award of the decade, a fervent celebration of excellence within the Nigerian 
            education system. We uplift contributors, ignite innovation, and envision an ecosystem where 
            excellence becomes the driving force for transformative change.
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="col-span-1">
              <Image
                src="/images/hjudge.png"
                alt="Judge 1"
                width={200}
                height={200}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="col-span-1 row-span-2 mt-10 sm:mt-20 ml-0 sm:ml-3">
              <Image
                src="/images/hjudge3.png"
                alt="Judge 2"
                width={200}
                height={420}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="col-span-1 mt-4 ml-0 sm:ml-5">
              <Image
                src="/images/hjudge1.png"
                alt="Judge 3"
                width={200}
                height={180}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;