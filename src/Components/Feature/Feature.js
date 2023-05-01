import React from 'react'
import  './styles.scss';
import FeatureCard from './FeatureCard';

import { images } from "../../constants";

const Feature = () => {
  const featuresData=[{imgUrl:`${images.contact}`,title:'Facility Contact',desc:"In case of any emergency or need for repair and maintenance services in your apartment, we have provided contact informatioyou can get in touch with the following service providers: Plumber, Carpenter, Cable Operator, Electrician, Pest Control and House Cleaning."},
                    {imgUrl:`${images.history}`,title:'Complete payment history',desc:"This section displays a summary of your payment history with the society, including all dues and fees paid towards maintenance and other charges. You can view your payment details for the current and previous months, along with a breakdown of the charges."},
                    {imgUrl:`${images.gate}`,title:'Gate Entry',desc:"This section displays the entry and exit records of all vehicles entering the society premises. You can view your gate entry details for the current and previous months, along with the date and time of entry and exit."},
                    {imgUrl:`${images.bills}`,title:'Track of Bills',desc:"This section displays a summary of your bill payment history with the society, including bills paid for electricity, gas, water, and maintenance charges. You can view your bill payment details for the current and previous months, along with a breakdown of the charges"},
                    {imgUrl:`${images.directory}`,title:'Committee member Directory',desc:"This section displays a directory of all the committee members currently serving in the society management. You can view the details of the committee members, such as their name, contact number, and role in the society."},
                    {imgUrl:`${images.complaint}`,title:'File a Complaint',desc:"This section allows you to file a complaint related to any issues or concerns you may have regacarding the society. You can submit your complaint by filling out the form below with the necessary details.a"}];



 
  return (
    <>
    <div className='fcontainer'>
        <div className='fheading'>
        <div className='fhead'>
            KEY FEATURE
        </div>
        <p className='faboutHead'>We provides key features and services that are essential for the well-being of society members</p>
        </div>
        <div className='featureContainer'>
        {featuresData.map((item,i) => (
          <FeatureCard item={item} key={i} data-id={item.id}/>
        ))}
        </div>
    </div>
    </>
  )
}

export default Feature;