import styles from "./NotificationCards.module.scss";
import BellIcon from "../../../public/images/bell.svg";
import Image from "next/image";
import { CARDS } from "./NotificationCards.utils";
import { useState } from "react";
const NotificationCards = () => {
  const [isPaused, setIsPaused] = useState(false);
  const renderCards = () => {
    return CARDS.map((card) => {
      return (
        <div className={styles["card"]} key={card.id}>
          <div className={styles["header"]}>
            <div className={styles["notification-icon"]}>
              <Image src={card.icon} alt={card.alt} fill />
            </div>
            <div className={styles["notification-action"]}>{card.action()}</div>
          </div>
          <div className={styles["notification-content"]}>
            {card.customRender()}
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className={styles["container"]}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`${styles["cards"]} ${styles["cards-1"]} ${
          isPaused && styles["pause-loop"]
        }`}
      >
        {renderCards()}
      </div>
      <div
        className={`${styles["cards"]} ${styles["cards-2"]} ${
          isPaused && styles["pause-loop"]
        }`}
      >
        {renderCards()}
      </div>
    </div>
  );
};

export default NotificationCards;
