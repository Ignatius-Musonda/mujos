
import './Partners.css'


import logo1 from "../../images/moeLogo.png"
import logo2 from "../../images/isazLogo.png"
import logo3 from "../../images/asbiro2.jpg"

function Partners(){  

    const Logos = [ 

        {
            "URL" : logo1
        },
        {
            "URL" : logo2
        },
        {
            "URL" : logo3
        },
        // {
        //     "URL" : logo3
        // },
    ]

    return( 

        <>  
             <div className='partnersCover'> 
                
                <div className='partnerWord'>
                        <p><b>Mujos's</b> is proud to partner with the following organisations:</p>
                </div>
               
                  <div className='partnerLogo'>
                            <div className='PLogoGallery'> 
                
                                    {  
                                        Logos.map((item,index)=>{ 
                                            return( 
                                                <div className='PLogo' key={index}>  

                                                            <img src={item.URL}  />
                                                
                                                        {/* <div className='clientName'> <h3>{item.Names}</h3></div>  */}

                                            </div> 
                                            )

                                        }) 
                                    }
                            
                                    

                            </div>

                </div>
                   
             </div>
        </>
    )

}

export default Partners;