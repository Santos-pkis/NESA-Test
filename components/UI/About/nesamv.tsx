import Image from "next/image";

const NESAAfrica = () => {
  return (
    <section className="bg-[#FFF5E0] text-[#1a1a1a] px-4 md:px-10 py-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-[#E48900] pl-3">
          Why NESA Africa
        </h2>
        <span className="bg-gradient-to-r from-[#febf44] to-[#ed9d19] h-1 w-24 md:w-36 absolute -bottom-2 left-0"></span>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Mission */}
        <div className="space-y-4">
          <div className="rounded-xl border-4 border-[#E48900] overflow-hidden">
            <Image
              src="images/about1.png"
              alt="Mission"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Mission 🎯
            </h3>
            <p className="text-sm md:text-base">
              To drive sustainable transformation in education by recognizing outstanding contributions, fostering innovation, and strengthening collaboration among key stakeholders in Africa and beyond.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="space-y-4">
          <div className="rounded-xl border-4 border-[#E48900] overflow-hidden">
            <Image
              src="images/about2.png"
              alt="Vision"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Vision 🌍
            </h3>
            <p className="text-sm md:text-base">
              By 2030, NESA Africa will be the leading education impact awards and initiative in Africa, facilitating investment in education, promoting innovative learning solutions, and ensuring inclusive access to quality education for all children and youth across the continent.
            </p>
          </div>
        </div>
      </div>

      {/* SMART Goals */}
      <div className="max-w-xl mt-5">
        <h4 className="text-lg md:text-xl font-semibold mb-4">
          The NESA SMART Goals (2025–2030) for Sustainable Impact
        </h4>
        <ul className="space-y-3 text-sm md:text-base list-disc list-inside">
          <li className="before:content-['>'] before:mr-2 before:text-[#E48900]">
            Specific Goals (S)
          </li>
          <li className="before:content-['>'] before:mr-2 before:text-[#E48900]">
            Measurable Goals (M)
          </li>
          <li className="before:content-['>'] before:mr-2 before:text-[#E48900]">
            Achievable Goals (A)
          </li>
          <li className="before:content-['>'] before:mr-2 before:text-[#E48900]">
            Relevant Goals (R)
          </li>
          <li className="before:content-['>'] before:mr-2 before:text-[#E48900]">
            Time Bound Goals (T)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NESAAfrica;
