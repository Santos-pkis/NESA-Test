import Category from "@/components/UI/Home/category";
import AboutNewEducation from "@/components/UI/Home/about-new";
import Timeline from "@/components/UI/Home/timeline";
import HomeFaq from "@/components/UI/Home/faq";
import HomeHeader from "@/components/UI/Home/header";

const Page = () => {
  return (
    <>
      <HomeHeader />
      <main className="pb-8">
        {/* <Category /> */}
        {/* <HomePartners /> */}
        <AboutNewEducation />
        <Timeline />
        <HomeFaq />
      </main>
    </>
  );
};

export default Page;
