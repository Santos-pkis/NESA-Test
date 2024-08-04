"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NomineeProps {
  id: number;
  name: string;
  title: string;
  achievements: string;
}

interface ReviewCardProps {
  nominee: NomineeProps;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ nominee }) => {
  const router = useRouter();

  const handleReview = () => {
    router.push(`/review/${nominee.id}`);
  };

  return (
    <div className="w-full max-w-[412.33px] h-auto min-h-[512px] bg-[#191307] rounded-lg p-4 flex flex-col mx-auto">
      <div className="mb-4">
        <Image
          src="/images/judgereview.png"
          alt={nominee.name}
          width={364.33}
          height={200}
          className="rounded-lg mx-auto w-full h-auto"
        />
      </div>
      <h2 className="text-white text-xl font-bold">{nominee.name}</h2>
      <p className="text-gray-300 text-sm mb-2">{nominee.title}</p>
      <p className="text-white text-sm mb-2">Achievements:</p>
      <p className="text-gray-300 text-sm mb-auto">{nominee.achievements}</p>
      <button
        onClick={handleReview}
        className="mt-4 bg-[#FFA500] text-black py-2 px-4 rounded-lg w-full hover:bg-[#FFB52E] transition-colors cursor-pointer"
      >
        Review
      </button>
    </div>
  );
};

export default ReviewCard;