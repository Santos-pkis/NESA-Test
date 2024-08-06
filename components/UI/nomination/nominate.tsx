import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image from next/image
import PhoneInput from 'react-phone-input-2'; // Import react-phone-input-2
import 'react-phone-input-2/lib/style.css'; // Import the CSS for the phone input

interface Category {
  title: string;
  description: string;
  image: string;
}

interface NominationPageProps {
  category: Category;
}

interface FormData {
  subCategory: string;
  name: string;
  organization: string;
  phone: string;
  socialMedia: string;
  document: File | null;
  achievements: string;
}

interface ConfirmationPopupProps {
  details: FormData;
  onClose: () => void;
  onNominate: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ details, onClose, onNominate }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Confirm your Nomination Details</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="space-y-4">
          <ConfirmationField label="Sub Category" value={details.subCategory} />
          <ConfirmationField label="Name of Individual/Organization" value={details.name} />
          <ConfirmationField label="Organization they belong to" value={details.organization} />
          <ConfirmationField label="Phone number" value={details.phone} />
          <ConfirmationField label="Social Media Profile" value={details.socialMedia || 'Not provided'} />
          <ConfirmationField label="Documents" value={details.document ? 'Image/Video Uploaded' : 'Not uploaded'} />
          <ConfirmationField label="Achievements" value={details.achievements} />
        </div>
        <button
          onClick={onNominate}
          className="w-full mt-6 text-black py-3 px-4 rounded-lg"
          style={{
            background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  );
};

const ConfirmationField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="font-semibold">{label}:</p>
    <p className="text-gray-600">{value}</p>
  </div>
);

const SuccessPopup: React.FC<{ onClose: () => void, onNominateAnother: () => void }> = ({ onClose, onNominateAnother }) => {
  const router = useRouter();

  const handleNominateAnother = () => {
    router.push('/nomination');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">&times;</button>
        <Image 
          src="/images/heroicons-solid/Subtract.png" 
          alt="Success" 
          width={80} // Set width
          height={80} // Set height
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold mb-4">Thank you for Nominating!!</h2>
        <p className="mb-6">Your Nomination has been successful and under review, an email will be sent when the nomination is approved.</p>
        <div className="flex space-x-4">
          <button
            onClick={handleNominateAnother}
            className="flex-1 py-3 px-4 rounded-lg text-black"
            style={{
              background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
            }}
          >
            Nominate In Another Category
          </button>
          <button
            className="flex-1 py-3 px-4 rounded-lg border border-[#FFC247] text-[#FFC247]"
          >
            Invite Others To Nominate
          </button>
        </div>
      </div>
    </div>
  );
};

const NominationPage: React.FC<NominationPageProps> = ({ category }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    subCategory: category.title,
    name: '',
    organization: '',
    phone: '',
    socialMedia: '',
    document: null,
    achievements: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, document: files[0] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleNominate = () => {
    console.log('Nomination submitted:', formData);
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  const handleNominateAnother = () => {
    setShowSuccess(false);
    setFormData({
      subCategory: category.title,
      name: '',
      organization: '',
      phone: '',
      socialMedia: '',
      document: null,
      achievements: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#191307] text-white py-24 px-8">
        <div className="absolute inset-0 bg-[url('/images/nominatehero.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl mb-2 md:mt-16">Sub Category 1</h2>
          <h1 className="text-3xl font-bold text-[#FFC247] mb-4">{category.title}</h1>
          <p className="mb-8">{category.description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-xl font-semibold mb-2">Submit Nominee Personal Information</h2>
        <div className="w-36 h-1 mb-6" style={{
          background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
        }}></div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Individual or Organization</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name of Individual or Organization" className="w-full p-3 rounded-lg bg-[#FFF9ED] border-none" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
              <PhoneInput
                country={'ng'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false,
                  className: 'w-full p-3 rounded-lg bg-[#FFF9ED] border-none',
                }}
              />
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleInputChange} placeholder="Name of the organization they belong to" className="w-full p-3 rounded-lg bg-[#FFF9ED] border-none" />
              </div>
              <div>
                <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">Document</label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 bg-[#FFF9ED]">
                  <input type="file" id="document" name="document" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".jpg,.png,.pdf,.svg" />
                  <div className="text-center">
                    <p className="text-gray-600">Upload supporting document or video</p>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG, PDF and SVG files only</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
              <textarea id="achievements" name="achievements" rows={4} value={formData.achievements} onChange={handleInputChange} placeholder="Write a personal statement or provide specific Achievements of your nominee" className="w-full p-3 rounded-lg bg-[#FFF9ED] border-none"></textarea>
            </div>
          </div>
          <button type="submit" className="w-full text-black  py-3 px-4 rounded-lg" style={{
            background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
          }}>Submit for Nomination</button>
        </form>
      </div>

      {showConfirmation && (
        <ConfirmationPopup
          details={formData}
          onClose={() => setShowConfirmation(false)}
          onNominate={handleNominate}
        />
      )}

      {showSuccess && (
        <SuccessPopup
          onClose={() => setShowSuccess(false)}
          onNominateAnother={handleNominateAnother}
        />
      )}
    </div>
  );
};

export default NominationPage;
