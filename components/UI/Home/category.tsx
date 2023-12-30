"use client";
import Image from "next/image";
import styles from "./style.module.scss";

const awards = [
  {
    image: "/images/girl.jpg",
    title: "FAITH-BASED ORGANIZATION COCNTRIBUTIONS TO EDUCATION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
  {
    image: "/images/girl.jpg",
    title: "NGO CONTRIBUTION TO EDUCTION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
  {
    image: "/images/girl.jpg",
    title: "CORPORATE SOCIAL RESPONSIBILITY (CSR) IN EDUCATION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
];

const Category = () => {
  return (
    <section className="py-[6rem] container">
      <div className="space-y-5">
        <h2 className="_under_border font-bold text-sm text-darkGold">NOMINATION CATEGORY</h2>

        <p className="font-bold text-gray-800 text-3xl">
          Celebrating Unsung Heroes: <span className="font-black">Nominate Today!</span>
        </p>

        <div className="overflow-hidden space-x-3 whitespace-nowrap">
          {awards.map((award, id) => (
            <div
              key={id}
              className={`h-[26rem] rounded-3xl inline-block aspect-[5/7] w-auto bg-darkGold overflow-hidden text-white relative`}
            >
              <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                <Image src={"/images/medal.png"} alt="medal" width={100} height={300} />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#181818a8] p-5">
                <div>
                  <div className="w-16 h-16 border-2 rounded-full border-deepGold overflow-hidden">
                    <Image src={award.image} alt="medal" width={200} height={200} />
                  </div>

                  <div className="max-w-[3rem]">
                    <p>{award.title}</p>
                    <p>{award.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
