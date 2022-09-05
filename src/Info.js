
import "./Info.css";
import Vector from "./img/Vector.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import Logo from "./img/Logo.png"
import ID from "./ID";



const Info = () => {
  return (
    <div className="Info">
     <Navbar></Navbar>
      <Link to="/"><div className="BackButton"><img className="Infoimg" src={Vector} alt=""/></div></Link>
     <ID></ID>
     
     </div>
     
    );
}
 
export default Info;
