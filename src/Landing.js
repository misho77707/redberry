import React from 'react';
import logo from './img/L21.png';
import guy from './img/guy.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Landing() {
    
  return (<div className="Land">
    
 

  <div>
   <img className='logo' src={logo} alt="" />
  <img className='guy' src={guy} alt="" />
</div>
    <div className='Lbutton'>
      <div id="b1b"><Link to='/Info'><Button name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"/></Link></div>
      <div id="b2b"><Link to='/List'> <Button name="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"/></Link></div>
  
    
    
 
  </div>
  
</div>)
}