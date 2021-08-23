import React from "react";
import styles from "./Home.module.scss";
import home from "./images/background.jpg";
import logo from "./images/Maliview Estates (757 x 79).png";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["home-content-bar"]}>
        <li>Discover</li>
        <li>Equestrian</li>
      </ul>

      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt="" />
      </div>

      <ul className={styles["home-content-bar"]}>
        <li>Background</li>
        <li>Video</li>
      </ul>
 
    </div>
  );
};

export default Home;
