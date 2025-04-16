// JudgeApplication.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JudgeApplication = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
              <Image
                src="/images/judgeapply.png"
                alt="judge application"
                layout="fill"
                objectFit="cover"
                /> 
      <div className="bg-black bg-opacity-70 absolute inset-0 z-0"></div>
      
      <div className="z-10 text-white max-w-3xl w-full px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Interested in Applying or Nominating a Judge?
          <span className="block w-16 h-1 bg-yellow-400 mt-2"></span>
        </h1>
        
        <p className="text-lg md:text-xl mb-6">
          Click the applicable link below or email Your CV & Interest Letter to judges@nesa.africa
        </p>
        
        <p className="text-lg md:text-xl mb-8">
          Application Deadline: [Insert Deadline]
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/apply" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md text-center w-full md:w-auto">
            Apply To Judge
          </Link>
          
          <Link href="/nominate" className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-6 rounded-md text-center w-full md:w-auto">
            Nominate A Judge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JudgeApplication;