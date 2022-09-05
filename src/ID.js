import "./Info.css"
import Logo from "./img/Logo.png"
import Select from "./Select";
// import Select2 from "./Select2";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import Tip1 from "./Tip1";
import Email1 from "./Email1";
import Email2 from "./Email2";
import React from "react";

const ID = () => {
     
    return ( 
        <div><img className="Infologo" src={Logo} alt=""></img><div className="LineL"></div>
        <form id="form">
<div className="rectangle">
     <div className="rectangletipdiv">
          <Tip1 Inputname="inputname" tipi="text" sax="sax" tipnamediv="tipnamediv" name="სახელი" lower="მინიმუმ 2 სიმბოლო, ქართული ასოები" pname="გრიშა"></Tip1>
     <Tip1 Inputname="inputSname" tipi="text" sax="sax" tipnamediv="tipnamediv" name="გვარი" lower="მინიმუმ 2 სიმბოლო, ქართული ასოები" pname="ბაგრატიონი"></Tip1></div>
     <Select selectInputValue="selval1" Selecttype="select" url="https://pcfy.redberryinternship.ge/api/teams" defaultOpt="თიმი"></Select>
     <Select selectInputValue="selval2" Selecttype="select" url="https://pcfy.redberryinternship.ge/api/positions"defaultOpt="პოზიცია"></Select>
     <div className="rectangletipdiv2">
     <br></br><br></br>
     <Email1 EmailInputValue="email" name="მეილი" lower="უნდა მთავრდებოდეს @redberry.ge-ით" pname="grish666@redberry.ge"></Email1>
     <br></br><br></br><br></br>
     <Email2 EmailInputValue="num" name="ტელეფონის ნომერი" lower="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს" pname="+995 598 00 07 01"></Email2>
     </div>
     <div id="idbutton1"><Link to="/Laptop"><Button1 name="შემდეგი"></Button1></Link></div>
    

     </div></form>
     
</div>
     );
}
 
export default ID;