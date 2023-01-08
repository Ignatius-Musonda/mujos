import "./LearnGrid.css"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img1.jpg"
// import img3 from "../../images/img3.jpg"
import img4 from "../../images/img1.jpg"
import img5 from "../../images/img2.jpg"

function LearnGrid(){  

    const Images = [
        { 
            "imgUrl" : img1
        },
        { 
            "imgUrl" : img2
        },
        { 
            "imgUrl" : img3
        },
        { 
            "imgUrl" : img4
        },
        { 
            "imgUrl" : img5
        },
        { 
            "imgUrl" : img5
        },
        // { 
        //     "imgUrl" : img5
        // },
        // { 
        //     "imgUrl" : img5
        // },
        // { 
        //     "imgUrl" : img5
        // },
        // { 
        //     "imgUrl" : img5
        // },
    ]

    return( 

        <> 
           <div className="LearnGridCover">
                <div className="subHead">
                    <p>Home</p>
                    <p>/</p>
                    <p>Our Learning</p>
                </div>

                <div className="LearnPicGridCover">

                        {
                            Images.map((item,index)=>{
                                    return (<>
                                    <div key={index} className="LearnGridImg">
                                        <img src={item.imgUrl} />
                                        <div className="gridOverlay">
                                            {/* <div className="overlayContainer"> */}
                                                  <h1>HI people</h1>
                                            {/* </div> */}
                                            
                                        </div>
                                    </div>
                                    
                                    </>)
                            })
                        }

                </div>

           </div>

        </>
    )

}

export default LearnGrid;