
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Welcome from "./components/Welcome/Welcome";
import Landing from "./Pages/Landing/Landing";
import {Routes,Route,Navigate} from 'react-router-dom'
import {HashRouter as Router} from 'react-router-dom'
import Primary from "./components/Primary/Primary";
import OValues from "./components/OurValues/Values";
import Secondary from "./components/Secondary/Secondary";
import Aboutus from "./Pages/Aboutus/Aboutus";

function App() {
  return (
   
    <Router> 

        <Routes>
            <Route path='/'  element={<Landing/>}>
                <Route index element={<OValues />} />
                <Route index path="Values" element={<OValues />} />  
                <Route path="Primary" element={<Primary />} />
                <Route path="Secondary" element={<Secondary />} />
                 
            </Route> 
            <Route path='/Aboutus'  element={<Aboutus/>}>
                {/* <Route index element={<OValues />} />
                <Route index path="Values" element={<OValues />} />  
                <Route path="Primary" element={<Primary />} />
                <Route path="Secondary" element={<Secondary />} /> */}
                 
            </Route> 

            {/* <Route  element={<Landing />} /> */}

        </Routes>
    </Router>
    // <div>
    //   <NavBar/>
    //   <HeroSection/>
    //   <Welcome/>
      
    // </div>
    
  );
}

export default App;
