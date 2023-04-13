import styles from "./CommitteeMember.module.scss";
import{ useEffect, useState } from "react";

import phoneicon from "../../assets/phoneicon.svg";
import homeicon from "../../assets/homeicon2.svg";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { fetchData } from "../../api/fetch";
import { urlFor } from "../../api/client";




const CommitteeMember = () => {
  const [detail, setdetail] = useState([]);
  useEffect(() => {
    fetchData("committe_members").then((detail) => setdetail(detail));
   
  }, [detail]);
    
  const scrollLeft = (val) => {
    document.getElementById("container").scrollLeft -= val;
  };
  const scrollRight = () => {
    document.getElementById("container").scrollLeft += 500;
  }
  const [seconds, setSeconds] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      setSeconds(currentTimeInSeconds);
    }, 1000);
    seconds%5===0&&scrollRight();
    const element = document.getElementById("container");
    element.scrollLeft===(element.scrollWidth - element.clientWidth)&&(scrollLeft(element.scrollLeft));
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <div className={styles.cmemberContainer}>
      <h2 className={styles.h21}>Committee</h2>
      <h2 className={styles.h22}>Members</h2>
      <div className={styles.allcards} id="container">
        {detail.map((detail, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.memberimg}>
                <img src={urlFor(detail.image.asset._ref)} alt="profileimage" />
              </div>
              <div className={styles.memberdetails}>
                <p className={styles.membername}>{detail.name}</p>
                <p className={styles.memberrole}>{detail.designation.toUpperCase()}</p>
                <div className={styles.phone}>
                  <img src={phoneicon} alt="callicon" />
                  <p>{detail.phone_number}</p>
                </div>
                <div className={styles.home}>
                  <img src={homeicon} alt="homeicon" />
                  <div className={styles.memberhome}>
                    <p>{detail.wing.toUpperCase()} Wing</p>
                    <div className={styles.line} />
                    <p>{detail.house_no} Flat</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.scrollbuttons}>
        <div className={styles.leftArrow}>
        <img
          src={leftArrow}
          alt="scrollarrow"
          className={styles.leftarrow}
          onClick={() => scrollLeft(500)}
        />
        </div>
        <div className={styles.rightArrow}>
        <img src={rightArrow} alt="scrollarrow" onClick={() => scrollRight()} />
        </div>
      </div>
    </div>
  );
};
export default CommitteeMember;
