import React from "react";
import { images } from "../../constants";
import para from "../../constants";

import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.bcontainer}>
      <div className={styles.acontainer}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>ABOUT</h1>
          <h2 className={styles.subhead}>
            {" "}
            Your Business Success Built
            <br />
            On A Powerful Customer <br />
            Experience Platform
          </h2>
          <p className={styles.content}>{para}</p>
        </div>

        <div className={styles.aboutimage}>
          <div className={styles.block1}>
            <span className={styles.imgicon}>
              <img src={images.building} alt="" />
            </span>
            8<div>Wings</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block2}>
            <span className={styles.imgicon}>
              <img src={images.group} alt="" />
            </span>
            2500<div>Members</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block3}>
            <span className={styles.imgicon}>
              <img src={images.flat} alt="" />
            </span>
            126<div>Flat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
