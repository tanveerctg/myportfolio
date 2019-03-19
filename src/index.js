import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import { faCode, faHighlighter,faMoneyBill ,faEnvelope, faThumbsUp,faPlus, faPlusCircle,faAngleDown,faCheck,faTimesCircle,faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle,faFacebookF,faTwitter,faLinkedin,faReact} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faMoneyBill,
  faCode,
  faHighlighter,
  faEnvelope,
  faFacebook,
  faGoogle,
  faThumbsUp,
  faPlusCircle,
  faAngleDown,
  faCheck,
  faTimesCircle,
  faMinusCircle,
  faFacebookF,
  faTwitter,
  faLinkedin,
  faReact
);

                       
const app= <BrowserRouter> 
                <App />
          </BrowserRouter>
    
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
