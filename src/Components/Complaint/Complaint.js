import React, { useState } from "react";
import styles from "./complaint.module.scss";

const Complaint = () => {
  const [complaintSubject, setComplaintSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("subject:", complaintSubject);
    console.log("complaint:", complaint);

    setComplaint("");
    setComplaintSubject("");

    setSubmitted(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
      <h1 className={styles.head}>Got a complaint?</h1>
      <h1 className={styles.head2}>Report now!</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter subject here"
          required
          onChange={(e) => {
            setComplaintSubject(e.target.value);
          }}
        />
        <textarea
          className={styles.textarea}
          placeholder="Enter Message here!!!!!!!"
          required
          onChange={(e) => {
            setComplaint(e.target.value);
          }}
        ></textarea>
        
        <button className={styles.btn} disabled={submitted}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Complaint;
