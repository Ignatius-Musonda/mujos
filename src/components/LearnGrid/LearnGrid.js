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
            "imgUrl" : img1,
            "Desc" : "Our Approach"
        },
        { 
            "imgUrl" : img2,
            "Desc" : "Enchrichment Subjects"
        },
        { 
            "imgUrl" : img3,
            "Desc" : "Development subjects"
        },
        { 
            "imgUrl" : img4,
            "Desc" : "Assessments"
        },
        { 
            "imgUrl" : img5,
            "Desc" : "Curriculum Overviews"
        },
        { 
            "imgUrl" : img5,
            "Desc" : "Extra currilum"
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
                                            
                                            <h2>{item.Desc}</h2>

                                            <div className="overlayContainer">
                                                <button> Read More</button>
                                            </div>
                                            
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