import './Gallery.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img1.jpg'
import img5 from '../../images/img2.jpg'
import img6 from '../../images/img3.jpg'

function Gallery(){ 
    
    
    const SImages = [ 
   
        { 
            ImgUrl : img1, 
            Names : "SOFT & BAE"
        } ,
        { 
           ImgUrl : img2, 
           Names : "SOFT & BAE1"
       } ,
       { 
           ImgUrl : img3, 
           Names : "SOFT & BAE2"
       } ,
       { 
           ImgUrl : img4, 
           Names : "SOFT & BAE3"
       } ,
       { 
           ImgUrl : img5, 
           Names : "SOFT & BAE4"
       } ,
       { 
           ImgUrl : img6, 
           Names : "SOFT & BAE5"
       } ,
        
   
   
   ]



    return( 

        <> 
            <div className="galleryCover"> 
                     <div className="galleryHeading"> 
                            <h1>TAKE A CAMPUS TOUR</h1>
                            <p>A selection of pictures around our school</p>

                     </div>

                      <div className='CardGallery'> 
         
                            {  
                                SImages.map((item,index)=>{ 
                                    return( 
                                        <div className='Card' key={index}>  

                                                <div className='Holder'>  
                                                    <img src={item.ImgUrl}  className='CardImage' />
                                                </div>  

                                                {/* <div className='clientName'> <h3>{item.Names}</h3></div>  */}

                                    </div> 
                                    )

                                }) 
                            }
                    
                            

                    </div>

            </div>
        </>
    )

}

export default Gallery;