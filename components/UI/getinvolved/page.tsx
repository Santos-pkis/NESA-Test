import React from 'react';
import Image from 'next/image';

const NESACommunityPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gray-800 text-white mt-16 sm:mt-20 md:mt-0">
        <Image
          src="/images/nominatehero.jpeg"
          alt="NESA 2023 Community"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 pt-16 sm:pt-20 md:pt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Join the NESA 2023 Community!</h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl">
            Explore Opportunities to Make a Difference. Join NESA Africa, facilitated by Santos
            Creations Educational Foundation, and become part of a transformative educational
            community!
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
        
        <div className="space-y-12">
          {/* BECOME A SPONSOR */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/involved1.png"
                alt="Become a Sponsor"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">BECOME A SPONSOR</h3>
              <p className="mb-4">
                Support the NESA Africa 2024 Awards by becoming a Sponsor. Our sponsorship packages offer valuable
                benefits and exposure at one of the most prestigious educational award ceremonies in Africa.
              </p>
              <p className="mb-4">
                Gain premier visibility as the title sponsor, with your branding featured prominently across all event
                communications, two premium tables at the dinner, and special recognition during the ceremony.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">Become a Sponsor &gt;</a>
            </div>
          </div>

          {/* JOIN US BY BECOMING VOLUNTEER */}
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/involved2.png"
                alt="Join Us by Becoming Volunteer"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">JOIN US BY BECOMING VOLUNTEER</h3>
              <p className="mb-4">
                Volunteering with us offers a unique opportunity to give back, develop new skills, and work on projects
                that have a real impact.
              </p>
              <p className="mb-4">
                Our volunteers are a testament to the power of community engagement in driving educational initiatives.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">Volunteer with us &gt;</a>
            </div>
          </div>

          {/* JOIN US BY BECOMING A MEMBER */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/involved3.png"
                alt="Join Us by Becoming a Member"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">JOIN US BY BECOMING A MEMBER</h3>
              <p className="mb-4">
                Membership with NESA Africa, powered by Santos Creations Educational Foundation, connects you to a
                network dedicated to enhancing education across the continent. As a member,
              </p>
              <p className="mb-4">
                You'll access exclusive events, thought leadership articles, and the ability to contribute to policy
                discussions that shape the future of education in Africa.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">Become a member &gt;</a>
            </div>
          </div>

          {/* INTERN WITH US */}
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/involved4.png"
                alt="Intern with Us"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">INTERN WITH US</h3>
              <p className="mb-4">
                Our internships provide real-world experience in educational program management, event
                coordination, and research. Interns
              </p>
              <p className="mb-4">
                at NESA Africa will not only contribute to our mission but also develop professional skills that will serve
                them in their future careers.
              </p>
              <a href="#" className="text-yellow-500 hover:underline">Get Internship Opportunities &gt;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NESACommunityPage;