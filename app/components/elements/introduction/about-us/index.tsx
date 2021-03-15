import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "styles/introduction/about-us.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.about_us}>
      <p className={styles.about_us_title}>About Us</p>
      <div className={styles.about_us_content}>
        <Fade>
          <img
            src="static/about_us.svg"
            alt="about us"
            className={styles.about_us_content_img}
          />
        </Fade>
        <div className={styles.about_us_content_description}>
          <p className={styles.about_us_content_description_title}>
            Our Mission
          </p>
          <p className={styles.about_us_content_description_content}>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>
          <List
            className={styles.about_us_content_description_list}
            component="nav"
            aria-label="contacts"
          >
            <ListItem>
              <ListItemIcon>
                <Check
                  className={styles.about_us_content_description_list_icon}
                />
              </ListItemIcon>
              <ListItemText primary="Laborum enim quasi at modi" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Check
                  className={styles.about_us_content_description_list_icon}
                />
              </ListItemIcon>
              <ListItemText primary="Ad at tempore" />
            </ListItem>
          </List>
          <Button
            className={styles.about_us_content_description_button}
            variant="contained"
            color="primary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
