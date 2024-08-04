import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface Category {
  title: string;
  description: string;
  subCategories?: SubCategory[];
}

interface SubCategory {
  title: string;
  description: string;
  nominees?: Nominee[];
}

interface Nominee {
  name: string;
  image: string;
  achievement: string;
}

  const categories = [
    {
      title: "Africa Lifetime Education Icon Special Recognition Award",
      description: "The Africa Lifetime Education Icon Special Recognition Award is the pinnacle of the NESA-Africa awards and the Santos Creations Educational Foundation. Envisioned as the Africa education advocacy Nobel award recognition, this prestigious accolade honors individuals from around the world who have dedicated their lives to advancing sustainable education for all in Africa, aligning with the United Nations Sustainable Development Goal 4 (SDG 4) - Quality Education.",
      subCategories: [
        {
          title: "Africa Education Philanthropy Icon Of The Decade (2014-2024)",
          description: "Honors significant philanthropic contributions that have improved educational access and quality, advancing SDG 4's targets.",
          nominees: [
            { name: "Aliko Dangote", image: "/images/aliko-dangote.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Mo Ibrahim", image: "/images/mo-ibrahim.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Strive Masiyiwa", image: "/images/strive-masiyiwa.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Strive Masiyiwa", image: "/images/strive-masiyiwa.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Strive Masiyiwa", image: "/images/strive-masiyiwa.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Strive Masiyiwa", image: "/images/strive-masiyiwa.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },

          ]
        },
        {
          title: "Literary And New Curriculum Advocate Africa Education Icon Of The Decade (2014-2024)",
          description: "Recognizes influential literary works and new curricula that address critical educational needs and challenges, fostering quality education.",
          nominees: [
            { name: "Ngũgĩ wa Thiong'o", image: "/images/ngugi-wa-thiongo.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Chinua Achebe", image: "/images/chinua-achebe.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Mariama Bâ", image: "/images/mariama-ba.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
          ]
        },
        {
          title: "Africa Technical Educator Icon Of The Decade (2014-2024)",
          description: "Celebrates pioneers in technical education and skills training, fostering entrepreneurship and innovation, supporting SDG 4's goals of inclusive and equitable education.",
          nominees: [
            { name: "Patrick Awuah", image: "/images/patrick-awuah.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Nabil Nuwashi", image: "/images/nabil-nuwashi.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Fred Swaniker", image: "/images/fred-swaniker.jpg", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
          ]
        }
      ]
    },
  {
    title: "The Overall Best NGO Contribution to Achieving Education for All in Nigeria 2024",
    description:
      "Celebrates NGOs that have made significant improvements in educational access, quality, and innovation from 2013-2024.",
  },
  {
    title: "Africa Diaspora association Educational Impact Projects Recognition Award in Africa",
    description:
      "Honoring the significant contributions made by diaspora organizations towards achieving \"Education for all\" across the African Continent.",
  },
  {
    title: "The Overall Best CSR for Education in Nigeria Award 2024",
    description:
      "Honoring corporate social responsibility by banks, telecommunications, and other sectors, and showing their impactful CSR initiatives that have ...",
  },
  {
    title: "CSR for Education special recognition award in Africa 2024",
    description:
      "Recognize the most outstanding educational technology companies that have made significant contributions to advancing education in Africa through...",
  },
  {
    title: "Best EduTech Organization in Nigeria and Africa 2024",
    description:
      "Acknowledges state governments that have demonstrated exemplary commitment and results in advancing education from 2013-2024.",
  },
  {
    title: "Overall best educational friendly state in Nigeria 2024",
    description:
      "Awards the tertiary institution that stands out in academic excellence, community engagement, and student support with notable ICT infrastructure.",
  },
  {
    title: "The best library in Nigerian tertiary institutions award 2024",
    description:
      "Recognizes libraries that have made exceptional contributions and excellence to educational research and innovation, thus shaping future educational strategies.",
  },
  {
    title: "The Overall Best Research and Development Contribution by Tertiary Institutions in Nigeria",
    description:
      "Recognizing media role in educational awareness and innovation. Awards media houses and organizations that effectively contribute to educational development.",
  },
  {
    title: "The Overall Best Media Organization in Nigeria with Outstanding Education Focus",
    description:
      "Honors exceptional media/news award programs for educational collaborations and contributes to Nigeria educational development.",
  },
  {
    title: "International and Bilateral Contributors to Education in Nigeria Recognition award 2024",
    description:
      "Honoring international bodies for their impactful cooperative efforts that significantly impact the educational sector.",
  },
  {
    title: "Christian faith organization Educational Champion of the Decade Award",
    description:
      "Recognizing Christian faith-based organizations for their outstanding contributions to education advancement.",
  },
  {
    title: "Islamic faith organization Educational Champion of the Decade Award in Nigeria (2013-2024)",
    description:
      "Celebrating Islamic faith-based organizations for their crucial role in advancing and diversifying educational opportunities.",
  },
  {
    title: "Recognition for the best educational support by a Political leaders in Nigeria 2024",
    description:
      "Award for both state and federal government officials who have championed STEM education and technological advancement in learning.",
  },
  {
    title: "Creative arts Industry contribution to education in Nigeria 2024",
    description:
      "Recognizing efforts towards advancing education through creative arts and dedication to achieving quality education under SDG 4 objectives.",
  },
  {
    title: "Support for education in STEM in Nigeria 2024",
    description:
      "Celebrating initiatives by any organization for creative arts role in education and promoting hands-on learning experiences.",
  },
];
const AwardCategory: React.FC<{
  category: Category;
  onSelectCategory: (category: Category) => void;
  isFirst?: boolean;
}> = ({ category, onSelectCategory, isFirst = false }) => {
  const truncateDescription = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const truncatedDescription = truncateDescription(category.description, isFirst ? 300 : 100);

  return (
    <div
      className={`bg-[#191307] text-white rounded-3xl flex ${
        isFirst ? 'flex-col lg:flex-row' : 'flex-col'
      } justify-between`}
      style={{
        width: '100%',
        maxWidth: isFirst ? '1280px' : '412px',
        height: 'auto',
      }}
    >
      <div className={`${isFirst ? 'w-full lg:w-1/2' : 'w-full'} p-6 flex justify-center items-center`}>
        <div className="relative" style={{
          width: isFirst ? '600px' : '364px',
          height: isFirst ? '400px' : '191px',
          maxWidth: '100%',
          aspectRatio: isFirst ? '600 / 400' : '364 / 191'
        }}>
          <Image
            src="/images/nesa-card2.png"
            alt="NESA Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div
        className={`${
          isFirst ? 'w-full lg:w-1/2' : 'w-full'
        } p-6 flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
          <p className="text-sm mb-4">{truncatedDescription}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => onSelectCategory(category)}
            className="w-full py-2 px-4 rounded-lg font-medium"
            style={{
              background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
              color: 'black',
            }}
          >
            See Sub-Categories
          </button>
        </div>
      </div>
    </div>
  );
};

const SubCategory: React.FC<{
  subCategory: SubCategory;
  onSelectSubCategory: (subCategory: SubCategory) => void;
}> = ({ subCategory, onSelectSubCategory }) => {
  return (
    <div className="bg-[#191307] text-white rounded-3xl flex flex-col justify-between" style={{ width: '100%', maxWidth: '412px', height: 'auto' }}>
      <div className="w-full p-6 flex justify-center items-center">
        <div className="relative" style={{ width: '364px', height: '191px', maxWidth: '100%', aspectRatio: '364 / 191' }}>
          <Image src="/images/nesa-card2.png" alt="NESA Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="w-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{subCategory.title}</h3>
          <p className="text-sm mb-4">{subCategory.description}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => onSelectSubCategory(subCategory)}
            className="w-full py-2 px-4 rounded-lg font-medium"
            style={{
              background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
              color: 'black',
            }}
          >
            Nominate
          </button>
        </div>
      </div>
    </div>
  );
};

const Nominee: React.FC<{ nominee: Nominee }> = ({ nominee }) => {
  return (
    <div className="bg-[#191307] text-white rounded-3xl p-4 flex flex-col justify-between" style={{ width: '412.33px', height: '540px' }}>
      <div>
        <div className="relative w-full mb-4" style={{ width: '364.33px', height: '240px' }}>
          <Image src={nominee.image} alt={nominee.name} layout="fill" objectFit="cover" className="rounded-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-2">{nominee.name}</h3>
        <p className="text-sm mb-4">{nominee.achievement}</p>
      </div>
      <button className="w-full py-2 px-4 rounded-lg font-medium mt-auto" style={{
        background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
        color: 'black',
      }}>
        Review
      </button>
    </div>
  );
};

const JudgePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSelectSubCategory = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              className="w-full max-w-[400px] h-[40px] pl-10 pr-4 py-2 rounded-lg"
              style={{
                background: '#FFF5E0',
                padding: '12px 20px 12px 40px',
                marginTop: '40px',
                marginLeft: '10px',
              }}
            />
            <IoIosSearch
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
              style={{ marginTop: '20px' }}
            />
          </div>
        </div>
        {selectedCategory && (
          <button onClick={handleBack} className="mb-4">← Back</button>
        )}
        <div className="text-center mt-12">
          {!selectedCategory && !selectedSubCategory && (
            <h2 className="text-3xl font-medium mb-1">
              The Blue Garnet Award Categories
            </h2>
          )}
          {selectedCategory && !selectedSubCategory && (
            <h2 className="text-3xl font-medium mb-1">
              {selectedCategory.title}
            </h2>
          )}
          {selectedSubCategory && (
            <h2 className="text-3xl font-medium mb-1">
              The Nominee Profiles
            </h2>
          )}
          <div
            className="mx-auto mb-8"
            style={{
              height: '4px',
              width: '150px',
              borderRadius: '8px',
              margin: '0 auto 2rem',
              background:
                'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
            }}
          ></div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8">
          {!selectedCategory && (
            <>
              <AwardCategory
                key={0}
                category={filteredCategories[0]}
                onSelectCategory={handleSelectCategory}
                isFirst={true}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.slice(1).map((category, index) => (
                  <AwardCategory
                    key={index + 1}
                    category={category}
                    onSelectCategory={handleSelectCategory}
                  />
                ))}
              </div>
            </>
          )}
          {selectedCategory && selectedCategory.subCategories && !selectedSubCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.subCategories.map((subCategory, index) => (
                <SubCategory
                  key={index}
                  subCategory={subCategory}
                  onSelectSubCategory={handleSelectSubCategory}
                />
              ))}
            </div>
          )}
          {selectedSubCategory && selectedSubCategory.nominees && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {selectedSubCategory.nominees.map((nominee, index) => (
                <Nominee key={index} nominee={nominee} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JudgePage;