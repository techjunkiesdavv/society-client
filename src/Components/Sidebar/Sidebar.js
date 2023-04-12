import React from "react";
import { Link} from "react-router-dom";
import "./Sidebar.scss";
import SidebarData from "./SidebarData";
export default function Sidebar() {
  
 
  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (<Link to={val.link} style={{ textDecoration: 'none', color: 'inherit' }} >
                        <li
              className={'home' === val.title ? "click" : ""}
              
              key={key}
            
              
            >
              
              
              <div>
                <svg>{val.icon}</svg>
              </div>
              <p>{val.title}</p>
            </li>
          </Link>

          );
        })}
      </ul>
    </div>
  );
}
