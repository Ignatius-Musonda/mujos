
import './News.css'
import img1 from "../../images/img2.jpg"
import { Link } from 'react-router-dom'

function News(){  

    const shootss = [
        {
            "ImgUrl": img1, 
            "Name": "Arts",
            "Title" : "At Mujo's School, we believe that the Arts are an essential part of education. Art, Music..."
        },
        {
            "ImgUrl": img1, 
            "Name": "Academics",
            "Title" : "We are very proud of our long history of outstanding academic results... "
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Physical Education and Sport at Mujo's places a great emphasis on the individual ..."
        },
    ]


    return( 

        <>
       
        <div className='NewsCover'> 
            <div className="NewsHeading">  
               <h1> Our School News</h1>
               <p>The latest in school news from administration announcements to student activities and achievements!</p> 
               <p>Check back often to keep up to date.</p>

            </div>
            <div className="NewsCardContainer"> 

                                    {
                                    shootss.map((item,index)=>{

                                        return(
                                                <div className="CardHolderNew" key={index}> 
                                            
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


                                                        
                                            
                                            
                                            </div>

                                        )
                                    })
                                }


            </div>
            
        </div>
        </>
    )

}

export default News;