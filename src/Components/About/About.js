import React ,{useState}from 'react'
import {images} from '../../constants';

import styles from "./about.module.scss";

const About = () => {

  return (
  <div className={styles.bcontainer}>
    <div className={styles.acontainer}>
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>ABOUT</h1>
      <h2 className={styles.subhead}> Your Business Success Built<br/>On A Powerful Customer <br/>Experience Platform</h2>
   <p className={styles.content}>Society refers to a group of individuals living together in a specific geographic area, sharing common interests, beliefs, and culture. It is a complex network of social relationships, customs, institutions, and organizations that shape the behavior and interactions of individuals within it. Societies can be organized in different ways, depending on various factors such as geography, history, politics, and economy. They can range from small, closely-knit communities to large, diverse cities with millions of inhabitants. In modern societies, people often interact through formal institutions such as government, schools, and corporations. These institutions play a crucial role in shaping the social, economic, and political landscape of a society..</p>
    </div>
 
    <div className={styles.aboutimage}>
      
      <div className={styles.block1}><span className={styles.imgicon}><img src={images.building} alt=""/></span>8<div>Wings</div></div><div className={styles.line}></div>
      <div className={styles.block2}><span className={styles.imgicon}><img src={images.group} alt=""/></span>2500<div>Members</div></div><div className={styles.line}></div>
      <div className={styles.block3}><span className={styles.imgicon}><img src={images.flat} alt=""/></span>126<div>Flat</div></div>
  
    </div>
    </div>
</div>
);
};

export default About