

import { Link } from 'react-router-dom';
import './SecNavBar.css'


function SecNavBar(){  

    return( 

        <>  
            <div className="SecNavBar"
           
           >
           {/* <div className="NavCover"> */}

                    <div className="NavTop">
                       <ul>
                           <li>Feel free to contact us:</li>
                           <li>+260971873484</li>
                           <li>info@Mujosschool.com</li>
                          
                       </ul>
                     </div>

                   <div 

                   className="NavWhole">

                     <div className="Logo">
                         <Link className="LinkItem" to="/"><h1>Mujos</h1></Link>
                     
                     </div>


                     <div className="NavLinks">
                       <ul>
                            <li><Link className="LinkItem" to="/">Home</Link></li>
                            <li><Link className="LinkItem" to="/aboutus">About Us</Link></li>
                            <li><Link className="LinkItem" to="/OurLearning">Our Learning</Link></li>
                            <li>School Life</li>
                            <li>Admission</li>
  
                       </ul>
                     </div>
                 
                   </div>  

                   <div 
                       // ref={ref}
                       className="scrollobserver">
                        

                   </div>

           </div>
        </>
    )

}

export default SecNavBar;