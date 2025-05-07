import { ChevronRight } from "lucide-react";
import Image from "next/image";
const data = [
  {
    range: "May 1, 2025-",
    endRange: "End of May 2025",
    title: "Nomination Launch & Awareness Phase",
    list: [
      "Launch of the nomination process on the NNESA digital platform. Inviting entries from eligible participants across various categories",
      "Continuous collection of nominations, allowing participants to submit their applications along with supporting documents and evidence of work.",
    ],
  },
  {
    range: "June – July",
    endRange: "2025",
    title: "Nomination Review & Pre-Voting Preparation",
    list: [
      "Judges & verification teams review submitted nominations.",
      "Verification of nominees' supporting documents & video documentaries.",
      "Judges evaluate & shortlist the top nominees for public voting.",
    ],
  },
  {
    range: "August 2025",
    endRange: "",
    title: "Pre-Voting Publicity & Event Ticket Sales",
    list: [
      "Feature top nominees in digital ads & interviews.",
      "Behind-the-scenes nominee documentaries on NESA TV & partner networks.",
    ],
  },
  {
    range: "September –",
    endRange: "October 2025",
    title: "Voting, Africa Education Expo & Grand Awards Ceremony",
    list: [
      "Public Voting Opens (August 1, 2025)",
      "NESA Africa Education Expo (October 15, 2025)",
      "Grand Awards & Fundraising Dinner (October 16-17, 2025)",
      "A panel of judges reviews the submissions to determine the recipients of the Platinum Awards in each cate",
    ],
  },
];

const Timeline = () => {
  return (
    <section className="relative text-white py-16 ">
            <Image
        src={"/images/datebg.png"}
        alt="dark background"
        className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
        width={1440}
        height={1580}
      />
      <div className="container mx-auto px-4 py-16">
        <h3 className="relative inline-block font-medium text-2xl pb-2 mb-12">
          NESA Nigera 2025 Award Timelines
          <span className="absolute bottom-0 left-0 w-40 h-1 bg-yellow-500"></span>
        </h3>
        
        <div className="space-y-16">
          {data.map((item, id) => (
            <div key={id} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/6 text-xl font-medium">
                <p>{item.range}</p>
                <p>{item.endRange}</p>
              </div>
              
              <div className="flex-grow md:w-5/6 border-l-4 border-yellow-500  pl-8 space-y-4">
                <h4 className="text-xl md:text-2xl font-medium">{item.title}</h4>
                
                <ul className="list-disc pl-6 space-y-2 text-white/90">
                  {item.list.map((list, idx) => (
                    <li key={idx}>{list}</li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-2 text-yellow-500">
                  <span>Read more</span>
                  <ChevronRight className="w-5 h-5" />
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
// // Compare this snippet from components/UI/Home/get-involved.tsx:"use client";
// import React from "react";
// import Image from "next/image";
// const timeline = [
//   {
//     date: "April 1, 2025 – End of April 2025",
//     title: "Nomination Launch & Awareness Phase",
//     points: [
//       "Launch of the nomination process on the NESA digital platform. Inviting entries from eligible participants across various categories",
//       "Continuous collection of nominations, allowing participants to submit their applications along with supporting documents and evidence of work.",
//     ],
//   },
//   {
//     date: "May – June 2025",
//     title: "Nomination Review & Pre-Voting Preparation",
//     points: [
//       "Judges & verification teams review submitted nominations.",
//       "Verification of nominees' supporting documents & video documentaries.",
//       "Judges evaluate & shortlist the top nominees for public voting.",
//     ],
//   },
//   {
//     date: "July 2025",
//     title: "Pre-Voting Publicity & Event Ticket Sales",
//     points: [
//       "Feature top nominees in digital ads & interviews.",
//       "Behind-the-scenes nominee documentaries on NESA TV & partner networks.",
//     ],
//   },
//   {
//     date: "August – October 2025",
//     title: "Voting, Africa Education Expo & Grand Awards Ceremony",
//     points: [
//       "Public Voting Opens (August 1, 2025)",
//       "NESA Africa Education Expo (October 15, 2025)",
//       "Grand Awards & Fundraising Dinner (October 16-17, 2025)",
//       "A panel of judges reviews the submissions to determine the recipients of the Platinum Awards in each category.",
//     ],
//   },
// ];

// const Timeline = () => {
//   return (
//     <div className="bg-[#0c0c0c] text-white py-16 px-6 md:px-20 relative overflow-hidden">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-12">NESA Nigeria 2025 Award Timelines</h2>
//       <Image
//         src={"/images/bg/datebg.png"}
//         alt="dark background"
//         className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
//         width={1440}
//         height={1580}
//       />
//       <div className="space-y-16">
//         {timeline.map((item, index) => (
//           <div key={index} className="flex flex-col md:flex-row gap-8">
//             {/* Date Column */}
//             <div className="w-full md:w-1/3 text-gold font-medium text-lg">{item.date}</div>

//             {/* Details Column */}
//             <div className="w-full md:w-2/3 space-y-4">
//               <h3 className="text-white text-xl font-semibold">{item.title}</h3>
//               <ul className="list-disc list-inside space-y-2 text-[#cfcfcf]">
//                 {item.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>

//               {/* Read More */}
//               <button className="flex items-center text-gold font-medium hover:underline">
//                 Read more
//                 <span className="ml-2">→</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;
