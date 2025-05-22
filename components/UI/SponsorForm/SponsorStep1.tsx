'use client';
import { MdLocationPin } from "react-icons/md";
import { Phone, Mail } from "lucide-react";

import PhoneInput from 'react-phone-input-2';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
const formSchema = z.object({
  company_name: z.string(),
  name: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(5, 'Phone is required'),
  Business_reg_no: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function SponsorStep1({
  data,
  onUpdate,
  onNext
}: {
  data: Partial<FormData>
  onUpdate: (data: Partial<FormData>) => void
  onNext: () => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const [phoneNumber, setPhoneNumber] = useState(data.phone || '');

  useEffect(() => {
    setValue('phone', phoneNumber);
  }, [phoneNumber, setValue]);

  const onSubmit = (formData: FormData) => {
    onUpdate(formData);
    onNext();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen w-full bg-white pt-20">
          <div className="w-full md:w-1/3 relative overflow-hidden md:block hidden ">
            <Image
              src="/images/Hero section.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="h-[50px]"
              
            />
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
                <p className="mb-2 flex items-center"><MdLocationPin className="mr-2" /> 19 Godwin Okigbo Street, Masha Kilo, bus stop, Surulere, Lagos</p>
                <p className="mb-2 flex items-center"><Phone className="mr-2" /> +234-907-962-1110</p>
                <p className="mb-2 flex items-center"><Phone className="mr-2" /> +234-810-976-5897</p>
                <p className="flex items-center"><Mail className="mr-2" /> nesa.africa@gmail.com</p>
              </div>
            </div>
          </div>
    
    <form onSubmit={handleSubmit(onSubmit)} className="pt-20 max-w-5xl mx-auto p-8 space-y-8">
      <h2 className="text-2xl _under_border font-semibold">Submit Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor='company_name' className="block text-sm font-medium mb-2">Company Name</label>
          <input
            id="company_name"
            defaultValue={data.company_name}
            {...register('company_name')}
            placeholder="Your Company.."
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          {errors.company_name && <p className="text-red-500 text-sm mt-1">{errors.company_name.message}</p>}
        </div>

        <div>
          <label htmlFor='name' className="block text-sm font-medium mb-2">Full Name</label>
          <input
            id="name"
            defaultValue={data.name}
            {...register('name')}
            placeholder="Your Name.."
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor='email' className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            type="email"
            defaultValue={data.email}
            {...register('email')}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <PhoneInput
            country={"ng"}
            value={phoneNumber}
            onChange={(value) => {
              setPhoneNumber(value);
              setValue('phone', value, { shouldValidate: true });
            }}
            inputProps={{ name: 'phone', required: true }}
            inputStyle={{
              width: '100%',
              height: '48px',
              padding: '12px 12px 12px 48px',
              borderRadius: '6px',
              background: '#FFF9ED',
              border: '1px solid #D1D5DB',
            }}
            buttonStyle={{
              height: '48px',
              borderRadius: '6px 0 0 6px',
              background: '#FFF9ED',
              border: '1px solid #D1D5DB',
            }}
            dropdownStyle={{ background: '#FFF9ED' }}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor='Business_reg_no' className="block text-sm font-medium mb-2">Business Registration Number</label>
          <input
            id="Business_reg_no"
            defaultValue={data.Business_reg_no}
            {...register('Business_reg_no')}
            placeholder="Enter registration number"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          {errors.Business_reg_no && <p className="text-red-500 text-sm mt-1">{errors.Business_reg_no.message}</p>}
        </div>
      </div>

      <div className="text-center">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-black font-bold py-3 px-4 rounded-lg w-full"
          style={{
            background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
          }}
        >
          Continue
        </motion.button>
      </div>
    </form>
    </div>
    </>
  );
}