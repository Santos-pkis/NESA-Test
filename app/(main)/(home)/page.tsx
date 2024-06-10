import Category from "@/components/UI/Home/category";
import AboutNewEducation from "@/components/UI/Home/about-new";
import Timeline from "@/components/UI/Home/timeline";
import HomeFaq from "@/components/UI/Home/faq";
import HomeHeader from "@/components/UI/Home/header";
import HomePartners from "@/components/UI/Home/partners";
import Judges from "@/components/UI/Home/judges";

const Page = () => {
  return (
    <>
      <HomeHeader />
      <main className="pb-8">
        {/* <HomePartners /> */}
        <AboutNewEducation />
        <HomePartners />
        <Category />
        <Judges />
        <Timeline />
        <HomeFaq />
      </main>
    </>
  );
};

export default Page;
