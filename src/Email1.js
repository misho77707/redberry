import React, {useState, useEffect} from "react";
import "./Info.css"

 var regex = /\w+@redberry.ge$/;
function Email1(props) {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState('')
  console.log(email);
  const [error, setError] = useState('');
  const checkEmail = (e) => {
    
      setValue(e.target.value);
      localStorage.setItem(props.EmailInputValue, e.target.value);
  
      // alert('WRYYYY');
      setEmail(e.target.value);

      if( regex.test(e.target.value) === false){
          setError('invalidi xar')
          // alert('WRYYYY')
      }else {
          setError('');
          return true;
      }}
      useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setValue(localStorage.getItem(props.EmailInputValue));}, []);

  return (
  

    <div className='tipnamediv2'> 
    <label style={{color:error?'red':''}} className="saxeli2">{props.name}</label>
   <input value={value} style={{borderColor:error?'red':''}} onChange={checkEmail} className="sax2" type="text" placeholder={props.pname}></input>
    <p style={{color:error?'red':'#2E2E2E'}}>{props.lower}</p>

    
    </div>

  )
}

export default Email1
