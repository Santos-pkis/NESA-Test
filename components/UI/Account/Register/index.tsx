"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { scaleV } from "@/lib/utils/variants";
import FullWidthLoader from "@/components/Common/Loaders/full-width";
import toast from "react-hot-toast";

type Inputs = {
  fullName: string;
  email: string;
  location: string;
  password: string;
};

const RegisterContent = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(() => resolve(null), 3000));
      toast.success("Account created successfully");
    } catch {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#ffb92e2b] pt-[6rem] pb-[2rem]">
      <motion.div
        {...scaleV}
        className="bg-white sm:w-[34rem] w-[98%] min-h-[30rem] overflow-hidden shadow-xl rounded p-8 relative"
      >
        {loading && (
          <AnimatePresence mode="wait">
            <FullWidthLoader />
          </AnimatePresence>
        )}

        <h1 className="font-bold text-xl">Create an Account to make your Vote Count Today.</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="font-medium text-sm">Full Name</label>
              <div>
                <input
                  type="text"
                  className="w-full p-2 border border-black/30"
                  placeholder="Enter your Full Name"
                  {...register("fullName", {
                    required: "Your full name is required.",
                  })}
                />
                {errors.fullName && <p className="text-sm text-red-400">{errors.fullName.message}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-medium text-sm">Email</label>
              <div>
                <input
                  type="email"
                  className="w-full p-2 border border-black/30"
                  placeholder="Enter your Email Address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Your email is required.",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email is invalid",
                    },
                  })}
                />
                {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-medium text-sm">Location</label>
              <div>
                <input
                  type="text"
                  className="w-full p-2 border border-black/30"
                  placeholder="Lagos, Nigeria"
                  {...register("location", {
                    required: "Your location is required.",
                  })}
                />
                {errors.location && <p className="text-sm text-red-400">{errors.location.message}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-medium text-sm">Password</label>
              <div>
                <div className="flex border items-center justify-between border-black/30 px-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="py-2 flex-grow"
                    placeholder="***********"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "A password is required",
                      },
                      min: {
                        value: 8,
                        message: "Password cannot be less than 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]{8,}$/,
                        message: "must include at least a digit and symbol.",
                      },
                    })}
                  />
                  {showPassword ? (
                    <EyeOff size={18} onClick={toggleShowPassword} className="cursor-pointer" />
                  ) : (
                    <Eye size={18} onClick={toggleShowPassword} className="cursor-pointer" />
                  )}
                </div>
                {errors.password ? (
                  <p className="text-sm text-red-400">{errors.password.message}</p>
                ) : (
                  <p className="text-sm text-zinc-500 italic">Must include a symbol and digit.</p>
                )}
              </div>
            </div>
            <div className="space-x-2 font-bold text-sm">
              <button className="px-4 py-[9px] border-[3px] border-midGold text-midGold">Back To Category</button>
              <input
                type="submit"
                className="px-4 py-[9px] bg-midGold text-zinc-600 duration-200 cursor-pointer disabled:opacity-50"
                value={"Create Account"}
                disabled={!isValid}
              />
            </div>
          </div>
        </form>

        <div className="mt-8 mb-4 h-[0.5px] bg-zinc-200"></div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="text-deepGold" href={"/account/login"}>
            Login
          </Link>
        </p>
      </motion.div>
    </main>
  );
};

export default RegisterContent;
