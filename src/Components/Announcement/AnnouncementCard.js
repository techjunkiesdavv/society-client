import React,{useState} from 'react'

const AnnouncementCard = ({item}) => {
    const [showFullDesc, setShowFullDesc] = useState(false);

    function handleClick() {
      setShowFullDesc(!showFullDesc);
    }

    const hoverStyle = {
      cursor: "pointer",
    };
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

export default AnnouncementCard



