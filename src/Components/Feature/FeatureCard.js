import React, { useState } from 'react'

const FeatureCard = ({item}) => {
  const [hovered, setHovered] = useState(true);

  const handleMouseOver = () => {
    
    setHovered(!hovered);
    
  }

  const handleMouseOut = () => {
    
    setHovered(!hovered);
    
  }

  return (
    <div className="fgrid-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {hovered ? (
        <>
          <div className="fgrid-item-img">
            <img src={item.imgUrl} alt=""/>
          </div>
          <p className="fgrid-item-title">{item.title}</p>
        </>
      ) : (
        <p className="fgrid-item-description">{item.desc}</p>
      )}
    </div>
  )
}

export default FeatureCard;
