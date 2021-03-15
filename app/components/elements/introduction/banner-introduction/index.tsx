import { Button, IconButton } from "@material-ui/core";
import React from "react";
import styles from "styles/introduction/banner.module.scss";

export default function BannerIntroduction() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_part_right}>
        <p className={styles.banner_part_right_title}>Make Your Brain</p>
        <p className={styles.banner_part_right_title}>More Powerful</p>
        <p className={styles.banner_part_right_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <Button
          className={styles.get_started_button}
          variant="contained"
          color="primary"
        >
          Get Started
          {/* <IconButton >></IconButton> */}
        </Button>
      </div>
      <img className={styles.banner_img} src="static/banner1.svg" alt="" />
    </div>
  );
}
