


import { Link } from "react-router-dom";
import { useState } from "react";
import './HeroSection.css'

import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
function HeroSection(){  
    return <>
            <div className="HeroCover">

                {/* <div className="heroImage"> */}
                    <img src={img2}/>
                {/* </div> */}
                <div className="heroOverhead">
                    <div className="HerOverHeadflex">
                        <div>

                        <div className="HeroHead">
                                <h1>Your school of <br/>Choice</h1>
                            </div>
                            <div className="HeroSubHead">
                                <h2>Every Learner's Best Learning <br/> Environment</h2>
                            </div>
                            <div className="HeroButton">
                                <button>Enroll With Us</button>

                          </div>

                        </div>
                           

                    </div>
                   
                </div>
                 

            </div>
            
          </>

}

export default HeroSection;