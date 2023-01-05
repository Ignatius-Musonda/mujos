
import './PageHeadTag.css'
import img1 from "../../images/img1.jpg"

function PageHeadTag(){  

    return( 

        <>   
                <div className='pageSubHead'>
                        <h2>About Us</h2>
                </div>
                <div className='pageContent'>
        
                    <div className='quickMenu'>
                        <h3>Quick Menu</h3>
                        <button>About us</button>
                        <ul>
                            <li>Our History</li>
                            <li>Christian ethics</li>
                            <li>Core Values</li>
                            <li>Board</li>
                            <li>P.T.A</li>
                        </ul>

                    </div>
                    <div className='contentOutlet'>
                        <img  src={img1} />

                    </div>

                </div>
        </>
    )

}

export default PageHeadTag;