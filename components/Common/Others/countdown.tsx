"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Define the CountdownTimerProps interface
interface CountdownTimerProps {
  onTimeUpdate: (time: { days: number; hours: number; minutes: number }) => void;
  targetDateProp: string; 
}
const CountdownTimer: React.FC<CountdownTimerProps> = ({ onTimeUpdate, targetDateProp }) => {

        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);
        const [isExpired, setIsExpired] = useState(false);

        const targetDate = new Date(targetDateProp).getTime();
        // console.log(targetDate) returns NaN with 2025-4-30T10:00:00Z

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance <= 0) {
                    clearInterval(interval);
                    setIsExpired(true);
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);

                // Pass days, hours, and minutes as props
                onTimeUpdate({ days, hours, minutes });
            }, 1000);

            return () => clearInterval(interval);
        }, [onTimeUpdate]);



  return (
    <div className="relative w-full bg-black">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/datebg.png" 
          alt="Luxury background" 
          fill 
          className="object-cover opacity-40"
        />
        </div>


      <div className="relative container mx-auto py-8 px-4">


        <div className="flex flex-col items-center justify-center">
          {!isExpired ? (
            <>
              <h3 className="text-[#f0b64d] text-lg md:text-xl font-medium mb-4">
                Our Live Award show starts at:
              </h3>
              
              <div className="flex items-center justify-center space-x-4 md:space-x-6 my-4">
                <div className="flex flex-col items-center">
                  <div className="text-[#f0b64d] text-4xl md:text-6xl font-bold">
                    {days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[#f0b64d] text-sm md:text-base mt-1">
                    Days
                  </div>
                </div>
                
                <div className="text-[#f0b64d] text-4xl md:text-6xl font-bold">:</div>
                
                <div className="flex flex-col items-center">
                  <div className="text-[#f0b64d] text-4xl md:text-6xl font-bold">
                    {hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[#f0b64d] text-sm md:text-base mt-1">
                    Hours
                  </div>
                </div>
                
                <div className="text-[#f0b64d] text-4xl md:text-6xl font-bold">:</div>
                
                <div className="flex flex-col items-center">
                  <div className="text-[#f0b64d] text-4xl md:text-6xl font-bold">
                    {minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[#f0b64d] text-sm md:text-base mt-1">
                    Mins
                  </div>
                </div>
              </div>
              
              <Link href="/tickets">
                <button className="bg-[#f0b64d] hover:bg-[#d99b35] text-black font-medium px-8 py-3 rounded-md transition-colors duration-300 mt-4">
                  Get your Ticket
                </button>
              </Link>
            </>
          ) : (
            <div className="text-[#f0b64d] text-3xl md:text-4xl font-bold py-8">
              Launch date!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;