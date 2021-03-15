import { Icon } from "@material-ui/core";
import { Cached } from "@material-ui/icons";
import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import styles from "styles/introduction/feature/featureItem.module.scss";
import { keyframes } from "@emotion/react";
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export default function FeatureItem(props) {
  const { delayTime } = props;
  return (
    // <Reveal keyframes={customAnimation}>
    <Fade
      direction="up"
      triggerOnce={true}
      delay={delayTime}
      className={styles.feature_item_fade}
    >
      <div className={styles.feature_item}>
        <Icon
          component={Cached}
          fontSize="large"
          className={styles.feature_item_icon}
        />
        <div className={styles.feature_item_content}>
          <p className={styles.feature_item_content_title}>
            Martketing Consulting
          </p>
          <p className={styles.feature_item_content_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quis molestiae vitae eligendi at.Perferendis quis molestiae vitae
            eligendi at.
          </p>
        </div>
      </div>
    </Fade>
    // </Reveal>
  );
}
