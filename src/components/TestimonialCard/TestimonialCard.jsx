import { useRef } from "react";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef();
  return (
    <div className={styles["container"]} ref={cardRef}>
      <div className={styles["header"]}>
        <h4>{testimonial.name}</h4>
        <p>{testimonial.title}</p>
      </div>
      <p className={styles["content"]}>{testimonial.description}</p>
    </div>
  );
};

export default TestimonialCard;
