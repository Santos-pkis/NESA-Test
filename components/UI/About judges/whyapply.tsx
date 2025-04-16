import React from 'react';
import { Award, Users, Crown, TrendingUp } from 'lucide-react';

export default function JudgeBenefitsSection() {
  const benefits = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Earn Recognition",
      description: "Gain the prestigious NESA Africa Ambassador status and stand out as a leader across Africa."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Elite Networking",
      description: "Connect with Africa's top education, business, and policy leaders to build meaningful relationships."
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Exclusive Access",
      description: "Enjoy VIP access and privileges at the EduAid Africa Expo, awards ceremony, and fundraising gala."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Drive Impact",
      description: "Play a key role in honoring and supporting Africa's education change-makers."
    }
  ];

  const targetProfiles = [
    {
      title: "Education Experts",
      description: "Professors, lecturers, policymakers, school administrators."
    },
    {
      title: "Corporate & NGO Leaders",
      description: "CSR managers, foundation heads, and nonprofit executives."
    },
    {
      title: "Innovators & Entrepreneurs",
      description: "EdTech founders, industry disruptors, and researchers."
    },
    {
      title: "Government Officials",
      description: "Representatives from education ministries and policy institutions."
    },
    {
      title: "Media & Journalism Professionals",
      description: "Education journalists, publishers, and content creators."
    },
    {
      title: "International Development Experts",
      description: "Representatives from UN, UNESCO, World Bank, and global education organizations."
    },
    {
      title: "Corporate Sponsors & Representatives",
      description: "Companies supporting education can nominate executives to serve as judges."
    }
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Apply or Nominate a Judge?</h2>
      
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-amber-300 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="text-black mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-gray-800">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      {/* Who We Are Looking For Section */}
      <div>
        <h2 className="text-2xl _under_border font-bold mb-6 flex items-center">
          Who We Are Looking For
        </h2>
        
        <ul className="space-y-4">
          {targetProfiles.map((profile, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-500 font-bold mr-2 mt-1">•</span>
              <div>
                <span className="font-bold">{profile.title}</span>
                <span> – {profile.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}