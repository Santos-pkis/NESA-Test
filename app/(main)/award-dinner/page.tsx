"use client";

import SantosLink from "@/components/Common/Links/santos";
import { additionalOpportunities, benefits, sponsors } from "@/lib/data/others";
import { useModal } from "@/lib/store/modal";
import { AnimatePresence, motion } from "framer-motion";
import { raleway } from "@/lib/utils/font";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { step1Variant, step2Variant } from "@/components/Common/Others/get-involved";
import Modal from "@/components/Common/Modal";
import { useRouter } from "next/navigation";

const SponsorshipModalContent = () => {
  const [step, setStep] = useState(1);

  const router = useRouter();

  const { hideModal } = useModal();
  const handleNext = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
      return;
    }

    toast.success("Submitted Successfully 🎉");
    hideModal();
    router.replace("/");
  };

  const renderForm = (): JSX.Element | null => {
    switch (step) {
      case 1:
        return (
          <motion.div {...step1Variant} className="space-y-4 max-h-[40rem] overflow-y-auto" key={"step-1"}>
            <div className="p-1">
              <p className="font-bold text-xl text-midGold">Partner with us</p>
              <p className="text-sm text-zinc-600">Fill in the required details and get to partner with us</p>
            </div>
            <div className="space-y-1">
              <label htmlFor="fullName" className="font-medium text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full outline-none p-2 rounded-md border border-zinc-300"
                placeholder="John"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="company" className="font-medium text-sm">
                Company Name (if any)
              </label>
              <input
                type="text"
                name="company"
                className="w-full outline-none p-2 rounded-md border border-zinc-300"
                placeholder="Doe"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="font-medium text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full outline-none p-2 rounded-md border border-zinc-300"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phoneNumber" className="font-medium text-sm">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full outline-none p-2 rounded-md border border-zinc-300"
                placeholder="+234 901223456789"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="country" className="font-medium text-sm">
                Country
              </label>
              <select name="country" className="w-full outline-none p-2 rounded-md border border-zinc-300">
                <option value="nigeria">Nigeria</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="areaOfSponsorship" className="font-medium text-sm">
                Area of Sponsorship
              </label>
              <select name="country" className="w-full outline-none p-2 rounded-md border border-zinc-300">
                <option value="nigeria">Option1</option>
                <option value="nigeria">Option2</option>
              </select>
            </div>

            <button className="w-full text-darkGold py-2 bg-deepGold rounded-lg" onClick={handleNext}>
              Submit
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div {...step2Variant} className="space-y-4 max-h-[40rem] overflow-y-auto" key={"step-2"}>
            <div className="text-center space-y-3">
              <p className="text-lg text-midGold font-bold">Thanks for been part of a Noble Cause!</p>
              <p className="text-sm max-w-md mx-auto text-zinc-500">
                Your response has been recorded and the Sponsorship Team would reach out to you soon
              </p>
              <button className="w-full text-darkGold py-2 bg-deepGold rounded-lg" onClick={handleNext}>
                Back to Home
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-40 rounded-lg px-5 py-8 md:min-w-[30rem] max-h-[40rem] overflow-y-auto overflow-x-hidden">
      <div className="space-y-4 max-h-[40rem] overflow-y-auto">
        <AnimatePresence mode="wait" initial={false}>
          {renderForm()}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Page = () => {
  const { showModal, visible, hideModal } = useModal();
  const showModalClick = () => showModal(<SponsorshipModalContent />);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {visible && <Modal visible={visible} key={"modal-"} onClose={hideModal} />}
      </AnimatePresence>

      <header className="md:min-h-[40rem] min-h-screen bg-[#17120a] text-white flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h1 className={`${raleway.className} font-bold text-deepGold md:text-5xl sm:text-4xl text-3xl`}>
            NESA 2023 Award Dinner: An Evening of Excellence
          </h1>
          <p className="text-lg">
            Join NESA Africa, facilitated by <SantosLink />, and become part of a transformative educational community.
          </p>
        </div>
      </header>
      <main>
        <div className="my-16 grid md:grid-cols-2 gap-10 items-center container">
          <div className="flex flex-col gap-6 self-start">
            <div className="p-6 font-bold md:text-3xl text-2xl from-[#ffd174] bg-gradient-to-r">
              <p>Welcome to the New Education Standard Award Nigeria (NESA) 2023 Award Dinner Ceremony Page!</p>
            </div>
            <div className="p-6 from-[#d5ff7c] to-[#f3ffd8] bg-gradient-to-r">
              <p>
                This year, we celebrate a milestone in educational transformation with the NESA 2023 Award Dinner, an
                evening dedicated to honoring the champions of education in Nigeria. Our prestigious event recognizes
                the hard work, innovation, and dedication of individuals, organizations, and institutions that have
                significantly contributed to advancing educational excellence across the nation.
              </p>
            </div>
          </div>
          <div>
            <Image src={"/images/award-dinner.png"} alt="award dinner" className="" width={400} height={800} />
          </div>
        </div>

        <section className="relative">
          <Image
            src={"/images/bg/timeline.png"}
            alt="dark background"
            className="w-full h-full object-cover -z-[1] absolute top-0 left-0"
            width={1440}
            height={1580}
          />

          <div className="container py-10 text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="_under_border font-bold">Sponsorship Categories:</p>
                <h3 className="font-extrabold md:text-4xl text-3xl text-deepGold">
                  Be Part of a Noble Cause: Sponsorship Opportunities
                </h3>
                <p className="md:text-lg">
                  NESA 2023 offers a unique platform for sponsors to showcase their commitment to education, one of the
                  most vital sectors for national development. Aligning with NESA means associating your brand with the
                  noble cause of uplifting education in Nigeria. We invite you to explore our diverse sponsorship
                  categories, designed to provide maximum visibility and impact.
                </p>
              </div>

              <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-6 text-black">
                {sponsors.map((sponsor, id) => (
                  <div
                    key={id}
                    onClick={showModalClick}
                    className="min-h-[25rem] bg-gradient-to-bl from-[#ee9e1a] via-[#f6b030] to-deepGold rounded-lg py-20 px-10 space-y-4"
                  >
                    <p className="font-bold text-2xl">{sponsor.title}</p>
                    <p>{sponsor.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="font-extrabold md:text-4xl text-3xl text-deepGold">Additional Opportunities includes:</p>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-6 text-black">
                  {additionalOpportunities.map((oppor, id) => (
                    <div
                      key={id}
                      className="min-h-[25rem] bg-gradient-to-bl bg-[#cfcfce] rounded-lg py-20 px-10 space-y-4"
                    >
                      <p className="font-bold text-2xl">{oppor.title}</p>
                      <p>{oppor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-16 grid md:grid-cols-3 gap-10 items-center container">
          <div className="space-y-8 text-center">
            {benefits.map((benefit, id) => (
              <div key={id} className="space-y-4">
                <p className="font-bold text-xl">{benefit.title}</p>
                <p className="text-zinc-700">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-2 max-h-[40rem] overflow-hidden">
            <Image
              src={"/images/award-dinner.png"}
              alt="award dinner"
              className="w-full h-full object-cover"
              width={400}
              height={800}
            />
          </div>
        </div>

        <div className="grid place-content-center mb-10">
          <div>
            <Link
              href={"/join-us"}
              target="_blank"
              className="text-blue-400 font-medium text-lg flex items-center gap-2"
            >
              <span>Join Us</span>
              <ExternalLink />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
