import React from "react";
import styles from "./HomePage.module.scss";
import Head from "next/head";
import EmailForm from "components/EmailForm";
import LandingContent from "components/LandingContent";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>Loch: Personalized Crypto Portfolio Intelligence</title>
      </Head>
      <main className={styles["wrapper"]}>
        <div className={styles["landing-wrapper"]}>
          <LandingContent />
        </div>
        <div className={styles["form-wrapper"]}>
          <div className={styles["form-container"]}>
            <EmailForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
