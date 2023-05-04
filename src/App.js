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
  // Bills,
  Footer,
  Funds,
} from "./Components";
import "./App.module.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import decode from "jwt-decode";
import styles from "./App.module.scss";
import {useState } from "react";

const App = () => {
    const [user, settUser] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  // const logout = () => {
  //   localStorage.clear();
  //   settUser(null);
  // };
  //Auto logout feature if implemented earlier
  // useEffect(() => {
  //   const token = user?.token;
  //   if (token) {
  //     const decodedToken = decode(token);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   settUser(JSON.parse(localStorage.getItem("profile")));
  // }, [user?.token]);
  
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.home}>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <div className={styles.content}>
                    <AnnouncementHead />
                    <About />
                    <Feature />
                    <Committee />
                    <Complaint />
                  </div>
                </React.Fragment>
              }
            />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/fcontact" element={<Facilitycontacts />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/expenditure" element={<Expenditure />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
        <div className={styles.profile}>
          {user ? <Profile /> : <Login settUser={settUser} />}
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
