"use client";
import { ChevronRight } from "lucide-react";
import Button from "@/components/Common/Button";
import useSlider from "@/lib/hooks/useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getjudgesapplicants } from "@/lib/services/getjugdesApplicants";
import { useRouter } from "next/navigation";
import { getApprovedJudges } from "@/lib/services/getApprovedJudges";


type Judge = {
    id: string;
    full_name: string;
    current_role: string;
    linkedin_profile: string;
    email: string;
    country: string;
    reason: string;
    document: string;
    updatedAt: string;
    createdAt: string;
};


const staticJudges: { name: string; role: string; image: string }[] = [
  {
    name: "Benneth Osarieme Ogbeiwi (Uncle Ben)",
    role: "Head at Adrenaline Entertainment\nFormer Host at MTN Project Fame",
    image: "/images/judg1.png"
  },
  {
    name: "Dr Juliet Ihiabe",
    role: "Executive Director of Family Bond Helping Foundation",
    image: "/images/judg2.png"
  },
  {
    name: "Paul-Kayode Joash",
    role: "Chief Rainmaker at MyDoubleDouble International",
    image: "/images/judg3.png"
  },
  {
    name: "Oluwadaisi Patricia Aderibigbe Santos",
    role: "Educationalist",
    image: "/images/judg4.png"
  },
  {
    name: "Damilola O.",
    role: "QHSSE Manager",
    image: "/images/judg5.png"
  }
];

const BACKEND_URL = ' https://res.cloudinary.com/djovn7g8q/';

// const imageUrl = `${BACKEND_URL}/${judge.upload_profile_image}`;

const Judges = () => {
  const router = useRouter();
  const { sliderRef: ref, moveLeft, moveRight } = useSlider();
  const [remoteJudges, setRemoteJudges] = useState<Judge[]>([]);
  useEffect(() => {
    const fetchJudges = async () => {
      try {
        const data = await getApprovedJudges();
        setRemoteJudges(data);
        console.log(data)
      } catch (err) {
        console.error("Failed to fetch judges:", err);
      }
    };

    fetchJudges();
  }, []);

  return (
    <div>
      <div className="min-h-[50rem] relative flex items-center mx-auto" style={{ backgroundColor: "#FFF5E0" }}>


        <div className="container  text-white space-y-16 py-10">
          <div className="space-y-2">
        <h3 className="_under_border lg:text-[32px] text-[20px] font-poppins leading-[38px] font-semibold text-[#191307] lg:mb-10 mb-8 mt-2 lg:-mt-5">Meet some of our Judges</h3>
        <div className="grid md:grid-cols-2 min-w-screen">
        <p className="font-poppins font-normal md:leading-[30px] tracking-[1%] md:text-[18px] text-black w-[74vw]">At the New Education Standard Award Africa (NESA-Africa) 2025, our esteemed panel of judges brings together education leaders, innovators, philanthropists, policymakers, and experts across Africa and the diaspora. They are responsible for ensuring fairness, transparency, and credibility in evaluating nominees across 17 major categories and 141 specialized sub-categories — covering media, corporate social responsibility, NGOs, diaspora contributions, STEM education, and more.
<span>Each judge is carefully vetted for integrity, expertise, and commitment to advancing education for all. </span>
</p>
                <div className="flex justify-end items-end">
                <button onClick={() => router.push("/about-judges")} className="flex text-primaryGold items-center gap-2">
                <p>see all Judges</p>
                <ChevronRight />
                </button>
                </div>
                </div>
          </div>
          <div             style={{
              backgroundImage: "url('/images/bg/judgebg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
            }}>
            <div
            className=" flex items-center sm:justify-center md:justify-between overflow-x-auto hide_scroll scroll-smooth w-screen md:px-12 px-4 lg:space-x-4 space-x-4 pb-10 pt-6"
            ref={ref}

            >
 {/* Static judges */}
      {staticJudges.map((judge, id) => (
        <div
          key={`static-${id}`}
          className="flex-shrink-0 bg-white lg:w-[23%] md:w-[34%] w-[104%] md:h-[350px] h-[450px] rounded-xl overflow-hidden relative bg-cover bg-center"
          style={{ backgroundImage: `url(${judge.image})` }}
        >
          <div className="absolute bottom-0 w-full bg-black/60 text-white p-2">
            <h3 className="text-lg font-semibold leading-tight">{judge.name}</h3>
            <p className="text-sm whitespace-pre-line">{judge.role}</p>
          </div>
        </div>
      ))}

      
      {/* Remote judges */}
      {remoteJudges.map((judge, id) => {
        const imageSrc = "/images/nesa-mg.png";
        // judge.upload_profile_image
        //   ? `${BACKEND_URL}/${judge.upload_profile_image}`
        //   : "/images/nesa-mg.png";

        return (
          <div
            key={id}
            className="flex-shrink-0 lg:w-[23%] w-[34%] h-[350px] rounded-xl overflow-hidden relative bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
              <h3 className="text-lg font-semibold leading-tight">{judge.full_name}</h3>
              <p className="text-sm">{judge.reason}</p>
            </div>
          </div>
        );
      })}


            </div>

          <div className="px-6 pl-14 flex items-center justify-between pb-6">
        <div className="flex items-center space-x-2">
          {Array.from({ length: 5 }).map((_, id) => (
            <div
          key={id}
          className={`w-3 h-3 rounded-full bg-white cursor-pointer ${id === 0 ? "bg-primaryGold" : "bg-primaryGold"}`}
            ></div>
          ))}
        </div>
        <div className="flex  items-center space-x-2 text-white">
          <button className="size-12  rounded-full bg-black bg-opacity-80 grid place-content-center" onClick={moveLeft}>
            <ArrowLeft />
          </button>
          <button className="size-12 rounded-full bg-white text-black grid place-content-center" onClick={moveRight}>
            <ArrowRight />
          </button>
        </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;