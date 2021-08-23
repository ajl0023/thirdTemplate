import React from "react";
import styles from "./LowerHomeBar.module.scss";
import { ReactComponent as Logo } from "./images/AA-logo-black-mac (1).svg";
const LowerHomeBar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text-container"]}>
        <h5>33340 Mulholland Highway</h5>
        <p>
          This unique architectural design by Amit Apel Design, Inc. presents a
          style of its own. The Worldwide architect has received multiple awards
          and Amit Apel, Inc. was most recently recognized in its hometown as
          one of the best firms by Home Builder Digest.
        </p>
      </div>
      <div className={styles["logo-container"]}>
        <Logo className={styles["logo"]}></Logo>
      </div>
    </div>
  );
};

export default LowerHomeBar;
