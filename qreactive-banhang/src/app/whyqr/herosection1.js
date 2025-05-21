import styles from "./Hero.module.css";

const Herosection1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroSection}>
        <div className={styles.herocta}>
          <div className={styles.unleashYourCreativeContainer}>
            <p className={styles.unleashYourCreative}>Unleash Your Creative</p>
            <p className={styles.unleashYourCreative}>
              Potential with Qreactive
            </p>
          </div>
          <div className={styles.qreactiveIsNot}>
            Qreactive is not just another design tool. It's a game-changer that
            empowers you to create stunning visuals effortlessly.
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.button1}>
              <div className={styles.button}>
                <div className={styles.button2}>Learn More</div>
              </div>
            </button>
            <button className={styles.button21}>
              <div className={styles.button22}>
                <div className={styles.button3}>Sign Up</div>
                <img
                  className={styles.iconChevronRight}
                  alt=""
                  src="/icon--chevronright.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <img
          className={styles.placeholderImageIcon}
          alt=""
          src="/placeholder-image@2x.png"
        />
      </div>
    </div>
  );
};

export default Herosection1;
