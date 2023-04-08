import React, { useState } from "react";
import styles from "./Register.module.scss";
import { client } from "../../api/client";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [alternate, setAlternate] = useState("");
  const [wing, setWing] = useState("");
  const [flat, setFlat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const checkEmail = async () => {
    try {
      const query = `*[_type == "user" && email == "${email}"]`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch data.");
    }
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword) console.log("password dont match");
    else {
      const formData = {
        firstName,
        lastName,
        phone,
        alternate,
        wing,
        flat,
        email,
        password,
        allowed: false,
      };
      const emailCount = await checkEmail();
      if (emailCount.length > 0) {
        alert("already exists");
      } else {
        client
          .create({
            _type: "user",
            ...formData,
          })
          .then((response) => {
            console.log("Object created successfully: ", response);
          })
          .catch((error) => {
            console.error("Error creating object: ", error);
          });
      }
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.border}>
          <div className={styles.title}>Hello, Welcome to 'Society Name'!</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.userdetails}>
              <div className={styles.inputbox}>
                <input
                  className={styles.firstName}
                  type="text"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className={styles.lastName}
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.inputbox}>
                <input
                  className={styles.phone}
                  type="text"
                  placeholder="Phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className={styles.alternate}
                  type="text"
                  placeholder="Alternate phone number"
                  required
                  value={alternate}
                  onChange={(e) => setAlternate(e.target.value)}
                />
              </div>
              <div className={styles.inputbox}>
                <input
                  className={styles.wing}
                  type="text"
                  placeholder="Wing number"
                  required
                  value={wing}
                  onChange={(e) => setWing(e.target.value)}
                />
                <input
                  className={styles.flat}
                  type="text"
                  placeholder="Flat number"
                  required
                  value={flat}
                  onChange={(e) => setFlat(e.target.value)}
                />
              </div>
              <div className={styles.inputbox}>
                <input
                  className={styles.email}
                  type="text"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputbox}>
                <input
                  className={styles.password}
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className={styles.confirm}
                  type="password"
                  placeholder="Confirm your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.button}>
              <button type="submit">Register</button>
            </div>
          </form>
          <div className={styles.end}>
            Already have an account? <p className={styles.login}>Login now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
