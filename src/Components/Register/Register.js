import React from 'react'
import styles from "./Register.module.scss";

export default function Register() {
  return (
    <div>
        
          <div className={styles.container}>
            
            <div className={styles.border}>
          
          <div className={styles.title}>Hello, Welcome to 'Society Name'!</div>
            <form action="#">
              <div className={styles.userdetails}>
                <div className={styles.inputbox}>
                  <input className={styles.firstName} type="text" placeholder="First Name" required />
                  <input  className={styles.lastName} type="text" placeholder="Last Name" required />
                  </div>
               
                  <div className={styles.inputbox}>
                  
                  <input className={styles.phone} type="text" placeholder="Phone number" required />
                  <input  className={styles.alternate} type="text" placeholder="Alternate phone number" required />
                </div>
                <div className={styles.inputbox}>
                  
                  <input className={styles.wing} type="text" placeholder="Wing number" required />
                  <input  className={styles.flat} type="text" placeholder="Flat number" required />
                </div>
                <div className={styles.inputbox}>
                  
                  <input  className={styles.email} type="text" placeholder="Enter email" required />
                </div>
                
                <div className={styles.inputbox}>
                  
                  <input   className={styles.password} type="text" placeholder="Enter your password" required />
                  <input   className={styles.confirm}type="text" placeholder="Confirm your password" required />
                </div>
              </div>
              
              <div className={styles.button}>
                <button>Register</button>
              </div>
            </form>
            <div className={styles.end}>Already have a account?<p className={styles.login} > Login now</p>{/*use Link and To instead of p */}</div>
          </div>
        </div>
      </div>
      
    );
 
}


