import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.innerfooter}>
        <div className={styles.links}>
          <div className={styles.column1}>
            <div className={styles.learnMore}>Learn More</div>
            <button className={styles.aboutQreactive}>About Qreactive</button>
            <button
              className={styles.aboutQreactive}
            >{`Private & Policy`}</button>
            <button className={styles.contactUs}>Contact Us</button>
          </div>
          <div className={styles.column1}>
            <div className={styles.learnMore}>Support</div>
            <button className={styles.aboutQreactive}>FAQs</button>
            <button className={styles.aboutQreactive}>Help Center</button>
          </div>
          <div className={styles.column3}>
            <b className={styles.qreactiveCompanyPrivacy}>Contact Us</b>
            <button className={styles.aboutQreactive}>Admin Officer:</button>
            <button className={styles.aboutQreactive}>Email Officer:</button>
          </div>
        </div>
        <div className={styles.innerfooter2}>
          <div className={styles.fashion}>
            <div className={styles.learnMore}>QReactive</div>
            <div className={styles.byMyteam}>by MyTeam</div>
          </div>
          <div className={styles.logos}>
            <button className={styles.facebook}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
            </button>
            <button className={styles.facebook}>
              <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
            </button>
            <button className={styles.instagram}>
              <img
                className={styles.instagramIcon}
                alt=""
                src="/instagram@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.source}>
        <div className={styles.qreactiveCompanyPrivacy}>
          © 2023 QReactive | All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
