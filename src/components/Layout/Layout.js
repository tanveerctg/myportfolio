import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Layout=(props)=>{
  
  return(
     <Scrollbars style={{ width: '100vw', height: '100vh' }} renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#dfe2e2',width:'4',opacity: '0.5'}}/>
      }>
    <div>
      <main>
        {props.children}
      </main>
    </div>
    </Scrollbars>
   
  )

  }
export default Layout;