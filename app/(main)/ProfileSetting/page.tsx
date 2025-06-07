'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Wallet, Share2, PenSquareIcon } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();

  const PersonalInfo =[{
    firstname:'Mujeeb',
    lastname:'Azeez',
    email:'mujeebazeez@gmail.com',
    occupation:'Doctor',
    phonenumber:'+2348194739570',
    address:'10B Adeola Odeku Street, Apartment 3C, Victoria Island, Lagos State',
  }]
  const info = PersonalInfo[0];

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
   
            <div className='flex flex-col space-y-4 pl-10  pt-28'>
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
            <div className='border border-2 border-b-[#B6B5B3] w-full max-w-[1016] p-10 rounded-2xl'>
              {/* up own */}
              <div className="flex justify-start flex-col md:justify-between md:flex-row md:mb-[30px]">
                <h1 className='text-xl text-center'>Personal Information</h1>
                <button className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm invisible  md:visible">
                Edit <PenSquareIcon size={16} />
              </button>
              </div>


              {/* down own */}
              <div className='flex flex-col md:flex-row gap-[30%]'>

                {/* left */}
                <div className='w-[100%] md:w-[20%]'>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>First name</p>
                    <h1>{info.firstname}</h1>
                  </div>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>Email address</p>
                    <h1>{info.email}</h1>
                  </div>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>Phone number</p>
                    <h1>{info.phonenumber}</h1>
                  </div>


                </div>




                {/* right */}
                  <div className='w-[100%] md:w-[80%]'>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>Lastname</p>
                    <h1>{info.lastname}</h1>
                  </div>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>Occupation</p>
                    <h1>{info.occupation}</h1>
                  </div>

                  <div className='mb-[20px]'>
                    <p className='font-light text-[10px]'>Address</p>
                    <h1>{info.address}</h1>
                  </div>


                </div>

              </div>
                <div className="flex items-center">
  <div className="flex-1">
    {/* other content */}
  </div>
  <button className="flex items-center gap-2 bg-gradient-to-r from-[#FFC247] to-[#E48900] text-black px-4 py-2 rounded-[10px] text-sm visible md:invisible ml-auto">
    Edit <PenSquareIcon size={16} />
  </button>
</div>

            </div>
          </div>
      </main>
    </div>
  );
}
