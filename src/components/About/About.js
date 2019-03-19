import React from 'react';
import classes from './About.module.scss';

const About=()=>(
  <div className={classes.container}>
    <div className={classes.about}>
      <h1>Hi, I’m Tanveer. Nice to meet you.</h1>
      <h4>I am a front-end engineer.I have been working in this industry for more than 3 years.I am also a student of Computer Science, I primarily serve other freelancers, and small businesses. Do you need a modern good looking website ? I am here to help you.</h4>
      <div className={classes.skills}>
        <p className={classes.a}>Skills</p>
        <p className={classes.skill}>React JS</p>
        <p className={classes.skill}>HTML 5</p>
        <p className={classes.skill}>CSS</p>
        <p className={classes.skill}>Javascript</p>
        <p className={classes.skill}>Firebase</p>
      </div>
    </div>
  </div>
)
export default About;