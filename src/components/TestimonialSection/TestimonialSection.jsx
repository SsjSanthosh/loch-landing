import Image from "next/image";
import styles from "./TestimonialSection.module.scss";
import TestimonialCard from "components/TestimonialCard";
import LochLogo from "../../../public/images/loch_logo.webp";
import { TESTIMONIALS } from "utils/constants";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const TestimonialSection = () => {
  useEffect(() => {
    const slider = document.getElementById("testimonials");
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });

    return () => {
      slider.removeEventListener("mousedown", {});
      slider.removeEventListener("mouseup", {});
      slider.removeEventListener("mousemove", {});
      slider.removeEventListener("mouseleave", {});
    };
  }, []);
  return (
    <section className={styles["testimonials-section"]}>
      <h3>Testimonials</h3>
      <div className={styles["testimonials-container"]}>
        <div className={styles["testimonials-logo"]}>
          <Image src={LochLogo} fill alt="Loch logo" />
        </div>
        <div className={styles["testimonial-cards"]} id="testimonials">
          {TESTIMONIALS.map((test) => {
            return (
              <div className={styles["testimonial-card"]} key={nanoid()}>
                <TestimonialCard testimonial={test} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
