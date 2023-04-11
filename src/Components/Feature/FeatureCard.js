import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="flipcard">
<div className="fgrid-item">
        <div className="beforehovercard">
          <div className="fgrid-item-img">
            <img src={item.imgUrl} alt="" />
          </div>
          <p className="fgrid-item-title">{item.title}</p>
        </div>
        <div className="flip-card-back">
        <p className="fgrid-item-description">{item.desc}</p>
        </div>
    </div>
    </div>
    
  );
};

export default FeatureCard;
