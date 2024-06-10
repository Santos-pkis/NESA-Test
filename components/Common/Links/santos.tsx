import Link from "next/link";

const SantosLink = () => {
  return (
    <Link
      href={"https://santoscreations.org/"}
      target="_blank"
      className="border-b duration-300 border-primaryGold/60 hover:border-primaryGold/20"
    >
      Santos Creations Educational Foundation
    </Link>
  );
};

export default SantosLink;
