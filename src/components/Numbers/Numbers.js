
import './Numbers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Numbers(){  

    const cards = [
        {
            "Icon" : "", 
            "Number" : "100%", 
            "Word": "GEN CERT PASSRATE"
        },
        {
            "Icon" : "", 
            "Number" : "32", 
            "Word": "YEARS AS A WITNESS TO THE LIGHT"
        },
        {
            "Icon" : "", 
            "Number" : "50", 
            "Word": "BUILDINGS CONSTRUCTED"
        },
       
    ] 

    return( 

        <>
          
           <div className='numbersCover'> 

                    <div className='numbersHeading'><h2>A few Interesting Numbers<FontAwesomeIcon icon="check-square" /></h2> </div>
                        <div className='numbersContainer'>
                            <div className='numberCards'> 
                                    {cards.map((item,index)=>{ 
                                            
                                            return(
                                                <div className='numbersCard' key={index}>
                                                    
                                                    
                                                    <div className='contentCover'> 
                                                            <h1>{item.Number}</h1>
                                                            <p>{item.Word}</p>

                                                    </div>
                                                    
                                                </div>
                                            )

                                    })}


                        </div>
                    </div>
                    

           </div>
        </>
    )

}

export default Numbers;