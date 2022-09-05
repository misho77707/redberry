import "./Popup.css"
import thing from './img/Frame1.png';

import Buttons from "./Buttons";
import { Link } from "react-router-dom";
const Popup = () => {
    return ( 
        <div className="popback">
            <div className="popfront">
                <img id="thing" src={thing} alt=""></img>
                <div id="dtitle">
                    <p id="title">ჩანაწერი დამატებულია!</p>
                </div>
                <div className="db1">
                    <Link to="/List"><Buttons Btype="bbb1" name="სიაში გადაყვანა"></Buttons></Link>
                    
                </div>
                <div className="db2">
                    <Link to="/"><Buttons Btype="bbb2" name="მთავარი"></Buttons></Link>
                </div>
                
            </div>
        </div>
     );
}
 
export default Popup;