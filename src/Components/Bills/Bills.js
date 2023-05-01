import React ,{ useRef }  from "react";
import styles from "./bills.module.scss";
import images from "../../assets";
import { fetchData } from "../../api/fetch";
import { useState,useEffect } from 'react';



const Bills = () => {
  const [data, setdata] = useState([]);
    useEffect(() => {
      fetchData("bills").then((data) => setdata(data));
      
    }, [data]);
 const componentRef = useRef(null);
 

 
 
  function getFirstWord(str) {
    const firstWhiteSpaceIndex = str.indexOf(" ");
    if (firstWhiteSpaceIndex === -1) {
      return str;
    } else {
      let st = str.substring(0, firstWhiteSpaceIndex);

      switch (st) {
        case "Electricity":
          return images.lightning;
        case "Gas":
          return images.fire ;
        default : return "-1" ;
      }
    }
  }

  return (
    <div className={styles.bills} >
      <div className={styles.top}>
        <h1>Bills</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.tick} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <p className={styles.text}>Pending Bills</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.clock} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <p className={styles.text}>Pending Bills</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.warning} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <p className={styles.text}>Pending Bills</p>
            </div>
          </div>
        </div>
         {/* <button onClick={generatePdf} style={{ width:120, padding:5, borderRadius:3, backgroundColor: '#ffde8d' , color:'black' , marginBottom:10}}>Download PDF</button> */}
        <div className={styles.tableContainer} ref={componentRef}>
          <div className={styles.rowHead}>
            <span>Name</span>
            <span>Amount</span>
            <span>Bill Date</span>
            <span> Due Date</span>
            <span>Status</span>
          </div>
          {data.map((item, index) => (
            <div className={styles.row} key={index}>
              <span>
                <img src={getFirstWord(item.name)} alt='' />
                {item.name}
              </span>
              <span>{item.amount}</span>
              <span>{item.billDate}</span>
              <span>{item.dueDate}</span>
              {item.status === true ? (
                <span className={styles.status}>
                  <p className={styles.statusTextPaid}>Paid</p>
                </span>
              ) : (
                <span className={styles.status}>
                  <p className={styles.statusTextUnpaid}>Unpaid</p>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bills;
