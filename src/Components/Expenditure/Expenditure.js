import React from "react";
import { BarGraph } from "./BarGraph";
import styles from "./Expenditure.module.scss";
import { fetchData } from "../../api/fetch";
import { useState,useEffect } from "react";


const Expenditure = () => {
  const [expenditure, setExpenditure] = useState([]);
  useEffect(() => {
    fetchData("expenditure").then((data) => setExpenditure(data));
  },[]);
  function convertDateFormat(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function numberWithCommas(x) {
    let p = "";
    if (x.length > 3) {
      let temp = x.slice(0, x.length - 4);
      p = temp.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      p = p + "," + x.slice(x.length - 3, x.length);
      return p;
    }
    return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.exp}>
      <h1 className={styles.head}>Expenditure</h1>
      <div className={styles.barContainer}>
        <div className={styles.left}>
          <hr />
          <div className={styles.grpText}>
          <span className={styles.balance}>Society Balance</span>
          <h2>&#8377;{expenditure.length>0 ? numberWithCommas(expenditure[0].balance):""} </h2>
          </div>
        </div>
{console.log(expenditure)}
        <div className={styles.bar}>
          <BarGraph />
        </div>
      </div>
      <div className={styles.paymentHis}>
        <h2>Payment History</h2>
        <div className={styles.list}>
          {expenditure.length>0 && expenditure[0].paymentHistory
.map((item,index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.lefta}>
                  <h4>{item.title}</h4>
                  <h6>{convertDateFormat(item.date)}</h6>
                </div>
                <h3>{`₹ ${numberWithCommas(item.payment)}`}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenditure;