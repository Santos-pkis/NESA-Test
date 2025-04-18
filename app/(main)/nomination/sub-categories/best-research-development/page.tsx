"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import NominationPage from '@/components/UI/nomination/nominate';

interface Category {
  title: string;
  description: string;
  image: string;
}

const ResearchDevelopmentAwardPage = () => {
  const categories: Category[] = [
    {
      title: "The Overall Best Research and Development Contribution by Research Institutes in Achieving Education for all.",
      description: "This award aims to recognize and honor research institutes in Nigeria that have made significant contributions to the educational sector through innovative research and development (R&D) initiatives. This award celebrates institutes that have demonstrated excellence in conducting impactful research, developing educational technologies, and implementing projects that enhance educational quality and accessibility.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Best Agricultural Research Institute in Nigeria",
      description: "Recognizes research institutes that have made significant contributions to agricultural education and development through innovative research and initiatives.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Best Pharmaceutical And Drug Research Institute in Nigeria",
      description: "Honors research institutes that excel in pharmaceutical and drug research, contributing to advancements in medical education and healthcare advancements.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Best Environmental And Ecological Research Institute in Nigeria",
      description: "Celebrates research institutes that conduct groundbreaking research in environmental and ecological fields, contributing to sustainability education and awareness.",
      image: "/images/nesa-card2.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const handleNominate = (category: Category) => {
    setSelectedCategory(category);
  };

  if (selectedCategory) {
    return <NominationPage category={selectedCategory} />;
  }

  return (
    <div className="min-h-screen bg-[#FFF5E0]">
      {/* Hero Section */}
      <div className="relative bg-[#191307] text-white py-24 px-8">
        <div className="absolute inset-0 bg-[url('/images/Herosection.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl mb-2 md:mt-16 text-center">Category 7</h2>
          <h1 className="text-3xl font-bold text-[#FFC247] mb-4 text-center">{categories[currentIndex].title}</h1>
          <p className="mb-8 text-center">
            {categories[currentIndex].description}
          </p>
        </div>
        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {categories.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#FFC247]' : 'bg-white'}`}></div>
          ))}
        </div>
        {/* Carousel Navigation Arrows */}
        <div className="absolute bottom-4 right-4 flex space-x-4">
          <button onClick={prevSlide} className="p-2 rounded transition bg-[#FFC247]">
            <IoMdArrowBack size={24} color="#191307" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded transition bg-[#FFC247]">
            <IoMdArrowForward size={24} color="#191307" />
          </button>
        </div>
      </div>

      {/* Purpose and Benefits Section */}
      <div className="bg-white w-full">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Purpose
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
            </h2>
            <p className="mb-4">
              To recognize and honor research institutes in Nigerian that demonstrate excellence in providing access to
              information, fostering a culture of reading and research, and supporting academic success. This award celebrates
              institutes that have implemented innovative services, resources, and programs to enhance the educational
              experience of students and staff.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-6 relative inline-block">
              Benefits
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                <div>
                  <strong>Awardees:</strong> Research institutes receive national recognition for their excellence and contributions to education, increased
                  opportunities for funding and resources to support further development, sharing of best practices among institutes
                  to promote innovation and excellence. Positive publicity and enhanced reputation for the winning institutes,
                  opportunities for staff professional development and training.
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                <div>
                  <strong>Nigeria and Africa:</strong> Encourages institutes to prioritize innovation and excellence, leading to improved educational
                  resources and services, it empowers students and staff through better access to information and support
                  services, inspires other institutes to adopt successful initiatives and best practices, supports the achievement of the
                  Sustainable Development Goals (SDGs) by enhancing quality education and promoting lifelong learning
                  opportunities.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Categories Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          The Best Research and Development Contribution Award Sub-Categories
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(1).map((category, index) => (
            <div key={index} className="bg-[#191307] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col p-6 w-full h-full">
              <div className="flex items-center justify-center mb-4 h-52">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                </div>
                <button
                  onClick={() => handleNominate(category)}
                  className="w-full bg-[#FFC247] text-black py-2 rounded hover:bg-[#FFD277] transition mt-auto"
                >
                  Nominate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopmentAwardPage;