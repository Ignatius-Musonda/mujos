
import { useState } from 'react'
import './PageHeadTag.css'
import img1 from "../../images/img1.jpg"

function PageHeadTag(){  

    const [CCID,setCCID] = useState(1);

    const setCIDHandler = (e,CCID) =>{
        
          setCCID(+CCID); 
          
    }

    const Columns = [
        {
            "CID" : 1,
            "Cimg1" : img1, 
            "CHeading" : "Our History", 
            "CContent" : <p>Mujos School is a coeducational Christian Boarding School situated near Mkushi in the Central Province of Zambia.<br/><br/>
 
            We cater for the educational needs of Primary, Secondary and Sixth Form students in a secure and caring environment. Overlooking Mujos is a hill where a large wooden cross has been placed which serves as a constant reminder of the central place that the Lord Jesus occupies in the school. We believe that without a personal knowledge of God the physical, mental and social development of a child is incomplete. Our school motto "As a witness to The Light" summarises our aspirations for the young people who attend the school and go on to further education and the world of work.<br/><br/>
             
            Mujos offers a first class learning environment where pupils are prepared for the University of Cambridge International GCSE and A-Level exams. Fifteen kilometres away is the Ndubaluba Outdoor Centre where our students regularly go on expeditions to face challenges and learn lessons about leadership that cannot be taught in the classroom setting. Our campus has excellent sporting facilities including several soccer fields, a rugby pitch, a 400m running track, netball and basketball courts and a swimming pool.<br/><br/>
             
            Mujos caters for students from 5 to 18 years or older. Whilst the school takes pupils from a variety of backgrounds and faiths, special priority is given to children whose parents are farmers, in full-time Christian service or who live in rural areas.<br/><br/>
             
            Mujos School was founded in September 1988 by the Mkushi Christian Fellowship. Since then God has blessed Mujos and we have grown into a thriving school of about 370 students, with over 70 staff and many supporters drawn from Zambia and all over the world.<br/><br/>
             
            We believe that many of our pupils will become the future leaders of Zambian business and professional life as well as the Church. We trust and pray that God's Kingdom will increase in this nation as a result.<br/><br/>
            </p>
        },
        {
            "CID" : 3,
            "Cimg1" : img1, 
            "CHeading" : "Core Values", 
            "CContent" : <p>Mujos School is a coeducational Christian Boarding School situated near Mkushi in the Central Province of Zambia.<br/><br/>
 
            We cater for the educational needs of Primary, Secondary and Sixth Form students in a secure and caring environment. Overlooking Mujos is a hill where a large wooden cross has been placed which serves as a constant reminder of the central place that the Lord Jesus occupies in the school. We believe that without a personal knowledge of God the physical, mental and social development of a child is incomplete. Our school motto "As a witness to The Light" summarises our aspirations for the young people who attend the school and go on to further education and the world of work.<br/><br/>
             
            Mujos offers a first class learning environment where pupils are prepared for the University of Cambridge International GCSE and A-Level exams. Fifteen kilometres away is the Ndubaluba Outdoor Centre where our students regularly go on expeditions to face challenges and learn lessons about leadership that cannot be taught in the classroom setting. Our campus has excellent sporting facilities including several soccer fields, a rugby pitch, a 400m running track, netball and basketball courts and a swimming pool.<br/><br/>
             
            Mujos caters for students from 5 to 18 years or older. Whilst the school takes pupils from a variety of backgrounds and faiths, special priority is given to children whose parents are farmers, in full-time Christian service or who live in rural areas.<br/><br/>
             
            Mujos School was founded in September 1988 by the Mkushi Christian Fellowship. Since then God has blessed Mujos and we have grown into a thriving school of about 370 students, with over 70 staff and many supporters drawn from Zambia and all over the world.<br/><br/>
             
            We believe that many of our pupils will become the future leaders of Zambian business and professional life as well as the Church. We trust and pray that God's Kingdom will increase in this nation as a result.<br/><br/>
            </p>
        }
        ,
        {
            "CID" : 4,
            "Cimg1" : img1, 
            "CHeading" : "Board", 
            "CContent" : <p>MujoZ School is a coeducational Christian Boarding School situated near Mkushi in the Central Province of Zambia.<br/><br/>
 
            We cater for the educational needs of Primary, Secondary and Sixth Form students in a secure and caring environment. Overlooking Mujos is a hill where a large wooden cross has been placed which serves as a constant reminder of the central place that the Lord Jesus occupies in the school. We believe that without a personal knowledge of God the physical, mental and social development of a child is incomplete. Our school motto "As a witness to The Light" summarises our aspirations for the young people who attend the school and go on to further education and the world of work.<br/><br/>
             
            Mujos offers a first class learning environment where pupils are prepared for the University of Cambridge International GCSE and A-Level exams. Fifteen kilometres away is the Ndubaluba Outdoor Centre where our students regularly go on expeditions to face challenges and learn lessons about leadership that cannot be taught in the classroom setting. Our campus has excellent sporting facilities including several soccer fields, a rugby pitch, a 400m running track, netball and basketball courts and a swimming pool.<br/><br/>
             
            Mujos caters for students from 5 to 18 years or older. Whilst the school takes pupils from a variety of backgrounds and faiths, special priority is given to children whose parents are farmers, in full-time Christian service or who live in rural areas.<br/><br/>
             
            Mujos School was founded in September 1988 by the Mkushi Christian Fellowship. Since then God has blessed Mujos and we have grown into a thriving school of about 370 students, with over 70 staff and many supporters drawn from Zambia and all over the world.<br/><br/>
             
            We believe that many of our pupils will become the future leaders of Zambian business and professional life as well as the Church. We trust and pray that God's Kingdom will increase in this nation as a result.<br/><br/>
            </p>
        }
        ,
        {
            "CID" : 4,
            "Cimg1" : img1, 
            "CHeading" : "All About Us", 
            "CContent" : <p>Mujos School is a coeducational Christian Boarding School situated near Mkushi in the Central Province of Zambia.<br/><br/>
 
            We cater for the educational needs of Primary, Secondary and Sixth Form students in a secure and caring environment. Overlooking Mujos is a hill where a large wooden cross has been placed which serves as a constant reminder of the central place that the Lord Jesus occupies in the school. We believe that without a personal knowledge of God the physical, mental and social development of a child is incomplete. Our school motto "As a witness to The Light" summarises our aspirations for the young people who attend the school and go on to further education and the world of work.<br/><br/>
             
            Mujos offers a first class learning environment where pupils are prepared for the University of Cambridge International GCSE and A-Level exams. Fifteen kilometres away is the Ndubaluba Outdoor Centre where our students regularly go on expeditions to face challenges and learn lessons about leadership that cannot be taught in the classroom setting. Our campus has excellent sporting facilities including several soccer fields, a rugby pitch, a 400m running track, netball and basketball courts and a swimming pool.<br/><br/>
             
            Mujos caters for students from 5 to 18 years or older. Whilst the school takes pupils from a variety of backgrounds and faiths, special priority is given to children whose parents are farmers, in full-time Christian service or who live in rural areas.<br/><br/>
             
            Mujos School was founded in September 1988 by the Mkushi Christian Fellowship. Since then God has blessed Mujos and we have grown into a thriving school of about 370 students, with over 70 staff and many supporters drawn from Zambia and all over the world.<br/><br/>
             
            We believe that many of our pupils will become the future leaders of Zambian business and professional life as well as the Church. We trust and pray that God's Kingdom will increase in this nation as a result.<br/><br/>
            </p>
        }
        ,
        {
            "CID" : 4,
            "Cimg1" : img1, 
            "CHeading" : "P.T.A", 
            "CContent" : <p>Mujos School is a coeducational Christian Boarding School situated near Mkushi in the Central Province of Zambia.<br/><br/>
 
            We cater for the educational needs of Primary, Secondary and Sixth Form students in a secure and caring environment. Overlooking Mujos is a hill where a large wooden cross has been placed which serves as a constant reminder of the central place that the Lord Jesus occupies in the school. We believe that without a personal knowledge of God the physical, mental and social development of a child is incomplete. Our school motto "As a witness to The Light" summarises our aspirations for the young people who attend the school and go on to further education and the world of work.<br/><br/>
             
            Mujos offers a first class learning environment where pupils are prepared for the University of Cambridge International GCSE and A-Level exams. Fifteen kilometres away is the Ndubaluba Outdoor Centre where our students regularly go on expeditions to face challenges and learn lessons about leadership that cannot be taught in the classroom setting. Our campus has excellent sporting facilities including several soccer fields, a rugby pitch, a 400m running track, netball and basketball courts and a swimming pool.<br/><br/>
             
            Mujos caters for students from 5 to 18 years or older. Whilst the school takes pupils from a variety of backgrounds and faiths, special priority is given to children whose parents are farmers, in full-time Christian service or who live in rural areas.<br/><br/>
             
            Mujos School was founded in September 1988 by the Mkushi Christian Fellowship. Since then God has blessed Mujos and we have grown into a thriving school of about 370 students, with over 70 staff and many supporters drawn from Zambia and all over the world.<br/><br/>
             
            We believe that many of our pupils will become the future leaders of Zambian business and professional life as well as the Church. We trust and pray that God's Kingdom will increase in this nation as a result.<br/><br/>
            </p>
        }
    ]

    return( 

        <>   
                <div className='pageSubHead'>
                        <h2>About Us</h2>
                </div>
                <div className='pageContent'>
        
                    <div className='quickMenu'>
                        <h3>Quick Menu</h3>
                        <button>About us</button>
                        {Columns.map((item,index)=>{
                            return(<>
                               
                               <ul>
                                    <li onClick={ e => setCIDHandler(e,item.CID)}>{item.CHeading}</li>
                               </ul>

                            </>)
                        })}
                        {/* <ul>
                            <li>Our History</li>
                            <li>Christian ethics</li>
                            <li>Core Values</li>
                            <li>Board</li>
                            <li>P.T.A</li>
                        </ul> */}

                    </div>
                    <div className='contentOutlet'>
                        {Columns && Columns.map((item,index)=>{
                            return <>
                            {item.CID==CCID && <div className='contentWhole'>

                                <div className='CImage'>
                                 <img src={item.Cimg1}/>
                                </div>
                                <div className='Content'>
                                    <p>{item.CContent}</p>
                                </div>
                                    
                                </div>}
                             
                            </>
                        })}
                       

                    </div>

                </div>
        </>
    )

}

export default PageHeadTag;