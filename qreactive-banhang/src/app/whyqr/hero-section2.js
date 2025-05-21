import styles from "./Hero Section.module.css";

const HeroSection2 = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.herocta}>
        <div className={styles.unlockThePowerContainer}>
          <p className={styles.unlockThePower}>Unlock the Power of QR Codes</p>
          <p className={styles.unlockThePower}>with Qreactive</p>
        </div>
        <div className={styles.discoverTheConvenienceContainer}>
          <p
            className={styles.unlockThePower}
          >{`Discover the convenience, user-friendly interface, and versatility of `}</p>
          <p className={styles.unlockThePower}>
            QR code types with Qreactive. Simplify your digital interactions and
          </p>
          <p className={styles.unlockThePower}>
            engage your audience like never before.
          </p>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.contain}>
            <div className={styles.convenience}>Convenience</div>
            <div className={styles.text}>
              <p className={styles.unlockThePower}>
                Save time and effort with Qreactive's
              </p>
              <p
                className={styles.unlockThePower}
              >{`seamless QR code scanning and `}</p>
              <p className={styles.unlockThePower}>interaction process.</p>
            </div>
          </div>
          <div className={styles.contain}>
            <div className={styles.convenience}>User-Friendly</div>
            <div className={styles.text}>
              <p
                className={styles.unlockThePower}
              >{`Experience Qreactive's intuitive `}</p>
              <p className={styles.unlockThePower}>
                interface designed to make QR code
              </p>
              <p className={styles.unlockThePower}>management effortless.</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src="/placeholder-image1@2x.png"
      />
    </div>
  );
};

export default HeroSection2;
