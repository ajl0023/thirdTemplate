import React from "react";
import styles from "./Home.module.scss";
import home from "./images/background.jpg";
import logo from "./images/Maliview Estates (757 x 79).png";
const links = ["discover", "background", "equest", "video"];
const Home = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["home-content-bar"]}>
        <a href={`#${links[0]}`}>Discover</a>
        <a href={`#${links[1]}`}>Equestrian</a>
      </ul>

      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt="" />
      </div>

      <ul className={styles["home-content-bar"]}>
        <a href={`#${links[2]}`}>Background</a>
        <a href={`#${links[3]}`}>Video</a>
      </ul>
    </div>
  );
};

export default Home;
