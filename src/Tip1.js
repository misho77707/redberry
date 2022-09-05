import "./Info.css"
import React, {useState, useEffect} from "react";
import Button1 from "./Button1";
const regex = (/^[ა-ჰ]+$/);

function Tip1(props) {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState('');
  console.log(email);
  const [error, setError] = useState('');
  const CheckEmail = (e) => {
    
    setValue(e.target.value);
    localStorage.setItem(props.Inputname, e.target.value);
      setEmail(e.target.value);

      if( regex.test(e.target.value) === false || e.target.value.length<2){
          setError('invalid')
          
      }else {
          setError('');
          return true;
      }}
      useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setValue(localStorage.getItem(props.Inputname));}, []);
  return (
    <form onSubmit={CheckEmail}>
    <div className={props.tipnamediv}> 
    <label  style={{color:error?'red':''}} className="saxeli">{props.name}</label>
   <input value={value}  style={{borderColor:error?'red':''}} onChange={CheckEmail} className={props.sax} type={props.tipi} minlength="2" placeholder={props.pname}></input>
    <p style={{color:error?'red':'#2E2E2E'}}>{props.lower}</p>

    
    </div></form>

  )
}


export default Tip1;