import React from 'react';
import classes from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer=(props)=>(
        <div className={classes.footer}>
          <div className={classes.invitation}>
              <h1>Start a Project</h1>
              <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
              <button onClick={()=>props.history.push('contact')}>Lets do this</button>
          </div>
          <h1 className={classes.msg}>Let's get social</h1>
          <div className={classes.footerSocial}>
          <a href="tanveerctg2014@gmail.com">
            <FontAwesomeIcon
                  icon={['fab','google']}
                  color="white"
                  style={{cursor:'pointer'}}
                  className={classes.google}
            />
            </a>
            <a href="https://twitter.com/tanveerctg2014">
              <FontAwesomeIcon
                  icon={['fab','twitter']}
                  color="white"
                  style={{padding:'7px',fontSize:'35px',border:'2px solid white',borderRadius:'50%',cursor:'pointer'}}
                  className={classes.twitter}
            />
            </a>
            <a href="https://www.facebook.com/tanveer.ulhoque.9">  
              <FontAwesomeIcon
                    icon={['fab','facebook']}
                    color="white"
                    style={{cursor:'pointer'}}
                    className={classes.facebook}
              />
              </a>
          </div>
          <h5 className={classes.madeWith}><span>Made with</span> &nbsp; &nbsp;<FontAwesomeIcon
                    icon={['fab','react']}
                    color="gainsboro"
                    style={{padding:'5px',fontSize:'55px'}}
                    transform="down-5"
          /> &nbsp;<span className={classes.REACT}>React</span></h5>
          <h5 className={classes.warning}>All rights reserved by me<span style={{padding:'6px'}}>&#9400;</span>2019</h5>
      </div>

)
export default Footer;