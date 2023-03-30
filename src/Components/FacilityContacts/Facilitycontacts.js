import React from 'react'
import contacts from './facilitycontacts.module.scss';
import electricianimg from '../../assets/electrician.svg';
import callicon from '../../assets/callfc.svg';
import star from '../../assets/star.svg';
import rupee from '../../assets/rupee.svg';
import electricianimg1 from '../../assets/electrician1.png';

const Facilitycontacts = () => {
    const facilities =
        [
            
                {
                    title: "Electrician",
                    src: electricianimg,
                    employees: [
                     {
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
                },
    
            
        ];

    return (
        <div className={contacts.contact}>
            <h1 className={contacts.heading}>FACILITY CONTACTS</h1>
            <div className={contacts.job}>
                {
                    facilities.map((val,i) => {return(
                            <div key={i}>
                                <div className={contacts.jobheading} > 
                                    <img src={val.src} alt='job' />
                                    <h1 className={contacts.jobhead}>{val.title}</h1>
                                </div>
                                <div className={contacts.cards}>
                                    {
                                        val.employees.map((x, j) => {return(
                                            <div key={j}>
                                                <div className={contacts.card} >
                                                    <img src={x.src} alt='' className={contacts.profileimg} />
                                                    <h3 className={contacts.name}>{x.name}</h3>
                                                    <div className={contacts.line1}>

                                                        <div className={contacts.call}>
                                                            <img src={callicon} alt='' className={contacts.callicon} />
                                                            <p className={contacts.callno}>{x.phone}</p>
                                                        </div>

                                                        <div className={contacts.rating}>
                                                            <img src={star} alt='/' className={contacts.star} />
                                                            <p className={contacts.ratingval}>{x.rating}/5</p>
                                                        </div>
                                                    </div>

                                                    <div className={contacts.line2}>
                                                        <p className={contacts.line2head}>Visiting Charge</p>
                                                        <div className={contacts.charge}>
                                                            <img src={rupee} alt='/' className={contacts.chargeimg} />
                                                            <p className={contacts.amount}>{x.charge}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )    
                                    })
                                    
                                    }
                                </div>
                                <hr className={contacts.hr}/>
                            </div>
                        )
                    }
                    )}
            </div>

        </div>
    )
}

export default Facilitycontacts