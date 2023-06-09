import styles from "./LandingContent.module.scss";

import BellIcon from "../../../public/images/bell_light.svg";
import CohortImage from "../../../public/images/cohorts.png";
import EyeIcon from "../../../public/images/eye.svg";

import Image from "next/image";
import { TESTIMONIALS } from "utils/constants";
import TestimonialCard from "components/TestimonialCard";
import { nanoid } from "nanoid";
import TestimonialSection from "components/TestimonialSection";
import NotificationCards from "components/NotificationCards";

const LandingContent = () => {
  return (
    <div className={styles["wrapper"]}>
      {/* notification section */}
      <section className={styles["notification-section"]}>
        <div className={styles["notification-section-content"]}>
          <div className={styles["notification-section-icon"]}>
            <Image src={BellIcon} fill alt="bell icon" />
          </div>
          <h2>Get notified when a highly correlated whale makes a move.</h2>
          <h4>
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </h4>
        </div>
        <div className={styles["notification-section-cards"]}>
          <NotificationCards />
        </div>
      </section>
      {/* cohort section */}
      <section className={styles["cohorts-section"]}>
        <div className={styles["cohorts-section-image"]}>
          <Image src={CohortImage} alt="Cohort groups" fill />
        </div>
        <div className={styles["cohorts-section-content"]}>
          <div className={styles["cohorts-section-icon"]}>
            <Image src={EyeIcon} fill alt="eye icon" />
          </div>
          <h2>Watch what the whales are doing</h2>
          <h4>
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </h4>
        </div>
      </section>
      <TestimonialSection />
    </div>
  );
};

export default LandingContent;
