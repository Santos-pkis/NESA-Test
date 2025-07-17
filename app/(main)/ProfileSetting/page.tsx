'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Wallet, Share2, PenSquareIcon } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useAuthContext } from '@/lib/context/AuthContext';
import { IoEyeSharp, IoEyeOffSharp, IoLogOut } from "react-icons/io5";
import SecurityTab from "@/components/UI/Accountsettings/SecurityTab";

// --- Category Data ---
const superCategories = [
  { label: "Competitive", value: "competitive" },
  { label: "Non-Competitive", value: "non-competitive" },
  { label: "Africa Lifetime Icon", value: "africa-lifetime-icon" }
];

const competitiveCategories = [
  "Best Media Organization in Educational Advocacy (Nigeria)",
  "Best CSR in Education (Africa – Regional)",
  "Best NGO Contribution to Achieving Education for All (Africa - Regional)",
  "Creative Arts Industry Contribution to Education (Nigeria)",
  "Best EduTech Organization in Africa",
  "Best NGO Contribution to Education (Nigeria)404",
  "Best CSR in Education (Nigeria)404",
  "Best STEM Education Program or Project (Africa-wide)404"
];

const nonCompetitiveCategories = [
  "Best Educational-Friendly State in Nigeria",
  "Best Tertiary Library in Nigeria",
  "Best Research & Development Institution (Nigeria)",
  "Africa Lifetime Education Icon Recognition",
  "Faith-Based & Political Leadership Awards-Christian Education Champions",
  "Faith-Based & Political Leadership Awards-Islamic Education Champions",
  "Political Support for Education (Governors/Ministers)",
  "Diaspora Association Educational Impact Award404"
];

const africaLifetimeIconCategories = [
  "Africa Education Philanthropy Icon Of The Decade (2014-2024)",
  "Literary And New Curriculum Advocate Africa Education Icon Of The Decade (2014-2024)",
  "Africa Technical Educator Icon Of The Decade (2014-2024)"
];

function HeaderNavbar({ onLogout }: { onLogout: () => void }) {
  const router = useRouter();
  return (
    <header className="w-full flex items-center justify-between px-12 py-6 bg-[#181A20] border-b border-[#23262F]">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/images/nesa-mg.png" alt="NESA Logo" width={48} height={48} />
        <span className="text-2xl font-semibold text-[#FFC247] tracking-wide">NESA</span>
        <span className="ml-4 text-lg text-white font-medium">Nominee Research Data Entry</span>
      </div>
      <div className="flex items-center gap-8">
        <span className="text-[#FFC247] font-medium text-base">Signed in as Volunteer</span>
        <button
          onClick={onLogout}
          className="text-[#FFC247] font-semibold text-base hover:underline transition"
        >
          LOG OUT
        </button>
      </div>
    </header>
  );
}

interface ProfileFormData1 {
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
  nomineeType: string;
  stateOrRegion: string;
  image: string;
  awardSuperCategory: string;
  category: string;
}

