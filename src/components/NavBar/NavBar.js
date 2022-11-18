
import { Link } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'
function NavBar(){  
    return <>
            <div className="NavCover">

                     <div className="NavTop">
                        <ul>
                            <li>Feel free to contact us:</li>
                            <li>+260971873484</li>
                            <li>info@Mujosschool.com</li>
                           
                        </ul>
                      </div>

                    <div className="NavWhole">
                      <div className="Logo">
                        <h1>Mujos</h1>
                      </div>


                      <div className="NavLinks">
                        <ul>
                            <li>Home</li>
                            <li>News Items</li>
                            <li>I.T Short courses</li>
                            <li>Photo Gallery</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Staff</li>
                        </ul>
                      </div>
                  
                    </div>  

            </div>
           
            
            
            
          </>

}

export default NavBar;