import "./Laptop.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Vector from "./img/Vector.png";
import {useDropzone} from 'react-dropzone';
import Tip from "./Tip";
import Select from "./Select";
import Radio from "./Radio";
import Buttons from "./Buttons";
import Logo from "./img/Logo.png";
import Tip2 from "./Tip2";



const Laptop = () => 
{
    function Dropzone(props) {
        const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
          // Disable click and keydown behavior
          noClick: true,
          noKeyboard: true
        });
    
        const files = acceptedFiles.map(file => (
          <p key={file.path}>
            {file.path} 
          </p>
        ));
    
        return (
          <div className="specsinput">
            <div {...getRootProps({className: 'dropzone'})} className="dnd">
              <input {...getInputProps()}  />
              <p className='specsp'>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
              <button type="button" onClick={open}>
              <p id="p1">&nbsp;&nbsp;&nbsp;ატვირთე</p>
              </button>
              <p className="specsf">{files}</p>
            </div>
    
          </div>
        );
      }
    return ( 
        
        <div className="laptop">
            <Navbar></Navbar><div className="LineR"></div>
            <Link to="/">
              <div className="BackButton2"><img className="Infoimg2" src={Vector} alt=""/>
              </div>
              </Link>
            <div className="rectangle2">
              <div id="line1">
              </div>
              <div>
              <Tip2 tipi="text" sax="laptopsax" tipnamediv="laptopn" name="ლეპტოპის სახელი" lower="ლათინური ასოები, ციფრები, !@#$%^&*()_+=" pname="  HP"></Tip2>
              </div >
             
                <div>
                  <Select Selecttype="select1" url="https://pcfy.redberryinternship.ge/api/brands" defaultOpt="ლეპტოპის ბრენდი"></Select>
                </div>
              <div >
                <Select Selecttype="select2" id="cpu1" url="https://pcfy.redberryinternship.ge/api/cpus" defaultOpt="CPU"></Select>
              </div>
              <div>

              <Tip Inputname="BCpu" tipi="text" sax="saxcpuB" tipnamediv="cpuB" name="CPU-ს ბირთვი" lower="მხოლოდ ციფრები" pname="  14" ></Tip>
                </div>
                <div>
                <Tip Inputname="NCpu" tipi="text" sax="saxcpuN" tipnamediv="cpuN" name="CPU-ს ნაკადი" lower="მხოლოდ ციფრები" pname="  365" ></Tip>
                </div>
                <div>
                  <Tip Inputname="Rm" tipi="text" sax="saxRam" tipnamediv="Ram" name="ლეპტოპის RAM (GB)" lower="მხოლოდ ციფრები" pname="  16" ></Tip>
                </div>
                <Radio Rdiv="Rdiv1" name="მეხსიერების ტიპი" optOne="SSD" optTwo="HDD" Radiostyle="Radiostyle"/>
                <div id="line2">
              </div>
              <Tip tipi="text" sax="saxDro" tipnamediv="Dro" name="შეძენის რიცხვი (არჩევითი)" lower="" pname="  დდ / თთ / წწწწ" ></Tip>
              <Tip Inputname="mani"  tipi="text" sax="saxMoni" tipnamediv="Moni" name="ლეპტოპის ფასი" lower="მხოლოდ ციფრები" pname="  0000" ></Tip>
              <Radio Rdiv="Rdiv2" name="მეხსიერების ტიპი" optOne="ახალი" optTwo="მეორადი" Radiostyle="Radiostyle2"/>
              <Link to="/Popup"><Buttons Btype="save" name="დამახსოვრება"></Buttons></Link>
              
               <Link to="/Info"><Buttons Btype="bb" name="უკან"></Buttons></Link> 
              


    
                </div>
            <div id="asatvirti"><Dropzone></Dropzone>
            </div>
          
          <img className="wlogo" src={Logo} alt=""></img>
            

        </div>
     );
}
 
export default Laptop;