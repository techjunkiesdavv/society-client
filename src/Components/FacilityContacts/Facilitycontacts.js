import React from 'react'
import styles from './facilitycontacts.module.scss';
import callicon from '../../assets/callfc.svg';
import star from '../../assets/star.svg';
import rupee from '../../assets/rupee.svg';
import { fetchData } from "../../api/fetch";
import { useState,useEffect } from 'react';
import electricianimg from '../../assets/electrician.svg';
import plumberimg from '../../assets/plumber.svg';
import carpenterimg from '../../assets/carpenter.svg';
import { urlFor } from "../../api/client";
const Facilitycontacts = () => {
    const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetchData("facilityContacts").then((data) => setFacilities(data));
  },[]);
  const arr =[0,1,2];
  const images =[electricianimg, plumberimg,carpenterimg];
 const comp =(val,i,title, currIndex)=>{
    return (
        <div key={i}>
                    <div className={styles.jobheading} > 
                        <img alt='job' src={images[currIndex]}/>
                        <h1 className={styles.jobhead}>{title}</h1>
                    </div>
                    <div className={styles.cards}>
                        {
                            val.map((x, j) => {return(
                                <div key={j}>
                                    <div className={styles.card} >
                                        <img src={urlFor(x.icon.asset._ref)} alt='' className={styles.profileimg} />
                                        <p className={styles.name}>{x.name}</p>
                                        <div className={styles.contactno}>

                                            <div className={styles.call}>
                                                <img src={callicon} alt='' />
                                                <p className={styles.callno}>{x.phone}</p>
                                            </div>

                                            <div className={styles.rating}>
                                                <img src={star} alt='/' />
                                                <p className={styles.ratingval}>{x.rating}/5</p>
                                            </div>
                                        </div>
                                        <div className={styles.price}>
                                            <p className={styles.pricehead}>Visiting Charge</p>
                                            <div className={styles.charge}>
                                                <img src={rupee} alt='/' className={styles.chargeimg} />
                                                <p className={styles.amount}>{x.charge}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )    
                        })
                        }
                    </div>
                    <div className={styles.hro} />
                </div>
    );
 }
    return (
        <div className={styles.contact}>
            <h1 className={styles.heading}>FACILITY CONTACTS</h1>
            <div className={styles.job}>
                {
                facilities.length>0 ? facilities.map((val,i) =>{
                        return(
                            arr.map((v,n)=>{
                               return(v===0?val.carpenter&&comp(val.carpenter,n,"Carpenter",v):v===1?val.plumber&&comp(val.plumber,n,"Plumber",v):val.electrician&&comp(val.electrician,n,"Plumber",v));
                            })
                        )
                    })
                : ""}
            </div>
          
        </div>
    )
}

export default Facilitycontacts;