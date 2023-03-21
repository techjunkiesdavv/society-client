import styles from "./CommitteeMember.module.scss";
import React, { useEffect, useState } from "react";
import Profile from "../../assets/prof.jpg";
import phoneicon from "../../assets/phoneicon.svg";
import homeicon from "../../assets/homeicon2.svg";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
const CommitteeMember = () => {
  const detail = [
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Aatmaram Bhide",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
  ];
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
      <h2>Committee Members</h2>
      <div className={styles.allcards} id="container">
        {detail.map((detail, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.memberimg}>
                <img src={detail.src} alt="memberProfile" />
              </div>
              <div className={styles.memberdetails}>
                <p className={styles.membername}>{detail.name}</p>
                <p className={styles.memberrole}>{detail.role.toUpperCase()}</p>
                <div className={styles.phone}>
                  <img src={phoneicon} alt="callicon" />
                  <p>{detail.phone}</p>
                </div>
                <div className={styles.home}>
                  <img src={homeicon} alt="homeicon" />
                  <div className={styles.memberhome}>
                    <p>{detail.wing.toUpperCase()} Wing</p>
                    <div className={styles.line} />
                    <p>{detail.flat} Flat</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.scrollbuttons}>
        <img
          src={leftArrow}
          alt="scrollarrow"
          className={styles.leftarrow}
          onClick={() => scrollLeft(500)}
        />
        <img src={rightArrow} alt="scrollarrow" onClick={() => scrollRight()} />
      </div>
    </div>
  );
};
export default CommitteeMember;
