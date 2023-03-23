import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
import SidebarData from "./SidebarData";
export default function Sidebar() {
  const [activeElement, setactiveElement] = useState("home");
  const handleActiveElement = (element) => {
    setactiveElement(element);
  };
  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              className={activeElement === val.title ? "click" : ""}
              onClick={() => handleActiveElement(val.title)}
              key={key}
              
            >
              <div>
                <svg>{val.icon}</svg>
              </div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
