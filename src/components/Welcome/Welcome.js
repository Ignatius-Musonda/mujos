import './Welcome.css'
import { Link, Outlet } from 'react-router-dom'
// import {Routes,Route,Navigate} from 'react-router-dom'
// import {HashRouter as Router} from 'react-router-dom'
// import Landing from '../../Pages/Landing/Landing'
// import Primary from '../Primary/Primary'
// import OValues from '../OurValues/Values'
import './Welcome.css'
import { useState } from 'react'
import Faculty from '../Faculty/Faculty';

function Welcome() {  
    
    const [values, setValues] = useState(true);
    const [Primary, setPrimary] = useState(false);
    const [Secondary, setSecondary] = useState(false);

    const handleValue = ()=> {
        setValues(true);
        if(Primary || Secondary){ 
            setPrimary(false); 
            setSecondary(false)
        }
      

    }
    const handlePrimary = ()=> {

        setPrimary(true);
        if(values ||Secondary){ 
            setValues(false); 
            setSecondary(false);
        }
        
    }
    const handleSecondary = ()=> {
        setSecondary(true);
        if(values|| Primary){ 
            setValues(false);
            setPrimary(false);
        }
       

    }
    return (
        <> 
           <div className="welcomeCover"> 
                 <div className="welcomeText">
                     <h1>WELCOME TO MUJOS</h1>
                     <p>Founded in 1988 Mujos School has built up an excellent reputation for academic excellence, sporting success, and leadership training. This website can only <br/> touch on a very small part of all that we do but we hope to inspire you enough to visit us in the very near future.</p>
                     <p>The school began with a clear vision, summed up in the motto ‘As a Witness to the Light’. Taken from John’s gospel, this is our constant challenge to aspire to<br/> standards in all areas of school life that truly give honour to God.</p>
                 </div>

                 <div className="welcomeLinks">
                        <ul>
                            {/* <li>Our Values</li>
                            <li>Primary School</li>
                            <li>Seconday School</li> */}

                             <li className={values?"active":"notActive"}><Link to="Values" className='testLink' onClick={handleValue}><h3>Our Values</h3></Link></li>
                            <li className={Primary?"active":"notActive"}><Link to="Primary" className='testLink' onClick={handlePrimary}><h3>Primary School</h3></Link></li>
                            <li className={Secondary?"active":"notActive"}><Link to="Secondary" className='testLink'onClick={handleSecondary}><h3>Seconday School</h3></Link></li> 
                            


                        </ul>

                            
                        
                               
                                <Outlet/>
                        
                 </div>

                 <div> 
                    <Faculty/>
                 </div>
           </div>
        </>
    )
}

export default Welcome