import { Link } from "react-router-dom";
import Vector from "./img/Vector.png";

const List = () => {
    return (
        <div>
            <Link to="/"><div className="BackButton2"><img className="Infoimg2" src={Vector} alt=""/></div></Link>
            <div className="LapList">
                
            </div>
        </div>
      );
}
 
export default List;