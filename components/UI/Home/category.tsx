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

        <div className={`overflow-hidden flex items-center relative space-x-4 ${styles["award_con"]}`}>
          <AwardsScroll />
          <AwardsScroll />
          <AwardsScroll />
        </div>
      </div>
    </section>
  );
};

export const AwardsScroll = () => {
  return (
    <div className={`space-x-4 inline-flex items-center flex-shrink-0 ${styles["scroll-el"]}`}>
      {awards.map((award, id) => (
        <div
          key={id}
          className={`h-[26rem] aspect-[5/7] w-auto rounded-2xl bg-darkGold overflow-hidden text-white relative`}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
            <Image src={"/images/medal.png"} alt="medal" width={100} height={300} />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[#181818a8]"></div>

          <div className="py-8 px-5 absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="w-16 h-16 border-2 rounded-full border-deepGold overflow-hidden">
                <Image src={award.image} alt="medal" width={200} height={200} />
              </div>

              <p className="font-bold  text-lg">{award.title}</p>
              <p className="font-light">{award.description}</p>

              <button className="border-[#e0aa3e] w-full text-sm font-semibold py-2 rounded-lg border-2 bg-[#191307]">
                Nominate your NGO champion
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Partners = () => (
  <div className={`inline-block ${styles["scroll-el"]}`}>
    {new Array(5).fill(null).map((_, id) => (
      <div key={id} className="inline mx-6">
        <Image src={`/images/logos/logo_${id + 1}.png`} alt="logo" width={150} height={150} className="inline" />
      </div>
    ))}
  </div>
);

export default Category;
