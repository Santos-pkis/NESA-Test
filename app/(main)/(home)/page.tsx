import Image from "next/image";
import styles from "@/components/UI/Home/style.module.scss";
import Category, { Partners } from "@/components/UI/Home/category";
import HomeFaq from "@/components/UI/Home/faq";
import HeroCenter from "@/components/UI/Home/hero-center";
import { primaryBtn } from "@/lib/helpers";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[43rem] bg-zinc-200 text-white relative ${styles.homeHeader}`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/home_back.png"}
              alt="hero image"
              width={1024}
              height={650}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 left-0 h-full w-full text-center">
            <HeroCenter />
          </div>
        </div>
      </header>
      <main className="space-y-28 pb-8">
        <Category />

        <section className="py-[10rem] my-[5rem] text-white relative">
          <Image
            src={"/images/bg/back_.jpeg"}
            alt="dark background"
            className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
            width={1024}
            height={600}
          />
          <div className="space-y-8 container">
            <p className="text-white text-center text-2xl">Meet our Key Partners Powering Education Together</p>

            <div>
              <div className={"relative whitespace-nowrap container overflow-hidden border-x-2"}>
                <Partners />
                <Partners />
                <Partners />
              </div>
            </div>

            <div className="grid place-content-center">
              <button className={primaryBtn}>Partner with us</button>
            </div>
          </div>
        </section>

        <section className="relative">
          <Image
            src={"/images/logos/big_logo.png"}
            alt="logo"
            width={800}
            height={800}
            className="absolute -bottom-16 left-0 -z-[1] opacity-40"
          />

          <div className="container grid grid-cols-2 gap-16 items-center">
            <div className="grid place-content-center">
              <Image src={"/images/bg/education.png"} alt="dark background" width={600} height={600} />
            </div>
            <div className="space-y-6">
              <h3 className="_under_border font-bold text-darkGold">ABOUT NEW EDUCATION STANDARD AWARDS:</h3>
              <p className="font-bold text-5xl">Championing Education Excellence Since 2013...</p>

              <div className="space-y-6">
                <p>
                  NESA&apos;s is a Santo&apos;s initiative born in 2013 with a singular mission: to elevate education in
                  Nigeria. Our vision extends far beyond the realm of recognition. While acknowledging and celebrating
                  excellence is a crucial aspect, our ultimate goal is to contribute to the creation of a transformative
                  educational landscape.{" "}
                </p>

                <p>
                  We envision a Nigeria where education becomes a force of empowerment, a cornerstone for societal
                  progress and individual growth.
                </p>

                <button className={primaryBtn}>Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative text-white">
          <Image
            src={"/images/bg/timeline.png"}
            alt="dark background"
            className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
            width={1024}
            height={1024}
          />

          <div className="container py-[4rem]">
            <h3 className="_under_border font-bold text-lg">NESA NIGERIA 2023 AWARD TIMELINES</h3>

            <div className="space-y-2">
              <div className="flex items-center gap-[15rem]">
                <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
                  <h4 className="font-bold text-3xl">Nominate Your Education Champion</h4>
                  <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                    <li>
                      Click the “NOMINATE NOW” button to access the nomination page where you have access to then select
                      the Award Category . Then nominate your Education Champion in each sub-category
                    </li>
                    <li>
                      Nomination Starts on the <span className="font-bold text-deepGold">15th March 2024</span>
                    </li>
                    <li>The Same organisation or candidate can be nominated under various award category</li>
                    <li>
                      Confirmation of submission: Once you nominate under any category, you would proceed to the Thank
                      you page from where you can invite others to nominate or simply navigate back to exploring other
                      awards category
                    </li>
                    <li>You can also decide to nominate yourself or your organisation as-well</li>
                  </ul>
                </div>

                <div className="flex-shrink-0 text-end space-y-1">
                  <p className="font-extrabold text-xl">15th</p>
                  <p className="font-semibold">January 2024</p>
                  <button className="bg-[#e0aa3e] px-4 text-sm font-semibold py-2 rounded-md text-black">
                    Click to Nominate Now
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-[15rem]">
                <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
                  <h4 className="font-bold text-3xl">Nomination closes & Internal Screening Proceeds</h4>
                  <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                    <li>
                      Nomination process ends followed by internal screening to ensure compliance with the criteria and
                      requirements
                    </li>
                    <li>
                      Shortlisted Nominees would be reached out to and requested to upload detailed educational impact
                      portfolios or presentation so the judges can review them.
                    </li>
                    <li>Public Announcement of the Candidates shortlisted to each Category Awards.</li>
                  </ul>
                </div>

                <div className="flex-shrink-0 text-end space-y-1">
                  <p className="font-extrabold text-xl">Feb - March</p>
                  <p className="font-semibold">2024</p>
                </div>
              </div>
              <div className="flex items-center gap-[15rem]">
                <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
                  <h4 className="font-bold text-3xl">Public Voting Proceeds</h4>
                  <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                    <li>
                      General Public Voting for the Shortlisted candidate proceeds. Note that Public Votes contributes
                      only 50% to he final results of each category. The Voting Portal would be open on 15th April 2024
                      so the public can their votes and Voting Ends{" "}
                      <span className="font-bold text-deepGold">26th April 2024</span>
                    </li>
                    <li>
                      Once Public Votes is concluded, the panel of Judges would also cast their votes contributing the
                      remaining 50% to determine Final Winners of each category.
                    </li>
                  </ul>
                </div>

                <div className="flex-shrink-0 text-end space-y-1">
                  <p className="font-extrabold text-xl">Feb - March</p>
                  <p className="font-semibold">2024</p>
                </div>
              </div>
              <div className="flex items-center gap-[15rem]">
                <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
                  <h4 className="font-bold text-3xl">The Award Cermony and Winner Announcements</h4>
                  <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                    <li>
                      The winners will be announced, and their extraordinary contributions will be celebrated in style
                      at the New Standard Education Award Dinner Ceremony
                    </li>
                  </ul>
                </div>

                <div className="flex-shrink-0 text-end space-y-1">
                  <p className="font-extrabold text-xl">5th</p>
                  <p className="font-semibold">May 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="space-y-3 max-w-4xl">
              <h3 className="font-bold text-2xl">Frequently Asked Questions</h3>
              <p className="text-[#757575]">
                Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat
                amet, lectus aliquam est in neque.
              </p>
              <button className="px-5 py-3 rounded-md from-midGold to-deepGold bg-gradient-to-r to-d text-black font-semibold text-sm">
                Visit FAQs
              </button>
            </div>

            <HomeFaq />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
