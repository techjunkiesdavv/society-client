import styles from "./CommitteeMember.module.scss";
import React from "react";
import Profile from "../../assets/sihphto3.jpeg";
import phoneicon from "../../assets/phone.png";
import homeicon from "../../assets/homeicon.png";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
const CommitteeMember = () => {
  const detail = [
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
    {
      name: "Jay Singh",
      role: "kharab teacher",
      phone: "+91899889889",
      wing: "A",
      flat: "02",
      src: Profile
    },
  ];
  const scrollLeft = () => {
    document.getElementById("container").scrollLeft -= 500;
  };
  const scrollRight = () => {
    document.getElementById("container").scrollLeft += 500;
  };
  return (
    <div className={styles.cmemberContainer}>
      <h2>Committee Members</h2>
      <div className={styles.allcards} id="container">
        {detail.map((detail, i) => {
          return (
            <div className={styles.card}>
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
          onClick={() => scrollLeft()}
        />
        <img src={rightArrow} alt="scrollarrow" onClick={() => scrollRight()} />
      </div>
    </div>
  );
};
export default CommitteeMember;
