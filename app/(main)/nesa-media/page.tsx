import { raleway } from "@/lib/utils/font";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header className="md:min-h-[25rem] min-h-screen relative">
        <Image
          src={"/images/bg/team_bg.jpg"}
          alt={"background"}
          width={1024}
          height={800}
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center pt-10">
          <div className="space-y-5 text-white md:max-w-4xl container mx-auto text-center mt-5">
            <h1 className={`${raleway.className} font-bold md:text-5xl text-4xl text-deepGold`}>NESA MEDIA</h1>
            <div className="flex items-center gap-4 justify-center">
              {["CATEGORIES VIDEOS", "STREETS OF AFRICA", "PICTURES"].map((_, id) => (
                <button key={id} className="px-5 py-2 rounded-xl border">
                  {_}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold text-3xl">ABOUT CATEGORIES</h2>

            <p className="font-bold text-deepGold">SEE MORE</p>
          </div>

          <div className="mt-2 space-y-8">
            {Array.from({ length: 4 }).map((_, id) => (
              <div key={id} className="grid md:grid-cols-2 items-center bg-[#fff5e0]">
                <div className="md:max-h-[25rem] max-h-[18rem] overflow-hidden">
                  <Image
                    src={`/images/media/${id + 1}.png`}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 p-8">
                  <p className="text-xl font-bold">
                    CATEGORY {id + 1}: <br />
                    NGO Contributions to Education{" "}
                  </p>
                  <p>
                    The NGO Educational Champion of the Decade Award is established to honor and recognize the pivotal
                    role of Nigerian indigenous NGOs and civil society organizations in championing the cause of
                    &apos;Education for All&apos;. The 2023 award cycle specifically acknowledges those entities that
                    have excelled in aligning with the objectives of civil society organizations, including continuous
                    learning, adult education, environmental education, and alignment with Sustainable Development Goals
                    (SDGs) in education.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 relative bg-black">
          <div className="container text-white py-10 space-y-8">
            <h3 className="font-bold text-center text-3xl">STREETS OF AFRICA</h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 md:gap-20 gap-12">
              {Array.from({ length: 6 }).map((_, id) => (
                <div key={id} className="items-center space-y-2">
                  <div className="md:max-h-[15rem] max-h-[10rem] overflow-hidden">
                    <Image
                      src={`/images/media/${id >= 4 ? 1 : id + 1}.png`}
                      alt="image"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>NIGERIA: THE GIANT OF AFRICA DOCUMENTARY</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mt-16 space-y-8">
          <h3 className="font-bold text-3xl">MOMENTS IN PICTURES</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 lg:gap-10 md:gap-20 gap-12">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id} className="items-center space-y-2">
                <div className="md:max-h-[15rem] max-h-[10rem] overflow-hidden">
                  <Image
                    src={`/images/media/${
                      id >= 4 ? [1, 2, 3, 4][Math.floor(Math.random() * [1, 2, 3, 4].length)] : id + 1
                    }.png`}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
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
