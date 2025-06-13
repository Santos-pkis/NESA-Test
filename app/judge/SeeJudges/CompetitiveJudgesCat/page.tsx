import React from 'react';
import JudgeCard from '@/components/UI/judgenomination/JudgeCategory';
import Image from "next/image";
import Link from "next/link";

const judges = [
  {
    id: 1,
    name: 'Best Media Organization in Educational Advocacy (Nigeria)',
    url: ''
  },
  {
    id: 1,
    name: 'Best Corporate Social Responsibility (CSR) in Education (Africa - Regional)',
    url: ''
  },
  {
    id: 1,
    name: 'Best NGO Contribution to Achieving Education for All (Africa - Regional)',
    url: ''
  },
  {
    id: 1,
    name: 'Creative Arts Industry Contribution to Education (Nigeria)',
    url: ''
  },
  {
    id: 1,
    name: 'Best EduTech Organization (Africa)',
    url: ''
  },
  {
    id: 1,
    name: 'Best NGO Contribution to Education (Nigeria)',
    url: ''
  },
  {
    id: 1,
    name: 'Best CSR in Education (Nigeria)',
    url: ''
  },
  {
    id: 1,
    name: 'African education CSR Awards (Banking, Telecom, Healthcare, Media, etc.)',
    url: ''
  },
 

];
const JudgesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-10 md:mt-20 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">See Judges in Categories of the Competitive Categories</h1>
        <div className="w-32 h-1 mb-8" style={{background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'}}></div>


      </div>


      

        <div className="relative container mx-auto px-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            style={{
              justifyItems: 'center',
            }}
          >
            {judges.map((judges, id) => (
              <div
                key={id}
                className="w-full h-[460px] sm:h-[500px] md:h-[540px] bg-[#191307] text-white rounded-2xl overflow-hidden flex flex-col"
              >
  <Link href="/judge/SeeJudges/NonCompetitiveCat" className="flex-1">
    <div className="bg-[#191307] text-white rounded-2xl p-10 relative md:pb-10 lg:pb-28 w-full h-full">
      {/* Dots */}
      <div className="absolute top-5 right-4 flex flex-col gap-[5px]">
        <div className="w-[6px] h-6 bg-white rounded-full"></div>
        <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
        <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
        <div className="w-[6px] h-[6px] bg-[#FFFFFF99] rounded-full"></div>
      </div>
      <h3 className="text-white md:text-xl text-[16px] font-medium mb-4">
        {judges.name}
      </h3>
      <div className="w-full flex justify-center">
        <Image
          src="/images/nesa-mg.png"
          alt="Competitive"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  </Link>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
};

export default JudgesPage;