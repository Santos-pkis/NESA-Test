import CareerCategoryHeader from "@/components/Common/Hero/career-category";
import { CareerProps } from "../page";
import { CareerCategory, careerCategories } from "@/lib/data/careers";
import Link from "next/link";
import Image from "next/image";

const Page = ({ params: { categoryId } }: CareerProps) => {
  const category = careerCategories.find((el) => el.id === categoryId) as CareerCategory;

  return (
    <>
      <CareerCategoryHeader {...category} />
      <main>
        <div className="container py-10">
          <Link href={"/careers"} className="underline">
            Back to Jobs Page
          </Link>

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-3xl">Chief Executive Officer (CEO)</h3>

              <button className="bg-deepGold rounded-lg px-4 py-2">Apply Now</button>
            </div>
            <div className="mt-8 space-y-12">
              <div>
                <Image
                  src={"/images/careers/jobs/header.png"}
                  width={1024}
                  height={500}
                  alt="header"
                  className="w-full"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="font-bold capitalize text-xl">overview</p>
                  <p className="text-lg">
                    As the Chief Executive Officer, my role is to lead NESA on its mission to revolutionize the
                    educational landscape. I provide strategic direction, envisioning the future, and ensuring that our
                    initiatives align with our overarching goals. I am deeply involved in fostering partnerships,
                    driving innovation, and inspiring the entire team to reach new heights. My leadership is centered on
                    a vision of impactful change and a dedication to creating a lasting legacy in the field of
                    education.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold capitalize text-xl">Roles and Responsibilities</p>
                  <ul className="list-disc ml-8 space-y-1 text-lg">
                    <li>Provide visionary leadership to align the organization with its mission and goals.</li>
                    <li>
                      Set strategic priorities, ensuring NESA remains at the forefront of educational transformation.
                    </li>
                    <li>
                      Cultivate and maintain strategic partnerships with key stakeholders, fostering collaboration for
                      mutual growth.
                    </li>
                    <li>Drive innovation within the organization, exploring new avenues for growth and impact.</li>
                    <li>
                      Oversee the development and implementation of initiatives that advance education in Nigeria.
                    </li>
                    <li>Nurture a culture of collaboration and empowerment, fostering a high-performance team.</li>
                    <li>Provide guidance and mentorship to key leadership, ensuring a cohesive and motivated team.</li>
                    <li>
                      Act as the public face of NESA, representing the organization at events, conferences, and in media
                      engagements.
                    </li>
                    <li>
                      Advocate for the organization&apos;s mission and vision on national and international platforms.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 text-lg">
                  <p className="font-bold capitalize text-xl">Requirements:</p>
                  <div className="space-y-1 ml-8">
                    <p className="font-bold">Educational Qualification:</p>
                    <p>A master&apos;s degree in a relevant field (education, business, or related disciplines).</p>
                  </div>
                  <div className="space-y-1 ml-8">
                    <p className="font-bold">Leadership Experience:</p>
                    <p>Proven track record of successful executive leadership, preferably in the education sector.</p>
                  </div>
                  <div className="space-y-1 ml-8">
                    <p className="font-bold">Strategic Vision:</p>
                    <p>Demonstrated ability to develop and execute strategic plans that drive organizational growth.</p>
                  </div>
                  <div className="space-y-1 ml-8">
                    <p className="font-bold">Stakeholder Engagement:</p>
                    <p>Strong skills in cultivating and maintaining relationships with diverse stakeholders.</p>
                  </div>
                  <div className="space-y-1 ml-8">
                    <p className="font-bold">Passion for Education:</p>
                    <p>A deep passion for educational Impact and a commitment to NESA&apos;s mission.</p>
                  </div>
                </div>
              </div>

              <div className="md:max-w-4xl mx-auto text-center space-y-6">
                <p className="mx-auto text-lg font-bold">
                  If you are a visionary leader passionate about education, consider joining NESA. As the CEO,
                  you&lsquo;ll play a pivotal role in shaping the future of education in Nigeria. Contact us to explore
                  opportunities for collaboration and impact.
                </p>

                <button className="bg-deepGold rounded-lg px-4 py-2 w-full font-semibold">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
