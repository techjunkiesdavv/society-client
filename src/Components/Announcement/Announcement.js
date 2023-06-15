import React from "react";
import "./styles.scss";
import { images } from "../../constants";
import AnnouncementCard from "./AnnouncementCard";
import { fetchData } from "../../api/fetch";
import { useEffect, useState } from "react";
const Announcement = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchData("announcements").then((data) => setdata(data));
    
  }, []);
  
  
  return (
    <div className="container">
      <div className="heading">
        <img src={images.announce} alt="Announcemnt" />
        <span className="head">ANNOUNCEMENT</span>
      </div>
      <div className="grid-container">
        {data.map((item,i) => {
          return(
          <AnnouncementCard item={item}  key={i}  data-id={item.id} />
        )})}
      </div>
    </div>
  );
};

export default Announcement;
