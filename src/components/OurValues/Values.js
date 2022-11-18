import img3 from "../../images/img3.jpg"
import './Values.css'

function OValues(){  

    return( 

        <> 
                  <div className="welcomeWindow">
                    <div className="windowImg">
                         <img  src={img3}/>
                    </div>
                    <div className="windowText">
                    <h1>Our Mission and Philosophy</h1>
                    <p>We believe every child is given a unique set of gifts and abilities from God and it is our job as educators to help nurture these. As we discover what makes each child special so we help to build their confidence and sense of self worth.</p>

                    <p>This is why we run a broad based curriculum that values the traditional academic subjects, the creative curriculum, and the opportunities for character development and leadership training through boarding life and responsibilities and through our unique outdoor education programme.</p>

                    <button>FIND OUT MORE</button>
                    </div>
                    
                   
                </div>
        </>
    )

}

export default OValues;