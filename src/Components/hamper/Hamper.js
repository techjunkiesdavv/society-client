import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import styles from "./Hamper.module.scss"
function Hamper() {
    const quicklinks=[{tag:'Home',url:'/'},{tag:'Funds',url:'/funds'},{tag:'Announcements',url:'/announcement'},{tag:'Facility Contacts',url:'/fcontact'}, {tag:'Expenditure',url:'/expenditure'}, {tag:'Complaint',url:'/complaint'}];
    const [click,setClick] = useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
  return (
   <div>
     <div className={styles.head} onClick={handleClick}>
<svg className = {styles.hamper} width="26" height="20" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790176 1.13968 0 0.948912 0 0.75ZM0 5C0 4.80109 0.0790176 4.61032 0.21967 4.46967C0.360322 4.32902 0.551088 4.25 0.75 4.25H15.25C15.4489 4.25 15.6397 4.32902 15.7803 4.46967C15.921 4.61032 16 4.80109 16 5C16 5.19891 15.921 5.38968 15.7803 5.53033C15.6397 5.67098 15.4489 5.75 15.25 5.75H0.75C0.551088 5.75 0.360322 5.67098 0.21967 5.53033C0.0790176 5.38968 0 5.19891 0 5ZM0.75 8.5C0.551088 8.5 0.360322 8.57902 0.21967 8.71967C0.0790176 8.86032 0 9.05109 0 9.25C0 9.44891 0.0790176 9.63968 0.21967 9.78033C0.360322 9.92098 0.551088 10 0.75 10H15.25C15.4489 10 15.6397 9.92098 15.7803 9.78033C15.921 9.63968 16 9.44891 16 9.25C16 9.05109 15.921 8.86032 15.7803 8.71967C15.6397 8.57902 15.4489 8.5 15.25 8.5H0.75Z" fill="white"/>
</svg>

    </div>
    <div className={styles.linkscard} >
    {click && quicklinks.map((link,i)=>{return(
                        <Link to={link.url} 
                        key={i}
                        style={{ textDecoration: "none", color: "inherit" } }>
                        <div className={styles.links} key={i}>{link.tag}</div>
                        </Link>
                    )})}
    </div>
   </div>
  )
}

export default Hamper
