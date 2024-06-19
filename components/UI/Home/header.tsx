import Image from "next/image";
import HeroCenter from "./hero-center";
import styles from "@/components/Common/Slide/style.module.scss";

const HomeHeader = () => {
  return (
    <header>
      <div className={`md:min-h-[60rem] min-h-[85rem] z-[4] bg-[#17120a] text-white relative ${styles.homeHeader}`}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={"/images/header.png"}
            alt="hero image"
            width={12400}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-transparent via-[#f7b23258] to-transparent"></div>

        <div className="absolute top-0 left-0 h-full w-full text-center pt-[3rem]">
          <HeroCenter />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
