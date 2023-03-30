import { Facilitycontacts,Complaint,Login,About,Profile,Sidebar,Expenditure,Committee,Announcement,AnnouncementHead, Bills} from "./Components";
import styles from './App.module.scss';
import { useEffect, useState } from "react";
import { fetchData } from "./api/fetch";


// check fetch

// const [contact,setContact]= useState([]) ;

//   { contact.map((data,index)=><p key={index}>{data.name} {data.email} { data.message}</p>)}
function App() {
  const [contact,setContact]= useState([]) ;
    useEffect(() => {   
    fetchData('contact').then((data)=>setContact(data)) ;
  }, [contact]);
  const [page,setPage]=useState("Home");
  const [login,setLogin]=useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <Sidebar setPage={setPage}/>
      </div>
      <div className={styles.home}>
     {page==="Home"&&<AnnouncementHead/>}
     {page==="Home"&&<About/>}
     {page==="Home"&&<Complaint/>}
     {page==="Complaint"&&<Complaint/>}
     {page==="Home"&&<Committee/>}
      {page==="Expenditure"&&<Expenditure/>}
      {page==="Announcement"&&<Announcement/>}
      {page==="Home" && <Bills />}
      { page === "Home" && <Facilitycontacts />}
      </div>
      <div className={styles.profile}>
      {login?<Profile/>:<Login setLogin={setLogin}/>}
      </div>
     
      { contact.map((data,index)=><p key={index}>{data.name} {data.email} { data.message}</p>)}
    </div>
  );
}
export default App;
