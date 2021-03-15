import React from "react";
import Member from "./member";
import styles from "styles/introduction/our-team.module.scss";

export default function OurTeam() {
  return (
    <div>
      <p className={styles.title}>Our Team</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
        quaerat sapiente nam, id vero.
      </p>
      <Member />
    </div>
  );
}
