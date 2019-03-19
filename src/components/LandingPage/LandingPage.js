import React, { Component } from 'react'
import classes from './LandingPage.module.scss';
import bgImg from './1.jpeg';
import Typed from 'react-typed';

const LandingPage=()=>{
  const mouseMoveHandler=(e)=>{
    console.log(e.target)
    let clientX=e.clientX * -1/30;
    let clientY=e.clientY * -1/30;
    e.target.style.backgroundPosition=`${clientX}px `+` ${clientY}px`;
    
  }
  return(
    <div className={classes.container} style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover',backgroundPosition:'center'}} onMouseMove={mouseMoveHandler}>
       <div className={classes.titleContainer} >
       <h1 className={classes.mainTitle}>Designer, Front-end Developer & Programmer</h1>
       <Typed 
          strings={['I design and code beautifully ',' and I love what I do.']} 
          className={classes.subTitle}
          typeSpeed={60}
          backSpeed={70} 
          loop
        />
       </div>
    </div>
  )
}

export default LandingPage;
