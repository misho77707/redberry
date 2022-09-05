import Landing from "./Landing";
import "./App.css";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Info from "./Info";
import Laptop from "./Laptop";
import Popup from "./Popup";
import List from "./List";

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">

    <Link to="/" ></Link>
    <Link to="/Info"></Link>
    <Link to="/Laptop"></Link>
    
  
<Routes>
  <Route exact path="/" element={<Landing></Landing>}></Route>
  <Route exact path="/Info" element={<Info></Info>}></Route>
  <Route exact path="/Laptop" element={<Laptop></Laptop>}></Route>
  <Route exact path="/Popup" element={<Popup></Popup>}></Route>
  <Route exact path="/List" element={<List></List>}></Route>
  
  
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
