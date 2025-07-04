'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Wallet, Share2, PenSquareIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';



export default function ProfilePage() {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    nomineeType: '',
    stateOrRegion: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || '',
        nomineeType: user.nomineeType || '',
        stateOrRegion: user.stateOrRegion || '',
      });
    }
  }, [user]);

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || '',
        nomineeType: user.nomineeType || '',
        stateOrRegion: user.stateOrRegion || '',
      });
    }
  };
  interface ProfileFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    nomineeType: string;
    stateOrRegion: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: ProfileFormData) => ({ ...prev, [name]: value }));
  };
  const handleSave = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      await updateUser(formData);
      setEditing(false);
    } catch (err) {
      if (err && typeof err === 'object' && 'message' in err && typeof (err as any).message === 'string') {
        setErrorMsg((err as any).message);
      } else {
        setErrorMsg('Failed to update profile');
      }
    } finally {
      setLoading(false);
    }
  };

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
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8 bg-white text-black" >
        <div className='mb-28' style={{
          backgroundImage: `url('/images/nomineeNav.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '200px',
        }}>
          <div className='flex flex-col space-y-4 pl-10 pt-28'>
            <Image
              src={"/images/Ellipse.png"}
              alt={'personal info'}
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
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
            <div className='flex flex-col md:flex-row gap-[30%]'>
              {/* left */}
              <div className='w-[100%] md:w-[20%]'>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Full Name</p>
                  {editing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData.fullName || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Email address</p>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData.email || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Phone number</p>
                  {editing ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData.phoneNumber || '-'}</h1>
                  )}
                </div>
              </div>
              {/* right */}
              <div className='w-[100%] md:w-[80%]'>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Role</p>
                  {editing ? (
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                      disabled
                    />
                  ) : (
                    <h1>{formData.role || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>Type</p>
                  {editing ? (
                    <input
                      type="text"
                      name="nomineeType"
                      value={formData.nomineeType}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData.nomineeType || '-'}</h1>
                  )}
                </div>
                <div className='mb-[20px]'>
                  <p className='font-light text-[10px]'>State/Region</p>
                  {editing ? (
                    <input
                      type="text"
                      name="stateOrRegion"
                      value={formData.stateOrRegion}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full text-black"
                    />
                  ) : (
                    <h1>{formData.stateOrRegion || '-'}</h1>
                  )}
                </div>
              </div>
            </div>
            {/* Mobile Edit Button */}
            {!editing && (
              <div className="flex items-center mt-4">
                <div className="flex-1">{/* other content */}</div>
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm visible md:invisible ml-auto"
                  onClick={handleEdit}
                >
                  Edit <PenSquareIcon size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
