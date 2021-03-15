import { Icon, IconButton } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "styles/introduction/feature/ceo-card.module.scss";
import { Fade } from "react-awesome-reveal";

export default function CEOCard() {
  return (
    <div className={styles.ceo_card}>
      <div className={styles.ceo_card_info}>
        <Fade direction="left" delay={100}>
          <img
            src="https://preview.colorlib.com/theme/imagine/images/person_1.jpg"
            alt=""
            className={styles.ceo_card_info_img}
          />
        </Fade>
        <div className={styles.ceo_card_info_detail}>
          <p className={styles.ceo_card_info_detail_name}>Kimberly Gush</p>
          <p className={styles.ceo_card_info_detail_job}>
            Co-Founder, XYZ Inc.
          </p>
        </div>
      </div>
      <p className={styles.ceo_card_quote}>
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae
        ipsa asperiores inventore aperiam iure?”
      </p>
    </div>
  );
}
