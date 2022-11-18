
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";

import Welcome from "../../components/Welcome/Welcome";
import News from "../../components/News/News";
import Numbers from "../../components/Numbers/Numbers";
import Gallery from "../../components/Gallery/Gallery";

function Landing(){  

    return( 

        <>
          <div className="Landing">
                    <NavBar/>
                    <HeroSection/>
                    <Welcome/>
                    <News/>
                    <Numbers/>
                    <Gallery/>
          </div>
        </>
    )

}

export default Landing;



// function Landing(){  

//     return( 

//         <>
//         </>
//     )

// }

// export default Landing;