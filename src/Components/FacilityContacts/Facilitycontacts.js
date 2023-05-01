import React from 'react'
import styles from './facilitycontacts.module.scss';
import electricianimg from '../../assets/electrician.svg';
import plumberimg from '../../assets/plumber.svg';
import cableimg from '../../assets/cable.svg';
import carpenterimg from '../../assets/carpenter.svg';
import callicon from '../../assets/callfc.svg';
import star from '../../assets/star.svg';
import rupee from '../../assets/rupee.svg';
import electricianimg1 from '../../assets/electrician1.png';
import plumberimg1 from '../../assets/plumber1.png';
import cableimg1 from '../../assets/cable1.png';
import carpenterimg1 from '../../assets/carpenter1.png';
// import { fetchData } from "../../api/fetch";
// import { useState,useEffect } from 'react';


const Facilitycontacts = () => {
//     const [contact, setContact] = useState([]);
//   useEffect(() => {
//     fetchData("facilityContacts").then((data) => setContact(data));
//     console.log(contact[0]);
//   }, [contact]);
    const facilities =
        [
            [
                {
                    title: "Electrician",
                    src: electricianimg
                },
                [{
                    name: 'Ram Gupta',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: electricianimg1
                }, {
                    name: 'Suraj Sharma',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: electricianimg1
                }, {
                    name: 'Ramesh Gautam',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: electricianimg1
                }, {
                    name: 'Prem Sahu',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: electricianimg1
                }]
            ], [
                {
                    title: "Plumber",
                    src: plumberimg,
                },
                [{
                    name: 'Ram Gupta',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: plumberimg1
                }, {
                    name: 'Suraj Sharma',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: plumberimg1
                }, {
                    name: 'Ramesh Gautam',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: plumberimg1
                }, {
                    name: 'Prem Sahu',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: plumberimg1
                }]
            ], [
                {
                    title: "Cable Operator",
                    src: cableimg,
                },
                [{
                    name: 'Ram Gupta',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: cableimg1
                }, {
                    name: 'Suraj Sharma',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: cableimg1
                }]
            ], [
                {
                    title: "Carpenter",
                    src: carpenterimg,
                },
                [{
                    name: 'Ram Gupta',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: carpenterimg1
                }, {
                    name: 'Suraj Sharma',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: carpenterimg1
                }, {
                    name: 'Ramesh Gautam',
                    phone: '+913332456337',
                    rating: '3.5',
                    charge: '200',
                    src: carpenterimg1
                }]
            ]
        ];


    return (
        <div className={styles.contact}>
            <h1 className={styles.heading}>FACILITY CONTACTS</h1>
            <div className={styles.job}>
                {
                    facilities.map((val,i) =>(
                    <div key={i}>
                                <div className={styles.jobheading} > 
                                    <img src={val[0].src} alt='job' />
                                    <h1 className={styles.jobhead}>{val[0].title}</h1>
                                </div>
                                <div className={styles.cards}>
                                    {
                                        val[1].map((x, j) => {return(
                                            <div key={j}>
                                                <div className={styles.card} >
                                                    <img src={x.src} alt='' className={styles.profileimg} />
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
                        )
                    )}
            </div>
          
        </div>
    )
}

export default Facilitycontacts;