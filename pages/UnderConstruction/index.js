import styles from "./UnderContruction.module.scss";

const UnderConstruction = () => {
  return (
    <div className={styles.body}>
      <div className={styles.overlay}></div>
      <div className={styles.stars} aria-hidden="true"></div>
      <div className={styles.starts2} aria-hidden="true"></div>
      <div className={styles.stars3} aria-hidden="true"></div>
      <main className={styles.main}>
        <section className={styles.contact}>
          <h1 className={styles.title}>We are coming soon</h1>
          <h2>Site Under Construction</h2>
          <h2>Contact</h2>
          +61 413-403-162
          <span>enquiry@takfabrication.com.au</span>
        </section>
      </main>
    </div>
  );
};
export default UnderConstruction;
