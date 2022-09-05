import React from 'react'
import "./Info.css"
function Email(props) {
  return (
    <div className='tipnamediv2'> 
    <label className="saxeli2">{props.name}</label>
   <input className="sax2" type="text" placeholder={props.pname}></input>
    <p>{props.lower}</p>

    
    </div>

  )
}

export default Email
