import React from 'react'
import LandingPage from '../../components/LandingPage/LandingPage';
import About from '../../components/About/About';
import MySkills from '../../components/MySkills/MySkills';
import Footer from '../../components/Footer/Footer';

const MainPage=(props)=>{

  return(
    <React.Fragment>
      <LandingPage />
      <About />
      <MySkills />
      <Footer history={props.history}/>
    </React.Fragment>
  )
}
export default MainPage;