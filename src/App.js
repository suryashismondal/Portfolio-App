import { Route,Routes } from "react-router-dom";
import Aboutme from "./Components/Aboutme";
import Contactme from "./Components/Contactme";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {

  return (
    
      <div className=" font-body overflow-x-hidden overflow-y-hidden  ">
        {/* <Navbar/>
        <Home/>
        <Aboutme/>
        <Projects/>
        <Contactme/> */}
        <Routes>
          <Route path="/"element={<><Navbar/><Home/></>}/>
          <Route path="/About"element={<Aboutme/>}/>
          <Route path="/Projects"element={<Projects/>}/>
          <Route path="/Contact"element={<Contactme/>}/>
        </Routes>
      </div>
      
  );
}

export default App;
