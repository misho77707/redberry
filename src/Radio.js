import React from 'react'
import './Laptop.css'

const RadioInput = (props) => {
  return (
    (
        <>
         <form>
              <h3 className={props.Rdiv}>{props.name}</h3>
              <div className={props.Radiostyle}>
                <input type="radio" id="op1" name="Options" value="opton1" />
                <label> {props.optOne} </label><br/>
                <input type="radio" id="op2" name="Options" value="option2"/>
                <label> {props.optTwo} </label><br/>
              </div>
            </form>
        </>
    )
  )
}

export default RadioInput