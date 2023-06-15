import React from "react";
import { images } from "../../constants";

import { fetchData } from "../../api/fetch";
import { useEffect, useState } from "react";
import styles from "./about.module.scss";

const About = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchData("about").then((data) => setdata(data));
    
  }, []);
  return (
    <div className={styles.bcontainer}>
      <div className={styles.acontainer}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>ABOUT</h1>
          <h2 className={styles.subhead}>
          {data.length>=1 && data[0].heading}
          </h2>
          <p
            className={`${styles.content} ${styles.ellipsis}`}
            onClick={(element) => {
              element.currentTarget.classList.remove(styles.ellipsis);
            }}
          >
            {data.length>=1 && data[0].content}
          </p>
        </div>
        <div className={styles.circular}>
          <div className={styles.aboutimage} />
          <div className={styles.block1}>
            <div className={styles.imgicon}>
              <img src={images.building} alt="" />
              <p>{data.length>=1 && data[0].wings}</p>
            </div>
            <div>Wings</div>
          </div>

          <div className={styles.block2}>
            <div className={styles.imgicon}>
              <img src={images.group} alt="" />
              <p>{data.length>=1 && data[0].members}</p>
            </div>
            <div>Members</div>
          </div>

          <div className={styles.block3}>
            <div className={styles.imgicon}>
              <img src={images.flat} alt="" />
              <p>{data.length>=1 && data[0].flats}</p>
            </div>
            <div>Flat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
