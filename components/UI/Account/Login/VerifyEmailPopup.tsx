"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface VerifyEmailPopupProps {
  email: string;
  onClose: () => void;
}

const SuccessPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-sm w-full">
        <div className="text-center">
          <div className="mb-4">
            <Image
              src="/images/heroicons-solid/Subtract.png"
              alt="Success"
              width={60}
              height={60}
              className="mx-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bd mb-4">You have logged in Successfully</h2>
          <button
            onClick={onClose}
            className="bg-[#FFC247] text-black  py-2 sm:py-3 px-4 rounded-lg w-full hover:bg-[#E48900] transition-colors duration-300 text-sm sm:text-base"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

const VerifyEmailPopup: React.FC<VerifyEmailPopupProps> = ({ email, onClose }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleVerify = () => {
    console.log('Verifying OTP:', otp.join(''));
    setShowSuccessPopup(true);
  };

  const handleResendOtp = () => {
    console.log('Resending OTP');
    setTimeLeft(45);
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    onClose();
  };

  if (showSuccessPopup) {
    return <SuccessPopup onClose={handleSuccessClose} />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-5xl h-[80vh] max-h-[600px] overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Frame.png"
            alt="Popup Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-[#FBF3E2] p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Verify Email Address</h2>
            <p className="text-xs sm:text-sm text-center mb-4 sm:mb-6">
              Enter the 4 digit code that we just sent to {email}
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-2xl border border-gray-300 rounded-lg focus:border-[#FFC247] focus:outline-none bg-white"
                />
              ))}
            </div>
            <div className="text-center mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-gray-600 bg-[#FFC247] px-2 sm:px-3 py-1 rounded-full">
                {timeLeft > 0 ? `00:${timeLeft.toString().padStart(2, '0')}` : '00:00'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-center mb-4 sm:mb-6">
              Didn't receive the code?{' '}
              <button
                onClick={handleResendOtp}
                className="text-[#FFC247] hover:underline focus:outline-none font-bold"
              >
                Resend OTP
              </button>
            </p>
            <button
              onClick={handleVerify}
              className="bg-[#FFC247] text-black font-bold py-2 sm:py-3 px-4 rounded-lg w-full hover:bg-[#E48900] transition-colors duration-300 text-sm sm:text-base"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPopup;