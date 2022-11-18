
import "./Faculty.css"
import img1 from "../../images/img2.jpg"
import { Link } from "react-router-dom"

function Faculty(){  

    const shootss = [
        {
            "ImgUrl": img1, 
            "Name": "Arts",
            "Title" : "At Mujo's School, we believe that the Arts are an essential part of education. Art, Music, Drama and an annual School Production are all part of our curriculum."
        },
        {
            "ImgUrl": img1, 
            "Name": "Academics",
            "Title" : "We are very proud of our long history of outstanding academic results. Recently, several Chengelo pupils won Top of the World awards for IGCSE and A-Level examinations."
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Physical Education and Sport at Mujo's places a great emphasis on the individual looking after his/her body and developing a healthy lifestyle. Chengelo teams successfully compete against schools across the country and abroad."
        },
    ]

    return( 

        <> 
             <div className='Cardzz'>  
          {
              shootss.map((item,index)=>{

                  return(
                         <div className="CardHolder" key={index}> 
                    
                                    <div className="ImageHolderThird">
                                    <img src={item.ImgUrl}/> 
                                  
                                    </div>

                                    <div className="ImageText"> 
                                     
                                     <h3>{item.Name} </h3> 
                                     <p> {item.Title}</p>

                                    </div>  
                                    <div className="Icons"> 
                                     
                                     
                                     {/* <i className="fab fa-facebook"></i>
                                     <i className="fab fa-twitter"></i>
                                     <i className="far fa-envelope"></i>
                                     <i className="fab fa-whatsapp"></i>
                                     <i className="fab fa-linkedin"></i>
                                     <i class="fas fa-plus-circle"></i> */}
                                   

                                    </div>  

                                     {/* <button className='moreButton'>Read More</button> */}
                                      <Link to={{pathname:"/Blog"+`/${item.BID}`}} className='moreButtonz' key={index}><button className='moreButtonz'>Find Out More</button></Link> 

                                  
                    
                    
                    </div>

                  )
              })
          }

        </div>  
       
        </>
    )

}

export default Faculty;