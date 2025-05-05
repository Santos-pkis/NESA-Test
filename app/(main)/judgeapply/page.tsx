'use client';
import PhoneInput from "react-phone-input-2";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CountrySelector as CountrySelect } from 'react-international-phone';
import "react-phone-input-2/lib/style.css";
import Button from "@/components/Common/Button";

// Validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(5, 'Phone is required'),
  state: z.string().min(2, 'State/Region is required'),
  education: z.string().min(2, 'Educational background is required'),
  experience: z.string().min(5, 'Experience is required'),
  motivation: z.string().min(5, 'Motivation statement is required'),
  profileImage: z.any(),
  documents: z.any(),
});

type FormData = z.infer<typeof formSchema>;

export default function JudgeApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [phoneCountry, setPhoneCountry] = useState<string>('ng');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImageName, setProfileImageName] = useState('');
  const [documentsName, setDocumentsName] = useState('');

  // On submit
  const onSubmit = (data: FormData) => {
    console.log('Form data:', {
      ...data,
      phone: `+${phoneCountry} ${phoneNumber}`,
    });
    alert('Application submitted!');
  };
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-8 space-y-8">
      <h2 className="text-2xl font-semibold">Submit Applicant Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input placeholder="Name of Individual" {...register('fullName')} />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium mb-2">Experience</label>
          <textarea  rows={4} className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" placeholder="Write about your professional experience" {...register('experience')} />
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input placeholder="Enter your email" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Upload Documents */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Documents</label>
          <div
            className="border-2 border-dashed rounded-md p-6 text-center text-sm text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('documentsInput')?.click()}
          >
            <p>Drag and drop documents here or <span className="text-yellow-600">Click here</span> to upload</p>
            <p className="text-xs text-gray-400 mt-2">Upload your resume, passport, and other supporting documents</p>
            {documentsName && <p className="mt-2 text-green-600">{documentsName}</p>}
          </div>
          <input
            type="file"
            id="documentsInput"
            className="hidden"
            multiple
            {...register('documents')}
            onChange={(e) => {
              setDocumentsName(Array.from(e.target.files || []).map(f => f.name).join(', '));
              setValue('documents', e.target.files);
            }}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="flex items-center space-x-2">
              <PhoneInput
                country={"ng"}
                value={phoneNumber}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                onChange={handlePhoneChange}
                containerClass="mb-6"
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  padding: "12px 12px 12px 48px",
                  borderRadius: "6px",
                  background: "#FFF9ED",
                  border: "1px solid #D1D5DB", // Default gray border
                  transition: "border-color 0.3s",
                }}
                buttonStyle={{
                  height: "48px",
                  borderRadius: "6px 0 0 6px",
                  background: "#FFF9ED",
                  border: "1px solid #D1D5DB", // Default gray border
                  transition: "border-color 0.3s",
                }}
                dropdownStyle={{
                  background: "#FFF9ED",
                }}
                onFocus={() => {
                  (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#FFC247");
                  const buttonElement = document.querySelector(".react-tel-input button") as HTMLElement;
                  buttonElement?.style.setProperty("border-color", "#FFC247");
                }}
                onBlur={() => {
                  (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#D1D5DB");
                  (document.querySelector(".react-tel-input button") as HTMLElement)?.style.setProperty("border-color", "#D1D5DB");
                }}
              />
            </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Motivation */}
        <div>
          <label className="block text-sm font-medium mb-2">Motivation Statement</label>
          <input placeholder="Write about what motivated you to become a judge" {...register('motivation')} />
          {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>}
        </div>

        {/* State/Region */}
        <div>
          <label className="block text-sm font-medium mb-2">State/Region</label>
          <input placeholder="Enter your state/region" {...register('state')} />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
        </div>

        {/* Educational Background */}
        <div>
          <label className="block text-sm font-medium mb-2">Educational Background</label>
          <input placeholder="Enter your educational background" {...register('education')} />
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
        </div>

        {/* Upload Profile Image */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Profile Image</label>
          <div
            className="border-2 border-dashed rounded-md p-6 text-center text-sm text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('profileInput')?.click()}
          >
            <p>Drag and drop documents here or <span className="text-yellow-600">Click here</span> to upload</p>
            <p className="text-xs text-gray-400 mt-2">Upload your resume, passport, and other supporting documents</p>
            {profileImageName && <p className="mt-2 text-green-600">{profileImageName}</p>}
          </div>
          <input
            type="file"
            id="profileInput"
            className="hidden"
            {...register('profileImage')}
            onChange={(e) => {
              setProfileImageName(e.target.files?.[0]?.name || '');
              setValue('profileImage', e.target.files?.[0]);
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button text="Submit Judge Application" type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-md text-white">
          Submit Judge Application
        </Button>
      </div>
    </form>
  );
}
