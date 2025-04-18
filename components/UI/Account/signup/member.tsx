"use client";

import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Eye, EyeOff, Mail, Phone } from "lucide-react";
import { MdLocationPin } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/lib/hooks/useAuth";

const MembershipForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Member",
    referral: "null",
    region: "",
    KYC: false,
    GFA_wallet_id: "null"
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const router = useRouter();
  const { register } = useAuth();

  const togglePasswordVisibility = (field: "password" | "confirm") => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    
    setLoading(true);
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        referral: formData.referral,
        region: formData.region,
        KYC: formData.KYC,
        GFA_wallet_id: formData.GFA_wallet_id,
        phone: phoneNumber
      });
      
      setShowSuccessPopup(true);
      setTimeout(() => {
        router.push("/member");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Side - Background Image */}
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
          <div className="text-sm">
            <p className="mb-2 flex items-center">
              <MdLocationPin className="mr-2" />
              54, Falolu Street, Surulere, Lagos
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2" />
              +234-907-962-1110
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2" />
              +234-810-976-5897
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              nesa.africa@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-2/3 p-6 md:p-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 mb-8"
          >
            <FiArrowLeftCircle className="text-3xl mr-2" />
            <span className="ml-2">Back</span>
          </button>
          <h1 className="text-3xl font-bold mb-2">As a Member</h1>
          <p className="text-gray-600 mb-8">
            Inspire change and impact education through your effort.
          </p>
          
          {error && (
            <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-[#FFF9ED] border border-[#FFC247] focus:border-[#E48900] focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full p-3 rounded-lg bg-[#FFF9ED] border border-[#FFC247] focus:border-[#E48900] focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <PhoneInput
                country={"ng"}
                value={phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass="mb-6"
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  padding: "12px 12px 12px 48px",
                  borderRadius: "6px",
                  background: "#FFF9ED",
                  border: "1px solid #FFC247",
                }}
                buttonStyle={{
                  height: "48px",
                  borderRadius: "6px 0 0 6px",
                  background: "#FFF9ED",
                  border: "1px solid #FFC247",
                }}
                dropdownStyle={{
                  background: "#FFF9ED",
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="Enter your country"
                  className="w-full p-3 rounded-lg bg-[#FFF9ED] border border-[#FFC247] focus:border-[#E48900] focus:outline-none pr-10"
                  required
                />
                <MdLocationPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password (min 8 characters)"
                  className="w-full p-3 rounded-lg bg-[#FFF9ED] border border-[#FFC247] focus:border-[#E48900] focus:outline-none pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full p-3 rounded-lg bg-[#FFF9ED] border border-[#FFC247] focus:border-[#E48900] focus:outline-none pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="KYC"
                checked={formData.KYC}
                onChange={handleChange}
                className="mr-2 h-5 w-5 rounded border-gray-300 text-[#FFC247] focus:ring-[#FFC247]"
                required
              />
              <label className="text-sm text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#FFC247] text-black font-bold py-3 px-4 rounded-lg w-full hover:bg-[#E48900] transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Registering...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full text-center animate-popup">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
            <p className="mb-6 text-gray-600">
              Welcome to NESA, <span className="font-semibold">{formData.name}</span>! 
              You'll be redirected to your dashboard shortly.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div 
                className="bg-[#FFC247] h-2.5 rounded-full animate-progress" 
                style={{ animationDuration: '3s' }}
              />
            </div>
            <p className="text-sm text-gray-500">Redirecting in 3 seconds...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembershipForm;