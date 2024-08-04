"use client";
import React, { useState } from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Eye, EyeOff, Mail, Phone } from 'lucide-react';
import { MdLocationPin } from "react-icons/md";
import Image from 'next/image';
import VerifyEmailPopup from './VerifyEmailPopup';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="w-full md:w-2/5 relative overflow-hidden bg-black">
        {/* Background Image using Image tag */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero section.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className=""
          />
        </div>

        {/* Content above the background image */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
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
          <div className="text-sm">
            <p className="mb-2 flex items-center">
              <MdLocationPin className="mr-2" /> 54, Falolu Street, Surulere,
              Lagos
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2" /> +234-907-962-1110
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2" /> +234-810-976-5897
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" /> nesa.africa@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-3/5 p-6 md:p-12 bg-white">
        <div className="max-w-md mx-auto">
          <button className="flex items-center text-gray-600 mb-8">
            <FiArrowLeftCircle className="text-3xl mr-2" />
            <span className="ml-2">Back</span>
          </button>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-600 mb-8">
            Celebrate Excellence and unveil the nominees
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 rounded-lg bg-[#FFF9ED]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg bg-[#FFF9ED] pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            <div className="mb-8 text-right">
              <a href="#" className="text-[#FFC247] hover:underline">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#FFC247] text-black font-bold py-3 px-4 rounded-lg w-full hover:bg-[#E48900] transition-colors duration-300"
            >
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Render the VerifyEmailPopup when showPopup is true */}
      {showPopup && <VerifyEmailPopup email={email} onClose={closePopup} />}
    </div>
  );
};

export default LoginPage;