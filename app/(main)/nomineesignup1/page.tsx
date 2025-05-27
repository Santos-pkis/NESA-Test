'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function NomineeSignupPart1() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    image: null as File | null,
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, image: file }))
  }

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }))
  }

  const handleNext = () => {
    // Here you can do validation and pass formData to the next page via router state or URL query
    const query = new URLSearchParams({
      type: formData.type,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
    }).toString();
    router.push(`/nominee-signup-step2?${query}`);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Create your Nominee Account</h1>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Nominee Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select</option>
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Phone Number</label>
          <PhoneInput
            country={'ng'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{ width: '100%', padding: '12px', borderRadius: '6px' }}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Upload an image</label>
          <input type="file" onChange={handleFileChange} className="block w-full text-sm" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
