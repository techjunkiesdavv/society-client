import React from "react";
import "./styles.scss";
import { images } from "../../constants";
import AnnouncementCard from "./AnnouncementCard";

const Announcement = () => {

  const data = [
    {
      date: "2023-03-20T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key : "1"
    },
    {
      date: "2023-03-20T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key :"2"
    },
    {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key:"3"
    }, {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key:"3"
    }, {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key:"3"
    }, {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key:"3"
    }, {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
      key:"3"
    },
   
  ];
  
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
