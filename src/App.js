import {
  Complaint,
  Login,
  About,
  Profile,
  Sidebar,
  Expenditure,
  Committee,
  Feature,
  Announcement,
  Register,
  AnnouncementHead,
  Facilitycontacts,
  Bills,
} from "./Components";
import "./App.module.scss";
import React from "react";
import { BrowserRouter, Routes,
  Route} from "react-router-dom";
import decode from "jwt-decode";

import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { fetchData } from "./api/fetch";

 
const App = () => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetchData("contact").then((data) => setContact(data));
  }, [contact]);

  const [user, settUser] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );


  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    settUser(JSON.parse(localStorage.getItem("profile")));
  
  }, [user]);
  const logout = () => {
    localStorage.clear();

    settUser(null);
  };
  return (
    <BrowserRouter>
        
              
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.home}>
          <Routes>
            <Route path="/" element={
              <React.Fragment>
                <div className={styles.content}>
                  <AnnouncementHead />
                  <About />
                  <Committee />
                  <Feature />
                  <Complaint />
                </div>
            
              </React.Fragment>
            } />
            <Route path="/announcement" element={ <Announcement />} />
            
            
            
            <Route path="/fcontact" element={ <Facilitycontacts />} />
            
            <Route path="/funds" element={ <Bills />} />
            <Route path="/expenditure" element={ <Expenditure />} />
            
            <Route path="/complaint" element={ <Complaint/>} />
            <Route path="/register" element={ <Register />} />
                
          </Routes>
        </div>   
         <div className={styles.profile}>
                  { user?<Profile />:<Login settUser={settUser}/>}
                 
                </div>
         
      </div>
            
    </BrowserRouter>

  );
}
export default App;
