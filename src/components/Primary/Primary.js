
import img2 from "../../images/img2.jpg"

function Primary(){  

    return( 

        <>

                <div className="welcomeWindow">
                    <div className="windowImg">
                         <img  src={img2}/>
                    </div>
                    <div className="windowText">
                    <h1>Our Primary School</h1>
                    <p>Mujos Primary offers a Christian boarding school for students from pre-school to Grade 7.</p>

                    <p>Mujos Primary’s commitment to the development of the whole child is seen through its provision of early literacy development, Cambridge Maths programmes, sporting opportunities, outdoor education and adventure education curriculum, specialised art and music teaching, and regular programmes for public speaking, drama performances, and a wide variety of extra-mural activities.</p>

                    <button>FIND OUT MORE</button>
                    </div>
                    
                   
                </div>

        </>
    )

}

export default Primary;