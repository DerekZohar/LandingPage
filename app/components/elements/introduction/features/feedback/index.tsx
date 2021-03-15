import React from "react";
import CEOCard from "./ceo-card";
import styles from "styles/introduction/feature/feedback.module.scss";
import { Fade } from "react-awesome-reveal";

export default function FeatureFeedback() {
  return (
    <div className={styles.feature_feedback}>
      <Fade
        direction="left"
        delay={100}
        // style={{ height: "50%", width: "50%" }}
      >
        <img
          src="/static/feedback.svg"
          alt=""
          className={styles.feature_feedback_img}
        />
      </Fade>
      <div className={styles.feature_feedback_group}>
        <div>
          <p className={styles.feature_feedback_group_title}>
            Communicate and gather feedback
          </p>
          <p className={styles.feature_feedback_group_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
        </div>
        <Fade direction="right" delay={100}>
          <CEOCard />
        </Fade>
      </div>
    </div>
  );
}
