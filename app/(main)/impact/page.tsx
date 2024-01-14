import GetInvolved from "@/components/Common/Others/get-involved";
import { blogs } from "@/lib/data/blogs";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, User2 } from "lucide-react";
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

      <main>
        <div className="pt-20 bg-[#f4f4f3]">
          <div className="text-center container space-y-6">
            <h2 className="font-bold text-3xl">Metrics That Matter</h2>
            <p>
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed.
              Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
              Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
            </p>
          </div>

          <section className="my-20">
            <div className="space-y-16 px-16">
              <div className="grid md:grid-cols-2 items-center">
                <div className="grid place-content-center">
                  <Image src={"/images/examples/e1.png"} alt="hero image" width={400} height={400} />
                </div>
                <div className="grid place-content-center space-y-5">
                  <div className="max-w-md space-y-12">
                    <p className="font-bold text-3xl">Purus id tellus arcu habitant proin magna. Integer purus </p>
                    <p>
                      Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 items-center">
                <div className="grid place-content-center space-y-5">
                  <div className="max-w-md space-y-12">
                    <p className="font-bold text-3xl">Purus id tellus arcu habitant proin magna. Integer purus </p>
                    <p>
                      Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.
                    </p>
                  </div>
                </div>

                <div className="grid place-content-center">
                  <Image src={"/images/examples/e2.png"} alt="hero image" width={400} height={400} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 items-center">
                <div className="grid place-content-center">
                  <Image src={"/images/examples/e3.png"} alt="hero image" width={400} height={400} />
                </div>
                <div className="grid place-content-center space-y-5">
                  <div className="max-w-md space-y-12">
                    <p className="font-bold text-3xl">Purus id tellus arcu habitant proin magna. Integer purus </p>
                    <p>
                      Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="overflow-hidden relative min-h-[45rem]">
          <Image
            src={"/images/bg/back_.jpeg"}
            alt="background image"
            width={1240}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="py-16 absolute top-0 left-0 w-full h-full">
            <div className="container text-white">
              <div className="space-y-6">
                <h3 className="_under_border font-bold text-sm uppercase">Projects ongoing</h3>
                <div className="flex gap-10">
                  <div className="space-y-2">
                    <h4 className="font-bold text-4xl text-midGold">Quarterly Intervention Crowdfunding</h4>
                    <p>
                      NESA also facilitates a crowdfunding platforms to support educational projects and interventions.
                      These projects are categorized based on their focus and impact areas. Every Quatar, different
                      projects will be highlighted for crowdfunding opportunities
                    </p>
                  </div>

                  <button
                    className="flex-shrink-0 self-start w-fit px-7 text-sm font-semibold py-3 rounded-lg text-black"
                    style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
                  >
                    View All
                  </button>
                </div>
              </div>

              <div className="mt-6 flex space-x-10 overflow-hidden">
                {Array.from({ length: 6 }).map((_, id) => (
                  <div
                    key={id}
                    className="h-[24rem] aspect-[6/7] text-darkGold w-auto rounded-2xl p-10 flex flex-col justify-between bg-[#f9d9a5]"
                  >
                    <p className="text-2xl font-bold">Infrastructure Development Project</p>

                    <p>
                      This Project is aimed at improving and physical infrastructure in schools such as building
                      classrooms, libraries, sporting facilities and others.
                    </p>

                    <button
                      className="flex-shrink-0 self-start w-fit px-5 text-sm font-semibold py-3 rounded-lg text-black"
                      style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
                    >
                      Donate to this Project
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-16">
            <h3 className="_under_border font-bold text-sm uppercase">SUCCESS STORIES AND BLOGS</h3>

            <div className="flex items-center justify-between mt-10">
              <p className="font-bold text-3xl">Articles You May Read</p>

              <div className="flex items-center gap-2 text-black">
                <button className="p-2 rounded-lg bg-xlGold">
                  <ArrowLeft size={18} />
                </button>
                <button className="p-2 rounded-lg bg-deepGold">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-3 gap-12">
                {blogs.map((blog, id) => (
                  <div key={id} className="rounded-xl overflow-hidden bg-white shadow-lg">
                    <div>
                      <Image
                        src={blog.image}
                        alt="blog cover"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex text-zinc-500 items-center justify-between">
                        <div className="flex text-xs font-medium items-center gap-2">
                          <User2 size={18} />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex text-xs font-medium items-center gap-2">
                          <Calendar size={18} />
                          <span>{blog.date}</span>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <p className="font-bold">{blog.heading}</p>
                        <p className="text-sm">{blog.description}</p>

                        <button
                          className="flex-shrink-0 self-start w-fit px-5 text-sm font-semibold py-3 rounded-lg text-black"
                          style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="my-20 bg-[#f4f4f3] py-24">
          <GetInvolved />
        </div>

        <div className="mb-20">
          <div className="container">
            <h3 className="_under_border font-bold text-sm uppercase">View gallery</h3>

            <div className="my-10 grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, id) => (
                <div
                  className={`rounded-lg ${
                    id === 2 && "scale-110"
                  } max-h-[20rem] border-4 overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-300 cursor-pointer hover:z-50`}
                  key={id}
                >
                  <Image
                    src={`/images/examples/gallery/g${id + 1}.png`}
                    className="w-full h-full object-cover scale-125"
                    alt="image"
                    width={300}
                    height={500}
                  />
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
