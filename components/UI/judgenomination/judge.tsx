import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface AwardCategoryProps {
  title: string;
  description: string;
  router: any;
}

const categories = [
  {
    title: "NGO Contribution To Education in Nigeria",
    description:
      "Celebrates NGOs that have made significant improvements in educational access, quality, and innovations in Nigeria.",
  },
  {
    title: "Corporate Social Responsibility (CSR) in Education",
    description:
      "Honoring CSR by banks, telecoms, and other sectors, showing commitment to educational development.",
  },
  {
    title: "Faith-Based Organization Contribution to Education",
    description:
      "Honors faith-based organizations that significantly contributed to educational, moral, and community development.",
  },
  {
    title: "State Government Education Initiatives",
    description:
      "Acknowledges state governments demonstrating outstanding commitment and results in education from 2013 - 2024.",
  },
  {
    title: "Nigeria Tertiary Institution",
    description:
      "Awards the tertiary institution excelling in academic excellence, community engagement, and student support with ICT infrastructure.",
  },
  {
    title: "Education In Schools",
    description:
      "Recognizes secondary schools for fostering innovation in education and student support with ICT infrastructure.",
  },
  {
    title: "Research Institutions",
    description:
      "Recognizes research institutes for their exceptional contributions to educational research and development in Nigeria.",
  },
  {
    title: "Media Organization and Houses",
    description:
      "Recognizes media for educational awareness and coverage, effectively amplifying educational issues and achievements.",
  },
  {
    title: "International Contributors to Education in Nigeria",
    description:
      "Honoring international sectors showing commitment to educational development through corporate social responsibility.",
  },
  {
    title: "Nigerian Associations Abroad",
    description:
      "Celebrates the diaspora's contributions to supporting and enhancing education in Nigeria.",
  },
  {
    title: "Political Leadership in Education",
    description:
      "Honoring educational initiatives by lawmakers, for legislative efforts that significantly impact the education sector.",
  },
  {
    title: "Special Recognition Awards",
    description:
      "Recognizing philanthropy and leadership for their outstanding contributions to education.",
  },
  {
    title: "Creative Arts Industry Contribution to Education",
    description:
      "Celebrates arts organizations for enriching and diversifying educational experiences through creative initiatives.",
  },
  {
    title: "Support for Education in Science and Technology",
    description:
      "Awards tech-based and STEM initiatives for championing STEM education and technological advancements in learning.",
  },
  {
    title: "Excellence in Promoting SDG 4 Achievement",
    description:
      "Recognizes efforts towards achieving SDG 4, for dedication to quality education under SDG 4.",
  },
];

const AwardCategory: React.FC<AwardCategoryProps> = ({
  title,
  description,
  router,
}) => (
  <div className="bg-[#191307] text-white p-2 rounded-3xl flex flex-col justify-between h-full">
    <div>
      <div className="w-full mb-2 p-4">
        <Image
          className="w-full"
          src="/images/nesa-card.png"
          alt="NESA Logo"
          width={250}
          height={0}
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4" style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </div>
    </div>
    <div className="p-2">
      <button
        onClick={() => {
          console.log("Button clicked");
          router.push("/judge/sub-category");
        }}
        className="w-full mt-auto py-2 px-4 rounded-lg font-medium"
        style={{
          background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
          color: "black",
        }}
      >
        See Sub-Categories
      </button>
    </div>
  </div>
);

const JudgePage: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-8" style={{ marginBottom: "1rem" }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className="w-[400px] h-[40px] pl-10 pr-4 py-2 rounded-semi"
              style={{
                background: "#FFF5E0",
                padding: "12px 20px 12px 40px",
                borderRadius: "8px",
                marginTop: "40px",
                marginLeft: "10px",
                gap: "24px",
              }}
            />
            <IoIosSearch
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-medium mb-1">
            The Blue Garnet Award Categories
          </h2>
          <div
            className="mx-auto mb-8"
            style={{
              height: "4px",
              width: "150px",
              borderRadius: "8px",
              margin: "0 auto 2rem",
              background:
                "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
            }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredCategories.map((category, index) => (
            <AwardCategory key={index} router={router} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgePage;
