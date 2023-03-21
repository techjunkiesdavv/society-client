import { useEffect, useState } from "react";
import { Complaint, Expenditure } from "./Components";
import { fetchData } from "./api/fetch";

function App() {

// check fetch

// const [contact,setContact]= useState([]) ;
//   useEffect(() => {   
//     fetchData('contact').then((data)=>setContact(data)) ;
//   }, [contact]);
//   { contact.map((data,index)=><p key={index}>{data.name} {data.email} { data.message}</p>)}


  return (
    <div>
      <Complaint />
      <Expenditure />
      
    </div>
  );
}

export default App;
