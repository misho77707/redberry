// import {Link} from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/Info"><div className="Tinfo">
            თანამშრომლის ინფო</div></Link>
            <Link to="/Laptop"><div className="Linfo">
            ლეპტოპის მახასიათებლები</div></Link>
            

        </nav>
     );
}
 
export default Navbar;