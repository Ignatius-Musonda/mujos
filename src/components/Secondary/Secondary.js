
import img1 from "../../images/img1.jpg"
function Secondary(){  

    return( 

        <> 
                <div className="welcomeWindow">
                    <div className="windowImg">
                         <img  src={img1}/>
                    </div>
                    <div className="windowText">
                    <h1>Our Secondary School</h1>
                    <p>Mujos Secondary School was founded in 1988 with a strong Christian ethos which remains today the foundation of all that takes place at the school</p>

                    <p>The formation of a child’s character is valued highly and the school deliberately creates opportunities for this alongside its student leadership programmes. The school benefits from a superb campus with excellent facilities which as well as the high standards of teaching and pastoral care provide an ideal environment for students to learn.</p>

                    <button>FIND OUT MORE</button>
                    </div>
                    
                   
                </div>
        </>
    )

}

export default Secondary;