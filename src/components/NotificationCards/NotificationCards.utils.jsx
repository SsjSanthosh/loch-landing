import styles from "./NotificationCards.module.scss";
import BellIcon from "../../../public/images/bell.svg";
import ChartIcon from "../../../public/images/bar-chart.svg";
import ClockIcon from "../../../public/images/clock.svg";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";

const DOLLAR_OPTIONS = [
  {
    label: "$1,000",
    value: 1000,
  },
  {
    label: "$10,000",
    value: 10000,
  },
  {
    label: "$100,000",
    value: 100000,
  },
];

const DAY_OPTIONS = [
  {
    label: "> 30 days",
    value: 30,
  },
  {
    label: "> 60 days",
    value: 60,
  },
  {
    label: "> 90 days",
    value: 90,
  },
];
export const Card1 = () => {
  const [input, setInput] = useState("hello@loch.one");
  return (
    <div className={styles["card-one"]}>
      <h4>We’ll be sending notifications to you here</h4>
      <input
        className="custom-input-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className={styles["card-two"]}>
      <h5>Notify me when any wallets move more than</h5>
      <div className={styles["select"]}>
        <select defaultValue={1000}>
          {DOLLAR_OPTIONS.map((dol) => {
            return (
              <option value={dol.value} key={dol.value}>
                {dol.label}
              </option>
            );
          })}
        </select>
        <div className={styles["select_arrow"]} />
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className={styles["card-three"]}>
      <h5>Notify me when any wallet dormant for</h5>
      <div className={styles["select"]}>
        <select defaultValue={30}>
          {DAY_OPTIONS.map((dol) => {
            return (
              <option value={dol.value} key={dol.value}>
                {dol.label}
              </option>
            );
          })}
        </select>
        <div className={styles["select_arrow"]} />
      </div>
      <h5>becomes active</h5>
    </div>
  );
};

export const CARDS = [
  {
    icon: BellIcon,
    alt: "bell icon",
    action: () => {
      return <button className="no-style-button">Save</button>;
    },
    customRender: Card1,
    id: nanoid(),
  },
  {
    icon: ChartIcon,
    alt: "chart icon",
    action: () => {
      return <input type="checkbox" />;
    },
    customRender: Card2,
    id: nanoid(),
  },
  {
    icon: ClockIcon,
    alt: "clock icon",
    action: () => {
      return <input type="checkbox" />;
    },
    customRender: Card3,
    id: nanoid(),
  },
];
