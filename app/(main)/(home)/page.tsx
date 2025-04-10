"use client";
import React from "react";
import Category from "@/components/UI/Home/category";
import AboutNewEducation from "@/components/UI/Home/about-new";
import Timeline from "@/components/UI/Home/timeline";
import HomeFaq from "@/components/UI/Home/faq";
import HomeHeader from "@/components/UI/Home/header";
import HomePartners from "@/components/UI/Home/partners";
import Judges from "@/components/UI/Home/judges";
import GetInvolved from "@/components/UI/Home/get-involved";
import AwardCategories from "@/components/UI/Home/Award-categories";
import Refer from "@/components/UI/Home/refer";
import MerchSection from "@/components/UI/Home/merch";
import LocalChapterSection from "@/components/UI/Home/localchapter";
import CountdownTimer from "@/components/Common/Others/countdown";


const Page = () => {
  return (
    <>
      <HomeHeader />
      <main className="pb-8">
      <CountdownTimer 
        onTimeUpdate={(time) => ''} 
        targetDateProp="2025-04-10T17:40:00Z" 
      />

        <AwardCategories />
        <AboutNewEducation />
        <HomePartners />
        <Category />
        <Judges />
        <GetInvolved />
        <Refer />
        <Timeline />
        <MerchSection />
        <LocalChapterSection />
        <HomeFaq />
      </main>
    </>
  );
};

export default Page;
