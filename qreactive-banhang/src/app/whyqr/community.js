import styles from "./community.module.css";

const Community = () => {
  return (
    <div className={styles.community}>
      <div className={styles.communityInner}>
        <div className={styles.join}>
          <div className={styles.joinTheRevolution}>Join the Revolution</div>
          <div
            className={styles.typeYourEmail}
          >{`Type your email down below `}</div>
        </div>
        <div className={styles.form}>
          <input
            className={styles.addYourEmail}
            placeholder="Add your email here"
            type="text"
          />
          <button className={styles.button}>
            <div className={styles.send}>SEND</div>
          </button>
        </div>
        <div className={styles.qreactiveCompanyPrivacy}>
          © 2023 QReactive | All right reserved
        </div>
      </div>
    </div>
  );
};

export default Community;