interface ProfileFormData2 {
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
  nomineeType: string;
  stateOrRegion: string;
  image: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, getUserId, logout, updateUser } = useAuthContext();

  // Volunteer form (Nominee Entry)
  const [formData1, setFormData1] = useState<ProfileFormData1>({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    nomineeType: '',
    stateOrRegion: '',
    image: '',
    awardSuperCategory: '',
    category: '',
  });

  // Main profile form (Personal Info)
  const [formData2, setFormData2] = useState<ProfileFormData2>({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    nomineeType: '',
    stateOrRegion: '',
    image: '',
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);



  // Populate formData2 for main profile
  useEffect(() => {
    if (user && user.role !== 'Volunteer') {
      setFormData2({
        fullName: user.fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || '',
        nomineeType: user.nomineeType || '',
        stateOrRegion: user.stateOrRegion || '',
        image: user.image || '',
      });
    }
  }, [user]);

  // Handlers for volunteer form
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData1((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData1(prev => ({
      ...prev,
      [name]: value,
      ...(name === "awardSuperCategory" ? { category: "" } : {})
    }));
  };
  const categoryOptions1 = useMemo(() => {
    if (formData1.awardSuperCategory === "competitive") return competitiveCategories;
    if (formData1.awardSuperCategory === "non-competitive") return nonCompetitiveCategories;
    if (formData1.awardSuperCategory === "africa-lifetime-icon") return africaLifetimeIconCategories;
    return [];
  }, [formData1.awardSuperCategory]);

  // Handlers for main profile form
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData2((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setImageFile(null);
    if (!user) {
      router.replace('/account/signup/membersignup');
    } else {
      setFormData2({
        fullName: user.fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || '',
        nomineeType: user.nomineeType || '',
        stateOrRegion: user.stateOrRegion || '',
        image: user.image || '',
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      let imageUrl = formData2.image;
      if (imageFile) {
        // Upload image to Cloudinary or your backend
        const data = new FormData();
        data.append('file', imageFile);
        data.append('upload_preset', 'nesa_upload');
        const res = await fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
          method: 'POST',
          body: data
        });
        const fileRes = await res.json();
        imageUrl = fileRes.secure_url;
      }
      await updateUser({ ...formData2, image: imageUrl });
      setEditing(false);
      setImageFile(null);
    } catch (err) {
      setErrorMsg('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  // Volunteer UI
  if (user && user.role === 'Volunteer') {
    return (
      <div className="min-h-screen bg-[#181A20]">
        <HeaderNavbar onLogout={handleLogout} />
        <div className="min-h-screen pl-32 flex bg-[#181A20]">
          <aside className="w-50 bg-[#181A20] p-8 flex flex-col space-y-8 border-r border-[#23262F]">
            <div className="flex flex-col gap-4">
              <button onClick={() => router.push('/ProfileSetting')} className="font-normal px-2 md:px-4 py-2 border text-white border-white/30 rounded text-sm flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="hidden md:inline ml-2">Dashboard</span>
              </button>
              <button className="bg-[#FFC247] text-gray font-semibold py-2 px-4 rounded flex items-center gap-2">
                <span>+ Add Nominee</span>
              </button>
              <button className="text-white border-white/30 py-2 px-4 rounded flex items-center gap-2 hover:bg-[#23262F]">
                <span>Submissions</span>
              </button>
            </div>
          </aside>
          <main className="flex-1 flex flex-col items-center justify-start bg-[#F8F8F8] py-12 px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10">
              <h1 className="text-3xl font-bold text-[#181A20] mb-8">Nominee Entry</h1>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-1">Nominee Full Name</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg p-3"
                    type="text"
                    name="fullName"
                    value={formData1.fullName}
                    onChange={handleChange1}
                    placeholder="Jonathan Mwangi"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Award Super Category</label>
                  <select
                    name="awardSuperCategory"
                    value={formData1.awardSuperCategory}
                    onChange={handleSelectChange1}
                    className="w-full border border-gray-300 rounded-lg p-3"
                    required
                  >
                    <option value="">Select Super Category</option>
                    {superCategories.map(sc => (
                      <option key={sc.value} value={sc.value}>{sc.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Category</label>
                    <select
                      name="category"
                      value={formData1.category}
                      onChange={handleSelectChange1}
                      className="w-full border border-gray-300 rounded-lg p-3"
                      required
                      disabled={!formData1.awardSuperCategory}
                    >
                      <option value="">Select Category</option>
                      {categoryOptions1.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Subcategory</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="Reading Advocacy" />
                  </div>
                </div>
                {/* ...rest of the form fields... */}
                <div>
                  <label className="block text-gray-700 mb-1">Description of Achievements</label>
                  <textarea className="w-full border border-gray-300 rounded-lg p-3" rows={3} placeholder="Jonathan Mwangi serves local literacy across public reading programs in East Africa." />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Social Impact</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="Impact on community literacy" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Sustainability Evidence</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="Sustainability of reading facilities" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Country/Region</label>
                  <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="Kenya" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="email" placeholder="jonathan.mwangi@email.com" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="+254 712 345578" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">WhatsApp Contact (optional)</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="+254 712 345579" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Website / Social Media Link</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3" type="text" placeholder="www.readkenya.org" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Upload Documents/Links</label>
                  <input className="w-full border border-gray-300 rounded-lg p-3" type="file" />
                </div>
                <div className="flex gap-4 mt-6">
                  <button type="button" className="w-1/2 border border-[#FFC247] text-[#FFC247] py-3 rounded-lg font-semibold hover:bg-[#FFF9ED]">SAVE AS DRAFT</button>
                  <button type="submit" className="w-1/2 bg-[#FFC247] text-black py-3 rounded-lg font-semibold hover:bg-[#E48900]">SUBMIT NOMINEE</button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Main profile UI (uses formData2)
  return (
    <div className="flex min-h-screen bg-white text-white pt-20">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-[#151007] p-6 flex pt-[50px] flex-col space-y-6 items-center md:items-start">
        <div className="flex flex-col gap-5">
          <button className="font-normal px-2 md:px-4 py-2 border bg-white text-black border-white/30 rounded text-sm flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="hidden md:inline ml-2">Profile Settings</span>
          </button>
          <button
            onClick={() => router.push('/ProfileSetting/ProfileWallet')}
            className="flex items-center px-2 md:px-4 py-2 rounded text-sm hover:bg-white/10">
            <Wallet className="w-5 h-5" />
            <span className="hidden md:inline ml-2">Wallet</span>
          </button>
          <button
            onClick={() => router.push('/ProfileSetting/refer')}
            className="flex items-center px-2 md:px-4 py-2 rounded text-sm hover:bg-white/10">
            <Share2 className="w-5 h-5" />
            <span className="hidden md:inline ml-2">Referrals</span>
          </button>
          {/* Logout Button */}
          <div className="flex justify-center mt-4 sm:mt-6 mb-8 sm:mb-12">
            <button
              onClick={handleLogout}
              className="px-3 sm:px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 hover:opacity-80 active:transform active:scale-95"
              style={{ fontSize: '18px', marginBottom: '24px' }}
            >
              <IoLogOut size={24} style={{ color: '#CDA292' }} />
              <span style={{ fontSize: '18px', color: '#CDA292' }}>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8 bg-white text-black" >
        <div className='mb-28' style={{
          backgroundImage: `url('/images/nomineeNav.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '250px',
        }}>
          <div className='flex flex-col space-y-4 pl-10 pt-28'>
            {editing ? (
              <div className="relative w-[200px] h-[200px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profile-image-upload"
                />
                {(imageFile || formData2.image) ? (
                  <Image
                    src={imageFile ? URL.createObjectURL(imageFile) : formData2.image}
                    alt={'personal info'}
                    width={200}
                    height={200}
                    className="rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-6xl border border-gray-200">
                    <span className="select-none">?</span>
                  </div>
                )}
                {/* Plus sign only in editing mode */}
                <label htmlFor="profile-image-upload" className="absolute bottom-3 right-3 bg-[#FFC247] hover:bg-[#E48900] text-black rounded-full p-2 shadow cursor-pointer border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z"/></svg>
                </label>
              </div>
            ) : (
              <div className="relative w-[200px] h-[200px]">
                {formData2.image ? (
                  <Image
                    src={formData2.image}
                    alt={'personal info'}
                    width={200}
                    height={200}
                    className="rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-6xl border border-gray-200">
                    <span className="select-none">?</span>
                  </div>
                )}
                {/* No plus sign in view mode */}
                {!formData2.image && !editing && (
                  <input type="file" accept="image/*" className="hidden" id="profile-image-upload" readOnly />
                )}
              </div>
            )}
          </div>
        </div>

        <div className='p-10'>
          <div className='border border-2 border-b-[#B6B5B3] w-full max-w-[1016px] p-10 rounded-2xl'>
            {/* Header */}
            <div className="flex justify-start flex-col md:justify-between md:flex-row md:mb-[30px]">
              <h1 className='text-xl text-center'>Personal Information</h1>
              {editing ? (
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    className="flex items-center gap-2 border border-[#FFC247] text-[#FFC247] px-4 py-2 rounded-[10px] text-sm"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm invisible md:visible"
                  onClick={handleEdit}
                >
                  Edit <PenSquareIcon size={16} />
                </button>
              )}
            </div>
            {errorMsg && <div className="text-red-500 mb-2">{errorMsg}</div>}
            {/* Editable Fields */}
            <div className='flex flex-col md:flex-row gap-4 '>
              {/* left */}
              <div className='w-[100%] md:w-[80%] lg:w-[50%]'>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Full Name</p>
                  {editing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData2.fullName}
                      onChange={handleChange2}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData2.fullName || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Email address</p>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData2.email}
                      onChange={handleChange2}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData2.email || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Phone number</p>
                  {editing ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData2.phoneNumber}
                      onChange={handleChange2}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData2.phoneNumber || '-'}</h1>
                  )}
                </div>
              </div>
              {/* right */}
              <div className='w-[100%] md:w-[30%] lg:w-[50%]'>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Type</p>
                  {editing ? (
                    <input
                      disabled
                      type="text"
                      name="nomineeType"
                      value={formData2.nomineeType}
                      onChange={handleChange2}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData2.nomineeType || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>State/Region</p>
                  {editing ? (
                    <input
                      type="text"
                      name="stateOrRegion"
                      value={formData2.stateOrRegion}
                      onChange={handleChange2}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData2.stateOrRegion || '-'}</h1>
                  )}
                </div>
              </div>
            </div>
            {!editing && (
              <div className="flex items-center mt-4">
                <div className="flex-1"></div>
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm visible md:invisible ml-auto"
                  onClick={handleEdit}
                >
                  Edit <PenSquareIcon size={16} />
                </button>
              </div>
            )}
          </div>
          <SecurityTab />
        </div>
      </main>
    </div>
  );
}