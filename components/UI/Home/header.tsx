import Image from "next/image";
import HeroCenter from "./hero-center";
import styles from "@/components/Common/Slide/style.module.scss";

const HomeHeader = () => {
  return (
    <header>
      <div className={`min-h-[58rem] z-[4] bg-zinc-200 text-white relative ${styles.homeHeader}`}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/bg/home_back.png"}
            alt="hero image"
            width={12400}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 h-full w-full text-center pt-[3rem]">
          <HeroCenter />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
