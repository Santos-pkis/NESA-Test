import Image from "next/image";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[35rem] bg-zinc-200 text-white relative py-10`}>
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

          <div className="w-full h-full flex items-center absolute top-0 left-0 -mt-6">
            <div className="container">
              <div className="space-y-6 text-center py-8">
                <div className="space-y-2">
                  <h1 className="font-bold text-5xl text-midGold leading-[1.4]">IMPACT @ NESA AFRICA</h1>
                  <p className="max-w-2xl mx-auto text-center">
                    In a country facing infrastructural deficits, outdated curricula, and educator motivation issues,
                    NESA Nigeria strives to encourage government bodies, NGOs, UN agencies, CSR initiatives, and private
                    entities to play pivotal roles in improving education
                  </p>
                </div>
                <div className="max-w-2xl mx-auto border-2 border-midGold cursor-pointer rounded-lg max-h-[25rem] overflow-hidden grid place-content-center mt-10 relative">
                  <Image
                    src={"/images/bg/video.png"}
                    alt="hero image"
                    width={900}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-20 bg-[#f4f4f3]">
        <div className="text-center container space-y-6">
          <h2 className="font-bold text-3xl">Metrics That Matter</h2>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo
            in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
            scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
          </p>
        </div>

        <div className="my-20">
          <div className="space-y-10 px-16">
            <div className="grid md:grid-cols-2 items-center">
              <div className="grid place-content-center">
                <Image src={"/images/examples/e1.png"} alt="hero image" width={400} height={400} />
              </div>
              <div className="grid place-content-center space-y-5">
                <div className="max-w-md">
                  <p className="font-bold text-3xl">Purus id tellus arcu habitant proin magna. Integer purus </p>
                  <p>
                    Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
