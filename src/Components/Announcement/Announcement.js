import React, { useState } from "react";
import "./styles.scss";
import { images } from "../../constants";

const Announcement = () => {
  function GridItem({ item }) {
    const [showFullDesc, setShowFullDesc] = useState(false);

    function handleClick() {
      setShowFullDesc(!showFullDesc);
    }

    const hoverStyle = {
      cursor: "pointer",
    };

    return (
      <div className="grid-item">
        {(date1 - new Date(item.date)) / 1000000 <= 1296 ? (
          <div className="newButton">New</div>
        ) : (
          <div className="emptyButton"></div>
        )}
        <div className="grid-item-date">{formatDate(item.date)}</div>
        <p className="grid-item-title">{item.title}</p>
        <p
          className="grid-item-description"
          onClick={handleClick}
          style={item.desc.length > 200 ? hoverStyle : null}
        >
          {showFullDesc
            ? item.desc
            : item.desc.length <= 200
            ? item.desc
            : item.desc.substring(0, 200) + "....."}
        </p>
      </div>
    );
  }

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
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Announcement;
