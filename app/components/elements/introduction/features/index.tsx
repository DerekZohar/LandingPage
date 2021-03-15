import { Grid } from "@material-ui/core";
import React from "react";
import styles from "styles/introduction/feature/features.module.scss";
import FeatureItem from "./item";

export default function Features() {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.features}>
      <div className={styles.features_top}>
        <p className={styles.features_top_title}>Replica Features</p>
        <p className={styles.features_top_description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
      </div>

      <div className={styles.features_list}>
        {list.map((item: any, index: number) => (
          <FeatureItem delayTime={item * 100} key={index} />
        ))}
      </div>
    </div>
  );
}
