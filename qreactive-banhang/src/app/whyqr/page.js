import Head from "next/head";
import Header from "./header";
import Herosection1 from "./herosection1";
import PosQR from "./pos-q-r";
import HeroSection2 from "./hero-section2";
import Community from "./community";
import styles from "./index.module.css";

const WhyQRPage = () => {
  return (
    <div className={styles.whyQrPage}>
      <Header />
      <Herosection1 />
      <PosQR />
      <div className={styles.hero}>
        <HeroSection2 />
      </div>
      <Community />
    </div>
  );
};

export default WhyQRPage;
