import { useEffect, useState } from "react";
import "./Mission.css"

function Mission(){  

       const [offsetY, setOffsetY] = useState(0); 
       const handleScroll = () => setOffsetY(window.pageYOffset); 
     

    useEffect(()=>{ 
         
        window.addEventListener("scroll",handleScroll); 

        return () => window.removeEventListener("scroll", handleScroll);

    },[])

    return( 

        <>
          <div className="MissionCover" 
        //   style={{ transform: `translateY(-${offsetY * 0.5}px)`}}
        //   style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          >

                    <div className="MissionWord"
                        
                    // style={{ transform: `translateY(-${offsetY}px)`}}
                    //  style={{ transform: `translateY(${offsetY * 0.8}px)` }}
                     > 
                            {/* <div>  */}

                                <h1>Our Mission</h1>
                                <h3>Education is key to the success of your Dreams.</h3>

                            {/* </div> */}

                    </div>

          </div>
        </>
    )

}

export default Mission;