"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { verifyOTP } from "@/lib/services/authService";

const OTPPage: React.FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || ""; // Get email from query params

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]); // 6-digit OTP
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isResending, setIsResending] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  // Initialize refs for each OTP input
  const inputRefs = useRef<HTMLInputElement[]>([]);

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
      setError("");

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter a complete 6-digit code");
      return;
    }

    try {
      setIsVerifying(true);
      const response = await verifyOTP({ email, otp: enteredOtp }); // Call the verifyOTP API

      if (response.token) {
        // Set the token in cookies
        document.cookie = `token=${response.token}; path=/; max-age=86400; secure`;

        // Optionally set the userId in cookies if needed
        document.cookie = `userId=${response.user.id}; path=/; max-age=86400; secure`;

        setSuccessMessage("OTP verified successfully! Redirecting...");
        setTimeout(() => {
          // Redirect to the member dashboard
          window.location.href = "/member/";
        }, 1000);
      } else {
        setError("OTP verification failed. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "OTP verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOtp = async () => {
    if (timeLeft > 0 && timeLeft < 45) return;

    setIsResending(true);
    try {
      // Call your resend OTP API here
      setTimeLeft(300);
      setError("");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 p-4">
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
              Enter the 6 digit code we just sent to {email}
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    if (el) inputRefs.current[index] = el; // Assign refs dynamically
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text").replace(/\D/g, "");
                    if (paste.length === 6) {
                      setOtp(paste.split(""));
                      setError("");
                      setTimeout(() => {
                        inputRefs.current[5]?.focus();
                      }, 0);
                      e.preventDefault();
                    }
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-2xl border border-gray-300 rounded-lg focus:border-[#FFC247] focus:outline-none bg-white"
                />
              ))}
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                {successMessage}
              </div>
            )}
            <div className="text-center mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-gray-600 bg-[#FFC247] px-2 sm:px-3 py-1 rounded-full">
                {timeLeft > 0 ? `00:${timeLeft.toString().padStart(2, "0")}` : "00:00"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-center mb-4 sm:mb-6">
              Didn't receive the code?{" "}
              <button
                onClick={handleResendOtp}
                disabled={(timeLeft > 0 && timeLeft < 45) || isResending}
                className={`text-[#FFC247] hover:underline focus:outline-none font-bold ${
                  timeLeft > 0 && timeLeft < 45 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isResending ? "Sending..." : "Resend OTP"}
              </button>
            </p>
            <button
              onClick={handleVerify}
              disabled={otp.join("").length !== 6 || isVerifying}
              className={`bg-[#FFC247] text-black font-bold py-2 sm:py-3 px-4 rounded-lg w-full hover:bg-[#E48900] transition-colors duration-300 text-sm sm:text-base ${
                otp.join("").length !== 6 || isVerifying ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;