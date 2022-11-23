
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";

import Welcome from "../../components/Welcome/Welcome";
import News from "../../components/News/News";
import Numbers from "../../components/Numbers/Numbers";
import Gallery from "../../components/Gallery/Gallery";
import Mission from "../../components/Mission/Mission";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import SubFooter from "../../components/SubFooter/SubFooter";

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
                    <Mission/>
                    <Partners/>
                    {/* <SubFooter/> */}
                    <Footer/>
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