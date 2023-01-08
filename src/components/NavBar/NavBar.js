
import { Link } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import './NavBar.css'


// function useOnScreen(options){ 

//           const ref = useRef(); 
//           const [ visible, setVisible] = useState(false); 

//           useEffect(()=>{ 

//               const observer = new IntersectionObserver(([entry])=>{ 

//                    setVisible(entry.isIntersecting); 

                   
//               },options); 

//               if(ref.current){ 
//                 observer.observe(ref.current); 
//               } 

//               return ( ) =>{ 
//                 observer.unobserve(ref.current); 
//               }

//           },[ref,options]) 


//           return [ref,visible];
// }


 



function NavBar(){   

    const [ visible, setVisible] = useState(false); 
    

 
  //   const changeColor = () =>{    

  //         const COLOR_CHANGE_THRESHOLD = 90;

  //         console.log(("value",window.scrollY, "Hereeee,value"));

  //         if(window.scrollY >= COLOR_CHANGE_THRESHOLD && visible !== true){
  //                   setVisible(true)
  //               }
  //         if(window.scrollY < COLOR_CHANGE_THRESHOLD && visible !== false){
  //                   console.log((window.scrollY, "Hereeee2"));
  //                   setVisible(false)

          

  //       }
  //  } 

      // useEffect(() => {
      //   window.addEventListener('scroll', changeColor);
      //   return () => {
      //     window.removeEventListener('scroll', changeColor);
      //   };
      // }, []);

  //  window.addEventListener("scroll", changeColor);  

      let listener = null
      const [scrollState, setScrollState] = useState(false)
 

      //Changes NavBar color when you scroll over 120 pixels
      useEffect(() => {
        listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop
          if (scrolled >= 120) {
            if (scrollState !== true) setScrollState(true)
          } else {
            if (scrollState !== false) setScrollState(false)
          }
        })
        return () => {
          document.removeEventListener("scroll", listener)
        }
      }, [scrollState])
   
  



    return <>
            <div className={scrollState? "scrollCover": "NavCover"}
           
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

}

export default NavBar;