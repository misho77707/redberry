import "./Info.css"
import React, {useState} from "react";
const regex = (/^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/)

function Tip1(props) {
  const [email, setEmail] = useState('')
  console.log(email);
  const [error, setError] = useState('');
  const checkEmail = (e) => {
      // alert('WRYYYY');
      setEmail(e.target.value);

      if( regex.test(e.target.value) === false){
          setError('invalidi xar')
          // alert('WRYYYY')
      }else {
          setError('');
          return true;
      }}
  return (
    <div className={props.tipnamediv}> 
    <label style={{color:error?'red':''}} className="saxeli">{props.name}</label>
   <input style={{borderColor:error?'red':''}} onChange={checkEmail} className={props.sax} type={props.tipi} minlength="2" placeholder={props.pname}></input>
    <p style={{color:error?'red':'#2E2E2E'}}>{props.lower}</p>

    
    </div>

  )
}


export default Tip1;