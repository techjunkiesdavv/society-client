import React from 'react';
import styles from './footer.module.scss';
import footerimg from '../../assets/footerimg.svg';
import footermap from '..//..//assets/footermap.svg'
import footercall from '..//..//assets/footercall.svg'
import footeremail from '..//..//assets/footeremail.svg'


const quicklinks=['Home','Funds','Announcements','Facility Contacts', 'Expenditure', 'Complaint']
const info=[
    {
        img: footermap,
        desc: 'xyz address, xyz address, xyz address, xyz address'
    },
    {
        img: footercall,
        desc: '1234567890'
    },
    {
        img: footeremail,
        desc: 'society@gmail.com'
    }
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={footerimg} alt='/' className={styles.image}/>
      <div className={styles.footerinfo}>
            <div className={styles.contactinfo}>
                <p className={styles.contactinfohead}>SOCIETY NAME</p>
            {
                info.map((val,i) => {return(
                    <div key={i}>
                        <div className={styles.societyinfo}>
                            <img src={val.img} alt="icon"/>
                            <div className={styles.address}>{val.desc}</div>
                        </div>
                    </div>
                )})
            }
            </div>
            <div className={styles.quicklinks}>
            {
                    quicklinks.map((link,i)=>{return(
                        <div className={styles.links} key={i}>{link}</div>
                    )}
            )}
            </div>
      
      </div>
    </div>
  )
}

export default Footer
