import Image from "next/image";
import styles from "./style.module.scss";

const Partners = () => (
  <div className={`inline-block ${styles["scroll-el"]}`}>
    {new Array(5).fill(null).map((_, id) => (
      <div key={id} className="inline mx-10">
        <Image src={`/images/logos/logo_${id + 1}.png`} alt="logo" width={150} height={150} className="inline" />
      </div>
    ))}
  </div>
);

export default Partners;
