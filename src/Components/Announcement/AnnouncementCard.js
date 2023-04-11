import React from 'react'

const AnnouncementCard = ({item}) => {
    // const hoverStyle = {
    //   cursor: "pointer",
    // };
    function formatDate(date) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
      }
    
      const date1 = new Date("2023-03-20T00:00:00.000Z");
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
          className="grid-item-description ellipsis"
          onClick={(element)=>{element.currentTarget.classList.remove("ellipsis")}}
        >
          {item.desc}
        </p>
      </div>
    );
}

export default AnnouncementCard



