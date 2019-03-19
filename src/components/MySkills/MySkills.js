import React from 'react';
import classes from './MySkills.module.scss';
import burgerpic from './burgersterritory.png';
import budgetapp from './budgetapp2.jpg';
import restaurant from './hero.jpg';
import a from './github2.png';

const MySkills=()=>(
      <div className={classes.myWork}>
        <h1 style={{fontFamily: 'Lato'}}>My Recent Work</h1>
        <div className={classes.myWorkContainer}>
            <div className={classes.project} style={{backgroundImage:`url(${burgerpic})`}}>
              <div className={classes.projectInfo}>
                <div className={classes.skillContainer}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>React Router</p>
                  <p>React Spring</p>
                  <p>Html</p>
                  <p>Css Grid</p>
                  <p>Firebase</p>
                </div>
                <button><a href="https://testing-bc79f.firebaseapp.com/" className={classes.visitWebsite}>Visit Website</a></button>
              </div>
            </div>
            <div className={classes.project} style={{backgroundImage:`url(${budgetapp})`}}>
            <div className={classes.projectInfo}>
                <div className={classes.skillContainer}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>React Router</p>
                  <p>Html</p>
                  <p>Css Grid</p>
                  <p>Firebase</p>
                </div>
                <button><a href="https://wajih-ee001.firebaseapp.com/" className={classes.visitWebsite}>Visit Website</a></button>
              </div>
            </div>
            <div className={classes.project} style={{backgroundImage:`url(${restaurant})`}}>
            <div className={classes.projectInfo}>
                <div className={classes.skillContainer}>
                  <p>Html</p>
                  <p>Css Grid</p>
                </div>
                <button><a href="https://freshfood.netlify.com/" className={classes.visitWebsite}>Visit Website</a></button>
              </div>
            </div>
            <div className={classes.project} style={{backgroundImage:`url(${a})`}}>
            <div className={classes.projectInfo}>
                <div className={classes.skillContainer}>
                  <p>Bootstrap</p>
                  <p>Vanilla Js</p>
                </div>
                <button><a href="https://serachyourgithub.netlify.com/" className={classes.visitWebsite}>Visit Website</a></button>
              </div>
            </div>
            {/* <div className={classes.project}></div> */}
        </div>
      </div>
)
export default MySkills;
