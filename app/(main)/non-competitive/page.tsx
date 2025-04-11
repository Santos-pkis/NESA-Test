'use client'
import AboutNewEducation from "@/components/UI/Home/about-new";
import Timeline from "@/components/UI/Home/timeline";
import HomeFaq from "@/components/UI/Home/faq";
import HomeHeader from "@/components/UI/Home/header";
import HomePartners from "@/components/UI/Home/partners";
import Judges from "@/components/UI/Home/judges";
import GetInvolved from "@/components/UI/Home/get-involved";
import AwardCategories from "@/components/UI/Home/Award-categories";
import NonCompetitiveHeader from "@/components/UI/Home/non-competitve-header";
import Whynominate from "@/components/UI/competitve-nominate/whynominate";
import HowToNominate from "@/components/UI/competitve-nominate/howtonominate";
import Category from "@/components/UI/competitve-nominate/nominatecategories";
import CountdownTimer from "@/components/Common/Others/countdown";

const Page = () => {
  const categoryData = [
    {
      title: "Best Educational-Friendly State (Nigeria by Zone)",
      description: "Awards the tertiary institution that stands out in academic excellence, community engagement, and student support with Library facilities ICT infastructure.",
      subCategoryPath: "/nomination/sub-categories/africa-lifetime-education-icon"
    },
    {
      title: "Best Tertiary Institution Libraries (Universities, Polytechnics, Colleges)",
      description: "We recognize research institutes for their exceptional contributions and excellence to educational research and development in Nigeria, shaping future educational strategies.",
      subCategoryPath: "/nomination/sub-categories/best-ngo-contribution"
    },
    {
      title: "Best Research Institutes",
      description: "We recognize research institutes for their exceptional contributions and excellence to educational research and development in Nigeria, shaping future educational strategies.",
      subCategoryPath: "/nomination/sub-categories/africa-diaspora-impact"
    },
    {
      title: "Faith-Based Education Champions (Christian & Islamic)",
      description: "The Africa Lifetime Education Icon Special Recognition Award is the pinnacle of the NESA-Africa awards and the Santos Creations Educational Foundation. Envisioned as the Africa education advocacy Nobel award recognition, this prestigious accolade honors individuals from around the world who have dedicated their lives to advancing sustainable education for all in Africa, aligning with the United Nations Sustainable Development Goal 4 (SDG 4) - Quality Education.",
      subCategoryPath: "/nomination/sub-categories/best-csr-education"
    },
    {
      title: "Political Leaders’ Education Support Services",
      description: "Recognizing philanthropy and leadership contributions for their outstanding contributions to education.",
      subCategoryPath: "/sub-categories/csr-education-africa"
    },
    {
      title: "STEM Education Champions",
      description: "Celebrates NGOs that have made significant improvements in educational access, quality, and innovation from 2013-2024.",
      subCategoryPath: "/nomination/sub-categories/best-edutech-organization"
    },
    {
      title: "Diaspora Education Impact Awards",
      description: "Celebrates NGOs that have made significant improvements in educational access, quality, and innovation from 2013-2024.",
      subCategoryPath: "/sub-categories/best-educational-state"
    },
    {
      title: "International & Bilateral Contributors to Education in Africa",
      description: "Celebrates NGOs that have made significant improvements in educational access, quality, and innovation from 2013-2024.",
      subCategoryPath: "/nomination/sub-categories/best-library"
    }
    
  ];
  
  const title = "Categories in the Non-Competitive Categories"
  

  return (
    <>
      <NonCompetitiveHeader categoryData={categoryData} />
      <main className="pb-8">
      <CountdownTimer 
        onTimeUpdate={(time) => ''} 
        targetDateProp="2025-09-10T19:55:00Z" 
      />
      <Whynominate />
      <HowToNominate />
      <Category categoryData={categoryData} head={title} />
      </main>
    </>
  );
};

export default Page;
