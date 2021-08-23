import React from "react";
import styles from "./Socials.module.scss";
import { ReactComponent as Facebook } from "./images/facebook.svg";
import { ReactComponent as Instagram } from "./images/instagram.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
const Socials = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["social-container"]}>
        <li>
          <Facebook width="25px" fill="black"></Facebook>
        </li>
        <li>
          <Instagram width="25px" fill="black"></Instagram>
        </li>
        <li>
          <Twitter width="25px" fill="black"></Twitter>
        </li>
        <li>
          <Linkedin width="25px" fill="black"></Linkedin>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
