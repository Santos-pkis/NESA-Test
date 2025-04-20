"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FiCheckCircle, FiUpload, FiX, FiArrowLeft } from "react-icons/fi";
import { createNomination } from "@/lib/services/nominationService";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  category_id: string;
  subCategory: string;
  competitiveType: string;
  name: string;
  email: string;
  organization: string;
  phone: string;
  socialMedia: string;
  document: File | null;
  achievements: string;
}

const CreateNominationPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    category_id: "9f8e7d6c-5432-10fe-dcba-0987654321fe",
    subCategory: "Leadership",
    competitiveType: "competitive",
    name: "",
    email: "",
    organization: "",
    phone: "",
    socialMedia: "",
    document: null,
    achievements: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, document: files[0] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleNominate = async () => {
    setLoading(true);
    try {
      await createNomination({
        category_id: formData.category_id,
        sub_category: formData.subCategory,
        competitive_type: formData.competitiveType,
        status: "pending",
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        phone: formData.phone,
        social_media: formData.socialMedia,
        document: formData.document,
        achievements: formData.achievements,
      });

      setShowConfirmation(false);
      setShowSuccess(true);
    } catch (error: any) {
      console.error("Failed to create nomination:", error.message);
      setErrorMessage(error.response?.data?.error || error.message || "An unexpected error occurred.");
      setShowConfirmation(false);
    } finally {
      setLoading(false);
    }
  };

  const handleNominateAnother = () => {
    setShowSuccess(false);
    setFormData({
      category_id: "9f8e7d6c-5432-10fe-dcba-0987654321fe",
      subCategory: "Leadership",
      competitiveType: "competitive",
      name: "",
      email: "",
      organization: "",
      phone: "",
      socialMedia: "",
      document: null,
      achievements: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nominate an Achiever</h1>
          <p className="text-gray-600 mb-6">
            Recognize outstanding individuals or organizations by submitting a nomination. 
            Please fill out all required fields carefully.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Individual or Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={"ng"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                    className: "w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all h-12",
                  }}
                />
              </div>

              {/* Organization Field */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                />
              </div>

              {/* Social Media Field */}
              <div>
                <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700 mb-2">
                  Social Media Profile
                </label>
                <input
                  type="text"
                  id="socialMedia"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                />
              </div>

              {/* Document Upload */}
              <div>
                <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                  Supporting Document
                </label>
                <label className="relative block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#FFC247] transition-colors">
                  <input
                    type="file"
                    id="document"
                    name="document"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".jpg,.png,.pdf,.svg"
                  />
                  {formData.document ? (
                    <div className="flex flex-col items-center">
                      <FiUpload className="w-8 h-8 text-[#FFC247] mb-2" />
                      <p className="text-gray-700 font-medium">{formData.document.name}</p>
                      <p className="text-sm text-gray-500 mt-1">Click to change file</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-gray-600">Upload supporting document</p>
                      <p className="text-xs text-gray-500 mt-1">JPG, PNG, PDF, and SVG files only</p>
                    </div>
                  )}
                </label>
              </div>

              {/* Achievements Field */}
              <div className="md:col-span-2">
                <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-2">
                  Achievements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="achievements"
                  name="achievements"
                  rows={5}
                  value={formData.achievements}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                  placeholder="Describe the nominee's accomplishments and why they deserve recognition..."
                />
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white py-3 px-6 rounded-xl font-medium disabled:opacity-70 relative overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                }}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Nomination"
                )}
              </motion.button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                By submitting this form, you confirm that all information provided is accurate.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Confirm Nomination</h2>
                  <button onClick={() => setShowConfirmation(false)} className="text-gray-400 hover:text-gray-600">
                    <FiX size={24} />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600">Please review your nomination details before submitting:</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{formData.name}</h3>
                    <p className="text-gray-600 text-sm">{formData.organization || "No organization specified"}</p>
                    <p className="text-gray-600 text-sm mt-1">{formData.email}</p>
                    <p className="text-gray-600 text-sm">{formData.phone}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNominate}
                    disabled={loading}
                    className="px-4 py-2 rounded-lg text-white font-medium disabled:opacity-70"
                    style={{
                      background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                    }}
                  >
                    {loading ? "Submitting..." : "Confirm Submission"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md text-center p-8"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="w-10 h-10 text-green-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Nomination Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for recognizing excellence. Your nomination has been received and will be reviewed shortly.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push("/member")}
                  className="w-full py-3 px-4 rounded-lg text-white font-medium"
                  style={{
                    background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                  }}
                >
                  Return to Dashboard
                </button>
                <button
                  onClick={handleNominateAnother}
                  className="w-full py-3 px-4 rounded-lg border border-[#FFC247] text-[#FFC247] font-medium hover:bg-[#FFF9ED] transition-colors"
                >
                  Nominate Another
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-red-600">Submission Error</h2>
                <button onClick={() => setErrorMessage(null)} className="text-gray-400 hover:text-gray-600">
                  <FiX size={24} />
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">{errorMessage}</p>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setErrorMessage(null)}
                  className="px-4 py-2 rounded-lg text-white font-medium"
                  style={{
                    background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                  }}
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateNominationPage;