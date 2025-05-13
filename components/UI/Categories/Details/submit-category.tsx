  "use client";

import Image from "next/image";
import { toTopV, parentV } from "@/lib/utils/variants";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useModal } from "@/lib/store/modal";
import Modal from "@/components/Common/Modal";
import ThanksForVoting from "./thanks-for-voting";
import upload from "/public/svgs/upload.svg";
import { BiInfoCircle } from "react-icons/bi";
import { createNomination } from "@/lib/services/nominationService";
import { useState, ChangeEvent, FormEvent } from "react";
import { FiCheckCircle, FiUpload, FiX, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


type Category = {
  id: number;
  title: string;
  description: string;
  detailsDescription?: string;
};

type CategoryDetail = {
  id: number;
  // Add other properties as needed
};

type Props = {
  id: number;
  category: Category | undefined;
  details: CategoryDetail | undefined;
};

interface FormData {
  category: string;
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

const SubmitDetails: React.FC<Props> = ({ id, category, details }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
      category: category?.title || "Best Media Organization in Advocacy (Nigeria)",
      subCategory: "Best Print Media Educational Advocacy Award",
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
        category: formData.category,
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
    category: "best Media Organization in Advocacy (Nigeria)",
    subCategory: "Best Print Media Educational Advocacy Award",
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


  const { showModal, hideModal, visible } = useModal();

  const showModClick = () => showModal(<ThanksForVoting />);

  if (!category) {
    toast.error("category not found");
    router.push("/categories");
    return null;
  }

  return (
    <>
      <Modal visible={visible} onClose={hideModal}></Modal>

      <header>
        <div className={`md:min-h-[48rem] min-h-screen bg-zinc-200 text-white relative`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/about_.png"}
              alt="hero image"
              width={1240}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="w-full h-full bg-[url('/public/images/bg/boy.png')] bg-center bg-cover bg-no-repeat flex md:pt-12 pt-24 text-center md:text-start">
            <motion.div
              variants={parentV}
              initial="initial"
              animate="animate"
              className="container flex justify-start lg:mt-[8rem] mt-[3rem] text-start gap-6 md:gap-0 items-center"
            >
              <motion.div variants={toTopV} className="space-y-6 w-full h-fit">
                <div className="space-y-1 lg:px-[3rem]">
                  <h1 className="font-[500] text-[1.8rem] lg:text-[2rem] leading-[3rem] text-white">
                    Sub Category {id} <br />
                    <span className="font-[600] text-[2rem] lg:text-[2.5rem] leading-10 lg:leading-[4rem] bg-gradient-to-r from-[#FFC247] to-[#E48900] inline-block text-transparent bg-clip-text">
                      {category?.title}
                    </span>
                  </h1>
                </div>

                <p className="font-[400] lg:px-[3rem] lg:text-[1.5rem] text-[1.2rem] leading-[1.8rem] lg:leading-[2.25rem] text-center lg:text-start">
                  {category.detailsDescription ?? category.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
                <button
                  onClick={() => router.back()}
                  className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Dashboard
                </button>

        <div className="container pb-10">
          <div className="space-y-3 mt-16">
            <div className="relative">
           <h1
            className="pb-2 mb-6 _under_border"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#1F2937", // Equivalent to text-gray-900
            }}
            >
           Submit Nominee Personal Information
            </h1>
              <span className="bg-gradient-to-r from-[#febf44] to-[#ed9d19] h-[5px] w-[140px] absolute top-[42px] left-0"></span>
            </div>
            <form action="" className="w-full flex flex-col items-center gap-[3rem]">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                 {/* Linkedin Field */}
              <div>
                <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Linkedin Profile <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="linkedIn"
                  name="linkedinProfile"
                  // value={formData.linkedinProfile}
                  required
                  className="w-full p-3 ro1unded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"

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
                  className="w-full p-3 ro1unded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all"
                />
              </div>


              
              {/* Achievements Field */}
              <div>
                <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-2">
                  Achievements
                </label>
                <textarea
                  id="achievements"
                  name="achievements"
                  rows={4}
                  value={formData.achievements}
                  onChange={handleInputChange}
                  placeholder="Write a personal statement or provide specific achievements"
                  
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#FFC247] focus:ring-2 focus:ring-[#FFC247]/20 transition-all resize-y"
                />
              </div>
              
                {/* Document Upload */}
                              <div className="md:col-span-2">
                                <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                                                  Upload a document or image to support your nominee achievements
                                </label>
                                <label className="relative block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#FFC247] transition-colors">
                                  <input
                                    type="file"
                                    id="document"
                                    name="document"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full  h-full opacity-0 cursor-pointer"
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                      <p className="text-gray-600">Upload supporting document</p>
                                      <p className="text-xs text-gray-500 mt-1">JPG, PNG, PDF, and SVG files only</p>
                                    </div>
                                  )}
                                </label>
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
      </main>

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
    </>
  );
};

export default SubmitDetails;