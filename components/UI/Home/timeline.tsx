import { ChevronRight } from "lucide-react";
import Image from "next/image";

const data: {
  range: string;
  year: string;
  title: string;
  list: string[];
}[] = [
  {
    range: "July - August",
    year: "2024",
    title: "Nominate Your Education Champion",
    list: [
      "Launch of the nomination process on the NNESA digital platform. Inviting entries from eligible participants across various categories",
      "Continuous collection of nominations, allowing participants to submit their applications along with supporting documents and evidence of work.",
    ],
  },
  {
    range: "August",
    year: "2024",
    title: "Nomination closes & Internal Screening Proceeds",
    list: [
      "Closure of the nomination process followed by initial screening to ensure compliance with the criteria and requirements",
    ],
  },
  {
    range: "September",
    year: "2024",
    title: "Public Voting Proceeds & Judging Period",
    list: [
      "Shortlisted nominees will be requested to upload detailed presentations or portfolios on the NNESA digital platform for pre- screening by the judges",
      "A panel of judges reviews the submissions to determine the recipients of the Platinum Awards in each cate",
    ],
  },
  {
    range: "Oct - Nov",
    year: "2024",
    title: "The Award Ceremony and Winner Announcements",
    list: [
      "Final preparations for the awards ceremony, including logistics, guest management, and media arrangements.",
      "Hosting the grand awards ceremony, announcing the winners, and celebrating their achievement on Oct 16, 2024",
    ],
  },
];

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

      <div className="container py-[4rem] space-y-8">
        <h3 className="_under_border font-semibold text-xl md:text-2xl hidden md:block">
          NESA Africa 2024 Award Timelines
        </h3>

        <div className="space-y-8">
          {data.map((item, id) => (
            <div key={id} className="grid grid-cols-7 items-center">
              <div className="flex-shrink-0 col-span-1 text-2xl font-medium">
                <p>{item.range}</p>
                <p>{item.year}</p>
              </div>

              <div className="col-span-6 border-l-4 pl-4 border-primaryGold space-y-3">
                <h4 className="text-2xl font-medium">{item.title}</h4>

                <ul className="list-disc pl-6 space-y-2 text-white/90">
                  {item.list.map((list, id) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-primaryGold">
                  <span>Read More</span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
