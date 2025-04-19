"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";

const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/member"); // Redirect to member dashboard after onboarding
    }
  };

  const handleSkip = () => {
    router.push("/member"); // Skip directly to dashboard
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
      {/* Left Side - Consistent with Registration Page */}
      <div className="w-full md:w-1/3 relative overflow-hidden hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/images/Hero section.png"
            alt="Background"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
          <div>
            <Image
              src="/images/NESA logo_UPDATED 1.png"
              alt="NEW EDUCATION STANDARD AWARDS AFRICA"
              width={150}
              height={75}
              className="mb-4"
            />
          </div>
          <div className="flex justify-center items-center flex-grow">
            <Image
              src="/images/NESA Logo 2.png"
              alt="NESA Badge"
              width={250}
              height={250}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Onboarding Content */}
      <div className="w-full md:w-2/3 p-6 md:p-12 bg-white">
        <div className="max-w-2xl mx-auto h-full flex flex-col">
          {/* Skip Button (Top Right) */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleSkip}
              className="text-[#FFC247] hover:text-[#E48900] flex items-center"
            >
              Skip <FiX className="ml-1" />
            </button>
          </div>

          {/* Onboarding Content */}
          <div className="flex-grow flex flex-col justify-center">
            {currentStep === 1 && (
              <div className="text-center">
                <div className="mb-8 mx-auto w-64 h-64 relative">
                  <Image
                    src="/images/voting-concept.png" // Replace with your actual image
                    alt="Nominate and Vote"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-[#333]">
                  Nominate and Vote for Excellence
                </h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Discover outstanding candidates across various categories and cast your votes to recognize excellence in education.
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="text-center">
                <div className="mb-8 mx-auto w-64 h-64 relative">
                  <Image
                    src="/images/categories-concept.png" // Replace with your actual image
                    alt="Multiple Categories"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-[#333]">
                  Explore Diverse Categories
                </h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  From innovative educators to outstanding institutions, find categories that matter to you and participate in shaping the future.
                </p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center">
                <div className="mb-8 mx-auto w-64 h-64 relative">
                  <Image
                    src="/images/impact-concept.png" // Replace with your actual image
                    alt="Make an Impact"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-[#333]">
                  Your Voice Makes a Difference
                </h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Every vote counts! Help recognize and reward the best in education by participating in our transparent voting process.
                </p>
              </div>
            )}

            {/* Progress Indicators */}
            <div className="flex justify-center mb-8">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full mx-1 ${currentStep === step ? 'bg-[#FFC247]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg ${currentStep === 1 ? 'invisible' : 'text-[#FFC247] hover:text-[#E48900]'}`}
            >
              <FiArrowLeft className="mr-2" /> Back
            </button>

            <button
              onClick={handleNext}
              className="bg-[#FFC247] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#E48900] transition-colors duration-300 flex items-center"
            >
              {currentStep === 3 ? "Get Started" : "Next"} <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;