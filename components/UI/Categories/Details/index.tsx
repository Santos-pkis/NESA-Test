"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { toTopV, parentV } from "@/lib/utils/variants";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Category } from "@/lib/types/global";
import toast from "react-hot-toast";
import { CategoryDetails, allCategories } from "@/lib/data/category";
import Link from "next/link";
import { useModal } from "@/lib/store/modal";
import Modal from "@/components/Common/Modal";
import ThanksForVoting from "./thanks-for-voting";

type Props = { id: number; category: Category | undefined; details: CategoryDetails | undefined };

const CategoriesDetails: React.FC<Props> = ({ id, category, details }) => {
  const router = useRouter();
  const { showModal, hideModal, visible } = useModal();

  const showModClick = () => showModal(<ThanksForVoting />);

  if (!category) {
    toast.error("category not found");
    router.push("/categories");
    return null;
  }

  return (
    <>
      <Modal visible={visible} onClose={hideModal}></Modal>

      <header>
        <div className={`md:min-h-[48rem] min-h-screen bg-zinc-200 text-white relative`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/about_.png"}
              alt="hero image"
              width={1240}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="w-full h-full flex items-center absolute top-0 left-0 md:pt-12 pt-28 text-center md:text-start">
            <motion.div
              variants={parentV}
              initial="initial"
              animate="animate"
              className="container flex justify-between gap-6 md:gap-0 items-center"
            >
              <motion.div variants={toTopV} className="space-y-6 max-w-3xl">
                <div className="space-y-1">
                  <p className="font-semibold text-sm text-white">Nominate an Education Champion!</p>
                  <h1 className="font-bold md:text-5xl text-4xl text-midGold md:leading-[1.4]">
                    CATEGORY {id}: <br /> {category?.title}
                  </h1>
                </div>

                <p className="text-sm md:text-base">{category.detailsDescription ?? category.description}</p>

                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <button
                    className={`w-12 h-12 duration-300 rounded-lg disabled:bg-zinc-400 bg-midGold text-black grid place-content-center`}
                    onClick={() => (id > 1 ? router.push(`/categories/${id - 1}`) : {})}
                    disabled={id < 2}
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    className={`w-12 h-12 duration-300 rounded-lg bg-midGold disabled:bg-zinc-400 text-black grid place-content-center`}
                    onClick={() => router.push(`/categories/${id + 1}`)}
                    disabled={id >= allCategories.length}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={toTopV}
                className="md:grid hidden place-content-center opacity-40 duration-300 md:opacity-100"
              >
                <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        <div className="container pb-10">
          <h2 className="text-deepGold my-6 font-bold md:text-4xl text-2xl text-center">
            Nominate your Educational champion in these sub-category
          </h2>

          <div className="md:px-16 lg:px-32">
            {details && (
              <div className="space-y-8">
                {details.data.map((data, id) => (
                  <div key={id} className="space-y-2">
                    <div className="flex items-center gap-3 font-bold md:text-xl text-lg">
                      <p>{id + 1}.</p>
                      <p>{data.label}</p>
                    </div>
                    <div>
                      <select className="w-full border p-4 rounded-lg outline-none">
                        <option value="" className="text-zinc-500">
                          Please select an option {data.options.length > 1 && `e.g ${data.options[0].text}`}
                        </option>
                        {data.options.map((option, id) => (
                          <option value={option.value} key={id}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                <div className="pt-8">
                  <button
                    className="w-full bg-deepGold text-black font-semibold py-5 rounded-lg"
                    onClick={showModClick}
                  >
                    Submit Nominations
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 mt-16">
            <h3 className="font-bold text-2xl">Other Categories you can also nominate in</h3>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {allCategories
                .filter((el) => el.id !== id)
                .map((data, id) => (
                  <div
                    key={id}
                    className={`h-[26rem] w-auto rounded-2xl bg-darkGold overflow-hidden text-white relative`}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#181818a8]"></div>

                    <div className="py-8 px-6 absolute top-0 left-0 w-full h-full">
                      <div className="flex flex-col justify-between h-full">
                        <div className="w-16 h-16">
                          <Image src={"/images/logos/small_logo.png"} alt="medal" width={200} height={200} />
                        </div>

                        <p className="font-bold text-xl uppercase">{data.title}</p>
                        <p className="font-light leading-[1.8]">{data.description}</p>

                        <div>
                          <Link href={`/categories/${data.id}`}>
                            <button
                              className="bg-[#e0aa3e] w-fit px-5 text-sm font-semibold py-3 rounded-lg text-black"
                              style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
                            >
                              View Nominies
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoriesDetails;
