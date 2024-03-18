import Image from "next/image";

const Timeline = () => {
  return (
    <section className="relative text-white py-16">
      <Image
        src={"/images/bg/timeline.png"}
        alt="dark background"
        className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
        width={1440}
        height={1580}
      />

      <div className="container py-[4rem]">
        <h3 className="_under_border font-bold text-lg hidden md:block">NESA NIGERIA 2023 AWARD TIMELINES</h3>

        <div className="space-y-2">
          <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-[15rem] gap-4">
            <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
              <h4 className="font-bold text-3xl">
                Nominate Your Education Champion <span className="md:hidden text-deepGold">--- 1st September 2024</span>
              </h4>
              <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                <li>
                  Click the “NOMINATE NOW” button to access the nomination page where you have access to then select the
                  Award Category . Then nominate your Education Champion in each sub-category
                </li>
                <li>
                  Nomination Starts on the <span className="font-bold text-deepGold">1st September 2024</span>
                </li>
                <li>The Same organization or candidate can be nominated under various award category</li>
                <li>
                  Confirmation of submission: Once you nominate under any category, you would proceed to the Thank you
                  page from where you can invite others to nominate or simply navigate back to exploring other awards
                  category
                </li>
                <li>You can also decide to nominate yourself or your organization as-well</li>
              </ul>
            </div>

            <div className="flex-shrink-0 md:text-end text-start space-y-1 hidden md:block">
              <p className="font-extrabold text-2xl">1st</p>
              <p className="font-semibold text-2xl">Sep 2024</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-[15rem] gap-4">
            <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
              <h4 className="font-bold text-3xl">
                Nomination closes & Internal Screening Proceeds{" "}
                <span className="md:hidden text-deepGold">--- 15th September 2024</span>
              </h4>
              <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                <li>
                  Nomination process closes <span className="text-deepGold font-bold">15th of September 2024</span>{" "}
                  followed by internal screening to ensure compliance with the criteria and requirements
                </li>
                <li>
                  Shortlisted Nominees would be reached out to and requested to upload detailed educational impact
                  portfolios or presentation so the judges can review them.
                </li>
                <li>Public Announcement of the Candidates shortlisted to each Category Awards.</li>
              </ul>
            </div>

            <div className="flex-shrink-0 md:text-end text-start space-y-1 hidden md:block">
              <p className="font-extrabold text-2xl">15th Sep</p>
              <p className="font-semibold text-2xl">2024</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-[15rem] gap-4">
            <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
              <h4 className="font-bold text-3xl">
                Public Voting Proceeds <span className="md:hidden text-deepGold">--- 1st October 2024</span>
              </h4>
              <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                <li>
                  General Public Voting for the Shortlisted candidate proceeds. Note that Public Votes contributes only
                  50% to he final results of each category. The Voting Portal would be open on{" "}
                  <span className="font-bold text-deepGold">1st October 2024</span> so the public can their votes and
                  Voting Ends <span className="font-bold text-deepGold">7th October 2024</span>
                </li>
                <li>
                  Once Public Votes is concluded, the panel of Judges would also cast their votes contributing the
                  remaining 50% to determine Final Winners of each category.
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 md:text-end text-start space-y-1 hidden md:block">
              <p className="font-extrabold text-2xl">1st - 7th</p>
              <p className="font-semibold text-2xl">Oct 2024</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-[15rem] gap-4">
            <div className="mt-6 space-y-3 border-b-[3px] border-white/70 pb-10">
              <h4 className="font-bold text-3xl">
                The Award Ceremony and Winner Announcements{" "}
                <span className="md:hidden text-deepGold">--- 16th October 2024</span>
              </h4>
              <ul className="list-disc ml-6 space-y-4 text-[#f3f3f3]">
                <li>
                  The winners will be announced, and their extraordinary contributions will be celebrated in style at
                  the New Standard Education Award Dinner Ceremony
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 md:text-end text-start space-y-1 hidden md:block">
              <p className="font-extrabold text-2xl">16th</p>
              <p className="font-semibold text-2xl">Oct 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
