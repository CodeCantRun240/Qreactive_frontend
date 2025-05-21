import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.unlockYourPontentialContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>UNLOCK YOUR PONTENTIAL</p>
      </div>
      <div className={styles.experienceThePower}>
        Experience the power of Qreactive web features and revolutionize your
        business.
      </div>
    </div>
  );
};

export default Header;
