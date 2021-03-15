import React, { useEffect } from "react";
import styles from "styles/introduction/navbar.module.scss";
import MainMenuMobile from "app/components/elements/main-menu-mobile";

export default function NavbarIntroduction() {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector("." + styles.navbar).classList.add(styles.scroll);
    } else {
      document
        .querySelector("." + styles.navbar)
        .classList.remove(styles.scroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.navbar}>
      <p className={styles.navbar_app_name}>Replica</p>
      <div className={styles.navbar_main_menu}>
        <p className={styles.active}>Home</p>
        <p>Features</p>
        <p>About Us</p>
        <p>Testimonials</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <MainMenuMobile />
    </div>
  );
}
