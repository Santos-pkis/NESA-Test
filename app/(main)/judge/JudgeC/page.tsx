import React from 'react';
import JudgeCard from '@/components/UI/judgenomination/JudgeCategory';

const judges = [
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
  {
    id: 1,
    name: "Mr Joseph Johnson",
    organization: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.",
    imageUrl: "/images/judgereview.png"
  },
];
const JudgesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Judges in your Category</h1>
        <div className="w-32 h-1 mb-8" style={{background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'}}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {judges.slice(0, 6).map((judge) => (
            <JudgeCard key={judge.id} judge={judge} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-2">Meet all the judges for Nesa Africa Awards</h2>
        <div className="w-32 h-1 mb-8" style={{background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'}}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {judges.map((judge) => (
            <JudgeCard key={judge.id} judge={judge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgesPage;