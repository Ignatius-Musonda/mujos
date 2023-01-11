

import { Link } from 'react-router-dom';
import './SecNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes} from '@fortawesome/free-solid-svg-icons';


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
                     
                       className="scrollobserver">
                        

                   </div>

           </div>
            {/* Input field */}
            <input type="checkbox" id="cancel-btn" /> 

            {/* Responsive NavBar unclicked */}
            <div className="resTitle"> 
                
                <div className="barItem"> 
                    
                    <div className="NavItemi"><Link className='text-link' to="/"><h3>Mujos</h3></Link> </div>  
                    
              </div>
        
              <div className="barItem"> 
                  
                              <label for="cancel-btn" className="btn cancel-btn"> <FontAwesomeIcon icon={faBars} /></label>
                
              </div>
   
          </div>

          {/* Resnav Whole clicked/unwarapped*/}
           
          <div className="Wbarinit">    

          <div className="resBar" >  

            <div className="barItem"> 
                
                  <h3 className="NavItemi">Mujos</h3>
                
            </div>

            <div className="barItem"> 
              
                <label for="cancel-btn" className="btn cancel-btn"><FontAwesomeIcon icon={faTimes}/></label>
            </div>

          </div>

            <ul className="Sidelist">  
                    
                    

                                      <li className="ListItem"><Link className='text-link' to="/">HOME</Link> </li>
                                      <li className="ListItem"><Link className='text-link' to="/AboutUs">ABOUT</Link></li>
                                      <li className="ListItem"><Link className='text-link' to="/OurLearning">OUR LEARNING</Link></li>              
                                      <li className="ListItem"><Link className='text-link' to="/SchoolLife">SCHOOL LIFE</Link></li>
                                      <li className="ListItem"> <Link className='text-link' to="/Admission">ADMISSIONS</Link></li>
                                      <li className="ListItem"> <Link className='text-link' to="/Contactus">CONTACT</Link></li>
                                      {/* <li className="ListItem"> <i class="fab fa-opencart"></i></li> */}
                          

                  </ul> 

           

            </div> 

           

        </>
    )

}

export default SecNavBar;