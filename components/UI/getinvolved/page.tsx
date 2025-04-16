import React from 'react';
import Image from 'next/image';
import Button from "@/components/Common/Button";
import { ArrowRight } from 'lucide-react';
import SponsorshipPackages from '@/components/UI/getinvolved/sponsorship';
import NesaAmbassador from '@/components/UI/getinvolved/ambassador';
import DonateNow from '@/components/UI/getinvolved/donate';
import VolunteerWithUs from '@/components/UI/getinvolved/volunteer';

const NESACommunityPage = () => {

  const benefits = [
    "Brand Visibility Across Africa",
    "Recognition in All NESA Communications",
    "Prime Placement on NESA TV & Digital Billboards",
    "Complimentary Tickets to Award Ceremony & Gala Dinner",
    "Exclusive Networking Opportunities"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gray-800 text-white mt-12 sm:mt-20 md:mt-0">
        <Image
          src="/images/getinvolved1.png"
          alt="NESA 2023 Community"
          layout="fill"
          objectFit="cover"
          />
        {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Be a part of NESA Africa 2025 and help drive transformative change in education across the continent.
          </h1>
          
          <p className="text-white text-lg md:text-xl mb-10">
            Contribute to advocating for the Excellence of Education in Africa with NESA Africa
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black font-medium py-3 px-6 border border-yellow-500 hover:border-transparent rounded-md transition duration-300">
              Become an Ambassador
            </button>
            
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-md transition duration-300">
              Become a Sponsor
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <div className="bg-amber-50 p-6 md:p-12 md:ml-4 lg:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden h-full">
            <img 
              src="/images/involvedshake.png" 
              alt="Business handshake representing sponsorship" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Become a Sponsor</h2>
          
          <p className="text-gray-700 mb-8">
            Becoming a sponsor of NESA Africa 2025 means positioning your brand at the forefront of 
            Africa's educational transformation. Our sponsorship opportunities provide a unique 
            platform for corporate and individual partners to gain premium visibility while making a 
            tangible impact on education across the continent. Sponsors play a crucial role in 
            funding scholarships, infrastructure, and mentorship programs that directly benefit 
            students, educators, and institutions. Your support ensures that Africa's education 
            champions receive the recognition they deserve while reinforcing your organization's 
            commitment to Corporate Social Responsibility (CSR) and sustainable development. By 
            sponsoring NESA Africa, you align with a movement that is driving innovation, 
            empowerment, and excellence in education.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of being a NESA Sponsor</h3>
          
          <ul className="mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start mb-3">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a 
            href="#" 
            className="inline-flex items-center text-amber-500 font-semibold text-lg hover:text-amber-600 transition-colors"
          >
            Apply to Sponsor
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
    <SponsorshipPackages />
    <NesaAmbassador />
    <DonateNow />
    <VolunteerWithUs />
    </div>

  );
};

export default NESACommunityPage;