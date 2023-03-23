import { Complaint,Login,About,Profile,Sidebar,Expenditure,Committee,Register,Announcement,AnnouncementHead} from "./Components";
import './App.css';
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

  return (
    <div>
      <AnnouncementHead/>
      <About/>
      <Register/>
      <Login/>
      <Profile/>
      <Sidebar/>
      <Complaint />
      <Expenditure />
      <Committee/>
      <Announcement/>
      { contact.map((data,index)=><p key={index}>{data.name} {data.email} { data.message}</p>)}
    </div>
  );
}
export default App;
