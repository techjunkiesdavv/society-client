import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Announcement.module.scss";
import { ReactComponent as Arrow } from "../../assets/viewmoreArrow.svg";
export default function AnnouncementHead() {
  const Announcements = [
    "Society Meeting",
    "Society Meeting",
    "Society Meeting",
    "Society Meeting",
    "Society Meeting",
    "Society Meeting",
    "Society Meeting",
  ];
  const roller = () => {
    const text = document.getElementById("text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
  };
  useEffect(roller, []);
  return (
    <div className={styles.container}>
      <div className={styles.notices}>
        <div className={styles.head}>
          {Announcements.map((val, i) => {
            return (
              <div className={styles.head2} key={i}>
                <p>{val}</p>
                {i !== Announcements.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Link to="announcement">
        <div className={styles.viewmore}>
          <div className={styles.logo}>
            <Arrow />
          </div>

          <div className={styles.text}>
            <p id="text">
              VIEWMORE&#x2022;VIEWMORE&#x2022;VIEWMORE&#x2022;VIEWMORE&#x2022;
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
