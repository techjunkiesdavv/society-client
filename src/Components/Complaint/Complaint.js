import React, {useState } from "react";
import styles from "./complaint.module.scss";
import {client} from "../../api/client";
import { fetchUser } from "../../api/fetch";

const Complaint = () => {
  const [complaintSubject, setComplaintSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const user = JSON.parse(localStorage.getItem('profile'));
  const fetchuser= async()=>{
    const response = await fetchUser(user.result.email);
    return response;
  }
    const handleSubmit = async(e) => {
    e.preventDefault();
    const responses = await fetchuser();
    console.log("subject:", complaintSubject);
    setComplaint("");
    setComplaintSubject("");
    setSubmitted(true);
    client
          .create({
            _type: "complaint",
            user:user.result.email,
            flat:responses.wing + responses.flat,
            time:new Date(),
            complaint,
          })
          .then((response) => {
            console.log("Object created successfully: ", response);
            alert("Complaint sent successfully");
          })
          .catch((error) => {
            console.error("Error creating object: ", error);
            alert("Complaint unable to send ");
          });
    setSubmitted(false);
    setComplaint("");
    setComplaintSubject("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
      <p className={styles.head}>Got a complaint?</p>
      <p className={styles.head2}>Report now!</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter subject here"
          required
          value={complaintSubject}
          onChange={(e) => {
            setComplaintSubject(e.target.value);
          }}
        />
        <textarea
          className={styles.textarea}
          placeholder="Enter Message here!!!!!!!"
          required
          value={complaint}
          onChange={(e) => {
            setComplaint(e.target.value);
          }}
        ></textarea>
        {
          user? <button className={styles.btn} disabled={submitted}>Submit</button>: <p className={styles.loginalrt}>Please login to file a Complaint</p>
        }
      </form>
    </div>
  );
};

export default Complaint;
