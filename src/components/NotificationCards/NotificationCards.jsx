import styles from "./NotificationCards.module.scss";
import BellIcon from "../../../public/images/bell.svg";
import Image from "next/image";
import { CARDS } from "./NotificationCards.utils";
const NotificationCards = () => {
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
    <div className={styles["container"]}>
      <div className={styles["cards"]}>{renderCards()}</div>
      <div className={`${styles["cards"]} ${styles["cards-2"]}`}>
        {renderCards()}
      </div>
    </div>
  );
};

export default NotificationCards;
