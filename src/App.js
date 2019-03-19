import React from 'react';
import MainPage from './containers/MainPage/MainPage';
import ContactPage from './containers/Contact/Contact';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';

import  './App.scss';
const App=()=>( 
   <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
   </BrowserRouter>
  );
  
export default App;
