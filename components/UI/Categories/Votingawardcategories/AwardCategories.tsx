import Image from 'next/image';

interface AwardCategoryProps {
  title: string;
  description: string;
}

const categories = [
  { title: "NGO Contribution To Education in Nigeria", description: "Celebrates NGOs that have made significant improvements in educational access, quality, and innovations in Nigeria." },
  { title: "Corporate Social Responsibility (CSR) in Education", description: "Honoring CSR by banks, telecoms, and other sectors, showing commitment to educational development." },
  { title: "Faith-Based Organization Contribution to Education", description: "Honors faith-based organizations that significantly contributed to educational, moral, and community development." },
  { title: "State Government Education Initiatives", description: "Acknowledges state governments demonstrating outstanding commitment and results in education from 2013 - 2024." },
  { title: "Nigeria Tertiary Institution", description: "Awards the tertiary institution excelling in academic excellence, community engagement, and student support with ICT infrastructure." },
  { title: "Education In Schools", description: "Recognizes secondary schools for fostering innovation in education and student support with ICT infrastructure." },
  { title: "Research Institutions", description: "Recognizes research institutes for their exceptional contributions to educational research and development in Nigeria." },
  { title: "Media Organization and Houses", description: "Recognizes media for educational awareness and coverage, effectively amplifying educational issues and achievements." },
  { title: "International Contributors to Education in Nigeria", description: "Honoring international sectors showing commitment to educational development through corporate social responsibility." },
  { title: "Nigerian Associations Abroad", description: "Celebrates the diaspora's contributions to supporting and enhancing education in Nigeria." },
  { title: "Political Leadership in Education", description: "Honoring educational initiatives by lawmakers, for legislative efforts that significantly impact the education sector." },
  { title: "Special Recognition Awards", description: "Recognizing philanthropy and leadership for their outstanding contributions to education." },
  { title: "Creative Arts Industry Contribution to Education", description: "Celebrates arts organizations for enriching and diversifying educational experiences through creative initiatives." },
  { title: "Support for Education in Science and Technology", description: "Awards tech-based and STEM initiatives for championing STEM education and technological advancements in learning." },
  { title: "Excellence in Promoting SDG 4 Achievement", description: "Recognizes efforts towards achieving SDG 4, for dedication to quality education under SDG 4." },
];

const AwardCategory: React.FC<AwardCategoryProps> = ({ title, description }) => (
  <div className="bg-[#191307] text-white p-2 rounded-3xl flex flex-col justify-between h-full">
    <div>
      <div className="w-full mb-2 p-4">
        <Image className='w-full' src="/images/nesa-card.png" alt="NESA Logo" width={250} height={0} />
      </div>
      <div className='p-2'>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4" style={{ whiteSpace: 'pre-line' }}>{description}</p>
      </div>
    </div>
    <div className='p-2'>
      <button className="w-full mt-auto bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium">
        See Sub-Categories
      </button>
    </div>
  </div>
);

const AwardCategories = () => {
  return (
    <div className="bg-yellow-50 py-20"> {/* Increased top and bottom padding */}
      <div className="max-w-6xl mx-auto px-4">
        <div className='mb-12'> {/* Increased bottom margin */}
          <h2 className="text-3xl font-medium mb-2">The Blue Garnet Award Categories</h2>
          <div className="h-1 w-40 bg-[#E48900] rounded-xl"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <AwardCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCategories;
