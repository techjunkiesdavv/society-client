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
            Your Business Success Built
            <br />
            On A Powerful Customer <br />
            Experience Platform
          </h2>
          <p
            className={`${styles.content} ${styles.ellipsis}`}
            onClick={(element) => {
              element.currentTarget.classList.remove(styles.ellipsis);
            }}
          >
            {para}
          </p>
        </div>
        <div className={styles.circular}>
          <div className={styles.aboutimage} />
          <div className={styles.block1}>
            <div className={styles.imgicon}>
              <img src={images.building} alt="" />
              <p>8</p>
            </div>
            <div>Wings</div>
          </div>

          <div className={styles.block2}>
            <div className={styles.imgicon}>
              <img src={images.group} alt="" />
              <p>2500</p>
            </div>
            <div>Members</div>
          </div>

          <div className={styles.block3}>
            <div className={styles.imgicon}>
              <img src={images.flat} alt="" />
              <p>126</p>
            </div>
            <div>Flat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
