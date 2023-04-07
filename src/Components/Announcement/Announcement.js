import React, { useState } from "react";
import "./styles.scss";
import { images } from "../../constants";
import AnnouncementCard from "./AnnouncementCard";

const Announcement = () => {


  function formatDate(date) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  const date1 = new Date("2023-03-20T00:00:00.000Z");

  const data = [
    {
      date: "2023-03-20T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-20T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-19T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-04T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-03-01T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
    {
      date: "2023-02-01T00:00:00.000Z",
      title: "Society Meeting",
      desc: "A society meeting will be conducted on 18th March 2023, Sunday in Society Meeting Room. Everybody is expected to arrive by 09:45a.m. as meeting will start from 10:00 p.m.",
    },
  ];

  return (
    <div className="container">

      <div className="heading">
        <img src={images.announce} alt="Announcemnt" />
        <span className="head">ANNOUNCEMENT</span>
      </div>
      <div className="grid-container">
        {data.map((item) => (
          <AnnouncementCard item={item}  key={item.id} data-id={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
