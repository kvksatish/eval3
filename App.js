import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    
        <Navbar/>
      <Routes>
        <Route path="/Home"  element={<Home/>} />
      
      <Route path="/Login"  element={<Login/>} />
        
      </Routes>
    </div>
  );
}

export default App;
