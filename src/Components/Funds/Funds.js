import React from "react";

import styles from "./funds.module.scss";


const data = [
  {
    Name: "Ganesh Pooja Event",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: " dj Night",
    Amount: "2200",
    DueDate: "12 March 2023",
   
  },
  {
    Name: "Garba",
    Amount: "2200",
    DueDate: "12 March 2023",

  },
  {
    Name: "Society Sports",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: "Ganesh Pooja Event",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: " dj Night",
    Amount: "2200",
    DueDate: "12 March 2023",
   
  },
  {
    Name: "Garba",
    Amount: "2200",
    DueDate: "12 March 2023",

  },
  {
    Name: "Society Sports",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: "Ganesh Pooja Event",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: " dj Night",
    Amount: "2200",
    DueDate: "12 March 2023",
   
  },
  {
    Name: "Garba",
    Amount: "2200",
    DueDate: "12 March 2023",

  },
  {
    Name: "Society Sports",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: "Ganesh Pooja Event",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
  {
    Name: " dj Night",
    Amount: "2200",
    DueDate: "12 March 2023",
   
  },
  {
    Name: "Garba",
    Amount: "2200",
    DueDate: "12 March 2023",

  },
  {
    Name: "Society Sports",
    Amount: "2200",
    DueDate: "12 March 2023",
    
  },
];

const Bills = () => {
  
  const Amount="5000000";
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
    <div className={styles.bills}>
      <div className={styles.top}>
        <h1>FUNDS</h1>
        <div className={styles.container}>
          <div className={styles.amount}><p>Required Amount</p><h2>&#8377;{numberWithCommas(Amount)}</h2></div>
          <div className={styles.buttons}><button>Add Amount</button><button>Reject</button></div>
        </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.rowHead}>
            <span className={styles.name}>Name</span>
            <span className={styles.a}>Amount</span>
            <span className={styles.date}> Due Date</span>
    
          </div>
          {data.map((item, index) => (
            <div className={styles.row} key={index}>
              <span className={styles.name}>
                
                {item.Name}
              </span>
              <span className={styles.a} >&#8377;{item.Amount}</span>
              <span  className={styles.date}>{item.DueDate}</span>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Bills;
