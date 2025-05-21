import styles from "./pos-q-r.module.css";

const PosQR = () => {
  return (
    <div className={styles.posQr}>
      <div className={styles.heading}>
        <p className={styles.unlockAWorld}>Unlock a World of Possibilities</p>
        <p className={styles.unlockAWorld}>with Qreactive</p>
      </div>
      <div className={styles.row}>
        <div className={styles.listItem}>
          <img className={styles.iconRelume} alt="" src="/icon--relume.svg" />
          <b className={styles.heading1}>
            <p className={styles.unlockAWorld}>
              Customize and Personalize Your
            </p>
            <p className={styles.unlockAWorld}>QR Codes</p>
          </b>
          <div className={styles.text}>
            <p className={styles.unlockAWorld}>
              Choose from a wide range of QR code types,
            </p>
            <p className={styles.unlockAWorld}>
              including PDF, Facebook, URL, and WiFi.
            </p>
          </div>
          <div className={styles.action}>
            <button className={styles.stylelinkSmallfalseDark}>
              <div className={styles.button}>Learn More</div>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon--chevronright1.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.listItem}>
          <img className={styles.iconRelume} alt="" src="/icon--relume.svg" />
          <b className={styles.heading1}>
            <p
              className={styles.unlockAWorld}
            >{`Track and Analyze QR Code `}</p>
            <p className={styles.unlockAWorld}>Performance</p>
          </b>
          <div className={styles.text}>
            <p className={styles.unlockAWorld}>
              Gain valuable insights into your QR code campaigns
            </p>
            <p className={styles.unlockAWorld}>
              with our comprehensive analytics dashboard.
            </p>
          </div>
          <div className={styles.action}>
            <button className={styles.stylelinkSmallfalseDark1}>
              <div className={styles.button1}>Sign Up</div>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon--chevronright1.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.listItem}>
          <img className={styles.iconRelume} alt="" src="/icon--relume.svg" />
          <b className={styles.heading1}>
            <p
              className={styles.unlockAWorld}
            >{`Generate QR Codes in Seconds `}</p>
          </b>
          <div className={styles.text}>
            <p className={styles.unlockAWorld}>
              Create QR codes effortlessly with our user-friendly
            </p>
            <p className={styles.unlockAWorld}>
              interface and intuitive design tools.
            </p>
          </div>
          <div className={styles.action}>
            <button className={styles.stylelinkSmallfalseDark1}>
              <div className={styles.button}>Get Started</div>
              <img
                className={styles.iconChevronRight}
                alt=""
                src="/icon--chevronright1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosQR;
