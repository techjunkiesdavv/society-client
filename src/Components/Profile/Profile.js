import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import profile from "../../assets/download.png";
import { fetchUser } from "../../api/fetch";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile')).result;
  const [data,setData]=useState("");
  useEffect(()=>{
  if (user){
  const getData = async()=>{
    const response = await fetchUser(user.email);
    setData(response); 
  }
  getData();
}
},[user])
  const userdetails = {
    url: profile,
    name: data&&data.firstName,
    phone: data&&data.phone,
    wing: data&&data.wing,
    flat: data&&data.flat,
  };
  const bills = [
    {
      billname: "Maintenance Bill",
      billamount: "1200",
      status: "paid",
    },
    {
      billname: "Electricity Bill",
      billamount: "1200",
      status: "paid",
    },
    {
      billname: "Gas Bill",
      billamount: "1200",
      status: "unpaid",
    },
  ];
  const toupper = (str) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userinfo}>
        <div className={styles.profileimg}>
          <img src={userdetails.url} alt="profileimage" />
        </div>
        <p className={styles.username}>{userdetails&&userdetails.name}</p>
        <p className={styles.userphone}>{userdetails&&userdetails.phone}</p>
      </div>
      <div className={styles.userhome}>
        <div className={styles.userwing}>
          <p className={styles.wingname}>{userdetails&&userdetails.wing}</p>
          <p className={styles.wing}>Wing</p>
        </div>
        <div className={styles.line} />
        <div className={styles.userflat}>
          <p className={styles.flatname}>{userdetails&&userdetails.flat}</p>
          <p className={styles.flat}>Flat</p>
        </div>
      </div>
      {bills.map((bill, i) => {
        return (
          <div className={styles.billdetails} key={i}>
            <div className={styles.bill}>
              <p className={styles.billname}>{bill.billname}</p>
              <p className={styles.billamount}>Rs. {bill.billamount}</p>
            </div>
            <div className={styles.status}>
              <button
                className={
                  bill.status === "paid"
                    ? styles.buttoncolorpaid
                    : styles.buttoncolorunpaid
                }
              >
                {toupper(bill.status)}
              </button>
            </div>
          </div>
        );
      })}
      <div className={styles.extras}>
        <button>Funds</button>
        <button>Gate Entry</button>
      </div>
    </div>
  );
};
export default Profile;