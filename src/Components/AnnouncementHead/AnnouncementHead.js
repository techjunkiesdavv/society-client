
import { Link } from "react-router-dom";
import styles from "./Announcement.module.scss";
import { ReactComponent as Arrow } from "../../assets/viewmoreArrow.svg";import { fetchData } from "../../api/fetch";
import { useEffect, useState } from "react";

export default function AnnouncementHead() {
 
    const [data, setdata] = useState([]);
    useEffect(() => {
      fetchData("announcements").then((data) => setdata(data));
      
    }, []);
  
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
          {data.map((val, i) => {
            return (
              <div className={styles.head2} key={i}>
                <p>{val.announcement}</p>
                {i !== data.length - 1 && (
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
