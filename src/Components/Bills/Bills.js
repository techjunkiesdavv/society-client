import React from "react";

import styles from "./bills.module.scss";
import images from "../../assets";

const data = [
  {
    Name: "Gas Bill",
    Amount: "2200",
    BillDate: "12 March 2023",
    DueDate: "12 March 2023",
    Status: "upaid",
  },
  {
    Name: "Electricity Bill",
    Amount: "2200",
    BillDate: "12 March 2023",
    DueDate: "12 March 2023",
    Status: "paid",
  },
  {
    Name: "Electricity Bill",
    Amount: "2200",
    BillDate: "12 March 2023",
    DueDate: "12 March 2023",
    Status: "unpaid",
  },
  {
    Name: "Gas Bill",
    Amount: "2200",
    BillDate: "12 March 2023",
    DueDate: "12 March 2023",
    Status: "paid",
  },
];

const Bills = () => {
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
        Default: return "-1"
      }
    }
  }

  return (
    <div className={styles.bills}>
      <div className={styles.top}>
        <h1>Bills</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.tick} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <h4 className={styles.text}>Pending Bills</h4>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.clock} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <h4 className={styles.text}>Pending Bills</h4>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <img src={images.warning} alt="icon" />
            </div>
            <div className={styles.right}>
              <h1>11</h1>
              <h4 className={styles.text}>Pending Bills</h4>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
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
                <img src={getFirstWord(item.Name)} />
                {item.Name}
              </span>
              <span>{item.Amount}</span>
              <span>{item.BillDate}</span>
              <span>{item.DueDate}</span>
              {item.Status === "paid" ? (
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