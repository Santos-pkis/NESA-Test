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

const SpecialRecognitionPage = () => {
  const subcategories: Category[] = [
    {
      title: "NGO contribution to the Special recognitions for contributions towards achieving SDG 4 - Quality Education in Nigeria",
      description: "The Africa Lifetime Education Icon Special Recognition Award is the pinnacle of the NESA-Africa awards and the Santos Creations Educational Foundation. Envisioned as the Africa education advocacy Nobel award recognition, this prestigious accolade honors individuals from around the world who have dedicated their lives to advancing sustainable education for all in Africa, aligning with the United Nations Sustainable Development Goal 4 (SDG 4) - Quality Education.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Africa Education Philanthropy Icon Of The Decade (2014-2024)",
      description: "Honors significant philanthropic contributions that have improved educational access and quality, advancing SDG 4's targets.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Literary And New Curriculum Advocate Africa Education Icon Of The Decade (2014-2024)",
      description: "Recognizes influential literary works and new curricula that address critical educational needs and challenges, fostering quality education.",
      image: "/images/nesa-card2.png"
    },
    {
      title: "Africa Technical Educator Icon Of The Decade (2014-2024)",
      description: "Celebrates pioneers in technical education and skills training, fostering entrepreneurship and innovation, supporting SDG 4's goals of inclusive and equitable education.",
      image: "/images/nesa-card2.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % subcategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + subcategories.length) % subcategories.length);
  };

  const handleNominate = (category: Category) => {
    setSelectedCategory(category);
  };

  if (selectedCategory) {
    return <NominationPage category={selectedCategory}   />;
  }

  return (
    <div className="min-h-screen bg-[#FFF5E0]">
      {/* Hero Section */}
      <div className="relative bg-[#191307] text-white py-24 px-8">
        <div className="absolute inset-0 bg-[url('/images/Herosection.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl mb-2 md:mt-16 text-center">Africa Icon</h2>
          <h1 className="text-3xl font-bold text-[#FFC247] mb-4 text-center">{subcategories[currentIndex].title}</h1>
          <p className="mb-8 text-center">
            {subcategories[currentIndex].description}
          </p>
        </div>
        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {subcategories.map((_, index) => (
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
              This award recognizes outstanding educators, philanthropists, advocates, and
              innovators whose work has transformed education systems and inspired generations.
              By highlighting these icons, we aim to promote the importance of education, in line
              with SDG 4's mission to ensure inclusive and equitable quality education and promote
              lifelong learning opportunities for all.
            </p>
          </div>

          <div>
            <h2 className="text-3xl  mb-6 relative inline-block">
              Benefits
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                <div>
                  <strong>Awardees:</strong> Gain national and international recognition, increased opportunities for collaboration, and
                  validation for their contributions to education. Winners will be inducted as Fellows of the Santos Creations
                  Educational Foundation (SCEF).
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                <div>
                  <strong>SCEF Fellows Role:</strong> Inducted Fellows will have the opportunity to mentor upcoming educators, contribute to
                  strategic planning for educational initiatives, and participate in high-level discussions and policy
                  advocacy efforts aimed at advancing education in Africa.
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gradient-to-r from-[#FFC247] to-[#E48900] border border-dotted border-[#FFC247]"></span>
                <div>
                  <strong>Africa:</strong> Showcases the richness of African culture and the innovative use of education, fostering a deeper
                  appreciation and understanding of the role of education in societal development.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Categories Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          The Special Recognition Award Sub-Categories
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#FFC247] to-[#E48900]"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.slice(1).map((category, index) => (
            <div key={index} className="bg-[#191307] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col p-6">
              <div className="h-[220px] flex items-center justify-center mb-4">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={364}
                    height={198}
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

export default SpecialRecognitionPage;