import React from "react";
import { useState } from "react";
import { useLocation,Link} from "react-router-dom";
import "./Sidebar.scss";
import SidebarData from "./SidebarData";
export default function Sidebar(props) {
  const location = useLocation();
  
  const [activeElement, setactiveElement] = useState("home");

  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (<Link to={val.link} >
                        <li
              className={activeElement === val.title ? "click" : ""}
              
              key={key}
            
              
            >
              
              
              <div>
                <svg>{val.icon}</svg>
              </div>
              <div>{val.title}</div>
            </li>
          </Link>

          );
        })}
      </ul>
    </div>
  );
}
