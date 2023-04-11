import { Complaint,Login,About,Profile,Sidebar,Footer,Expenditure,Committee,Feature,Announcement,AnnouncementHead,Facilitycontacts ,Bills,Funds} from "./Components";
import './App.module.scss';
import styles from './App.module.scss';
import { useEffect, useState } from "react";
import { fetchData } from "./api/fetch";

// check fetch

function App() {
  const [contact, setContact] = useState([]);

  // text for queries are:-


  // expenditure
  // committe_members
  // about
  // announcements
  // facilityContacts
  // bills

  useEffect(() => {
    fetchData("about").then((data) => setContact(data));
  }, []);

  console.log(contact);
  const [page, setPage] = useState("Home");
  const [login, setLogin] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar setPage={setPage} />
      </div>
      <div className={styles.home}>
     {page==="Home"&&<AnnouncementHead/>}
     {page==="Home"&&<About/>}
     {page==="Home"&&<Feature/>}
     {page==="Home"&&<Complaint/>}
     {page==="Complaint"&&<Complaint/>}
     {page==="Home"&&<Committee/>}
      {page==="Expenditure"&&<Expenditure/>}
      {page==="Announcement"&&<Announcement/>}
      {page==="Home" && <Bills />}
      { page === "Home" && <Facilitycontacts />}
      {page==="Funds" && <Funds />}
      {page==="Home"&&<Footer/>}
      {page==="Facility Contact"&&<Facilitycontacts/>}
      {/* <Register/> */}
      </div>
      <div className={styles.profile}>
        {login ? <Profile /> : <Login setLogin={setLogin} />}
      </div>

      {/* { contact.map((data,index)=><p key={index}>{data.name} {data.email} { data.message}</p>)} */}
    </div>
     
  );
}
export default App;
