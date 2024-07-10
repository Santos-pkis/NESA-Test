import Image from 'next/image'
import styles from './page.module.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { GiThorHammer } from "react-icons/gi";
import { FaMoneyBills } from "react-icons/fa6";

export default function Register() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/signup.png"
              alt="NESA Branding"
              width={480}
              height={100}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h1 className={styles.title}>Create your Account</h1>
          <p className={styles.subtitle}>Get Ready to Celebrate Excellence and unveil the nominees</p>
          <button className={styles.scefButton}>
            <span className={styles.scefLogo}>SCEF</span> Sign Up with SCEF
          </button>
          <div className={styles.orDivider}>
            <span>Or</span>
          </div>
          <form className={styles.signupForm}>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="accountType" value="member" />
                <span className={styles.icon}><IoPersonSharp /></span>
                <span className={styles.accountType}>Member</span>
                <p>Sign up as a member and champion outstanding achievement and directly contribute to recognizing outstanding educators across the globe.</p>
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="accountType" value="nominee" />
                <span className={styles.icon}><FaAward /></span>
                <span className={styles.accountType}>Nominee</span>
                <p>Sign up as a nominee and showcase your achievements and contributions in the field of education, gaining recognition and support from the community.</p>
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="accountType" value="judge" />
                <span className={styles.icon}><GiThorHammer /></span>
                <span className={styles.accountType}>Judge</span>
                <p>Sign up as a judge and become a vital part of recognizing excellence in the community. We value your expertise and invite you to join our team of judges.</p>
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="accountType" value="sponsor" />
                <span className={styles.icon}><FaMoneyBills /></span>
                <span className={styles.accountType}>Sponsor</span>
                <p>Sign up as a sponsor and support the recognition of outstanding achievement in education and the community, making a lasting impact.</p>
              </label>
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.continueButton}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}