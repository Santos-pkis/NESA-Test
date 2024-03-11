"use client";

import { useState } from "react";

const shortDescription = `Welcome to New Education Standard Award Africa (NESA Africa), where we honor the collective journey towards educational excellence and transformation across Nigeria and Africa over the past decade. At NESA Africa, we are poised to celebrate the monumental efforts and contributions of organizations, individuals, companies, and institutions that have significantly advanced our journey towards the universal goal of education for all.

Over the span of ten years, from 2013 to 2023, Nigeria, alongside the broader African continent, has experienced transformative shifts in education, brought to life by the dedication of countless stakeholders. These changes range from improvements in educational infrastructures and curricula to the implementation of impactful Corporate Social Responsibility (CSR) projects, each effort contributing to a shared objective of enhancing education for every child in Nigeria and across Africa.`;

const description = `Welcome to New Education Standard Award Africa (NESA Africa), where we honor the collective journey towards educational excellence and transformation across Nigeria and Africa over the past decade. At NESA Africa, we are poised to celebrate the monumental efforts and contributions of organizations, individuals, companies, and institutions that have significantly advanced our journey towards the universal goal of education for all.

Over the span of ten years, from 2013 to 2023, Nigeria, alongside the broader African continent, has experienced transformative shifts in education, brought to life by the dedication of countless stakeholders. These changes range from improvements in educational infrastructures and curricula to the implementation of impactful Corporate Social Responsibility (CSR) projects, each effort contributing to a shared objective of enhancing education for every child in Nigeria and across Africa.

NESA Africa's award categories are thoughtfully designed to honor the extensive range of actions that have catalyzed this educational transformation. Whether it’s NGOs ensuring inclusivity, corporations weaving educational support into their CSR missions, pioneering educational institutions reshaping the learning landscape, or individuals championing policy reforms, each contributor has played a vital role in this decade-long narrative of progress.

As you navigate our website, you'll encounter the inspiring tales of our awardees: the challenges they've overcome, their notable successes, and the enduring impact of their work. These stories stand as a testament to the remarkable achievements possible when commitment is matched with action in the educational realm.
We invite you to embark on this celebratory journey with us, recognizing a decade of educational excellence and transformation in Nigeria and across Africa. Through these narratives of achievement and progress, NESA Africa aims to spark continued efforts and dedication towards fostering an inclusive and quality education system across the continent.


Welcome to NESA Africa, where every recognition marks a significant milestone in our shared quest towards a brighter educational future for all.
________________________________________
`;

const NesaAfricaHeader = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header
      className={`${
        !expanded ? "md:min-h-[50rem]" : "md:min-h-[70rem]"
      } min-h-screen bg-[#1e1e1e] text-white z-[100] flex items-center pt-28 md:pt-10`}
    >
      <div className="container space-y-8">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-deepGold">
          NESA AFRICA: Igniting Excellence in African Education
        </h1>
        <div className={`space-y-5 inline-block md:text-lg whitespace-pre-line`}>
          {expanded ? description : shortDescription}
        </div>
        {!expanded ? (
          <button className="text-midGold" onClick={() => setExpanded(true)}>
            Read More
          </button>
        ) : (
          <button className="text-midGold" onClick={() => setExpanded(false)}>
            See Less
          </button>
        )}
      </div>
    </header>
  );
};

export default NesaAfricaHeader;
