import React from "react";
import styles from "./VideoRender.module.scss";

const VideoRender = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <h4>Video Render</h4>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/iWGFuMg-RA0?enablejsapi=1&version=3&playerapiid=ytplayer"
          title="YouTube video player"
          id="main-video-player"
          z-index="5"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoRender;
