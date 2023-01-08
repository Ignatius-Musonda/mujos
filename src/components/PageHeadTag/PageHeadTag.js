
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
            "CID" : 2,
            "Cimg1" : img1, 
            "CHeading" : "Our History", 
            "CContent" : <p>In October 1985, during a church retreat, the Mkushi Christian Fellowship was presented with the challenge of starting a secondary school. The urgent need for such a facility was based upon the fact that there had been a general decline in educational standards and key people in rural areas particularly did not have easy access to secondary education. The cost of education overseas or in neighbouring countries was prohibitive and led to many leaving the country when their children reached secondary school age.<br/><br/>

            After much prayer and careful consideration, the leaders of Mkushi Christian Fellowship responded by deciding to establish a secondary boarding school rooted firmly on Christian principles in the Mkushi district. It should provide education particularly for children of farmers and people actively involved in Christian work and be an outreach into the community, training potential church and national leaders.<br/><br/>
            
            The school should have high academic standards and give the opportunity for young people to develop fully their God-given abilities in all spheres by including a range of practical and outdoor activities. It was emphasised that the school should provide neither a 'veneer' of Christianity nor be a 'spiritual hothouse'. However, it should give a positive exposure to Christianity, which will equip for life in modern society.<br/><br/>
            
            At the beginning of 1986 a farmhouse and outbuildings with 200 hectares of land was donated for the school. A Trust was established and after recruiting sufficient staff and acquiring temporary classrooms, the doors were opened in 1988 with an initial intake of 50 children.<br/><br/>
            
            The school is governed by a Board with representatives from a broad spectrum of Christian leadership in Zambia. Its function is to co-ordinate the provision of material and human resources and oversee the direction and development of the school. A fundamental policy is that the school should be a 'non-profit' organisation and fees should only cover running expenses, not capital costs.<br/><br/>
        
            </p>
        },
        {
            "CID" : 3,
            "Cimg1" : img1, 
            "CHeading" : "Core Values", 
            "CSubHeading" : <>
                <h2>Our Core Values at Chengelo</h2>
                <p>Below are the core values that guide and direct our school:</p>

                <h2>Faith</h2><br/>
                <b>Now faith is confidence in what we hope for and assurance about what we do not see.</b>  
                <p><b>Hebrews 11:1</b></p><br/>
                <p>We recognise that to know God and to believe in Him, is to have faith and trust in Him.</p>

                <h2>Servant Hearted</h2><br/>
                <b>Whoever wants to become great among you must be your servant.</b>
                <p><b>Matthew 20: 26</b></p><br/>
                <p>The greatest commandment Jesus taught is to Love the Lord your God, and the second, to Love your neighbour as you love yourself.</p>

                <h2>Creativity</h2><br/>
                <b>So God created mankind in his own image, in the image of God he created them.</b>
                <p><b>Genesis 1:27</b></p><br/>
                <p>We are designed to be creative, to show initiative, to be problem solvers.</p>

                <h2>Integrity</h2><br/>
                <b>Whoever walks in integrity walks securely.</b>
                <p><b>Proverbs 10:9</b></p><br/>
                <p>To be true to ourselves and true to our God, means to allow the person on the inside to be the same as the person on the outside. This involves honesty, accountability, responsibility, and righteousness.</p>


            </>
          
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
            "CID" : 5,
            "Cimg1" : img1, 
            "CHeading" : "P.T.A", 
            "CContent" : <>
                <h2>Aims</h2>
                <p>Chengelo's PTA exists:</p>
                <ul>
                    <li>To promote understanding and fellowship between School and Home with the aim of sharing responsibilities.<br/> The overall aim should be to advance the physical, moral, intellectual and spiritual well being of the students.</li>
                    <li> To provide opportunities for parents to enter into the activities of the school and to assist in its development.</li>
                    <li> To give assistance to the school as requested by the Heads.</li>
                    <li> To raise funds for projects approved by the Heads.</li>
                    
                </ul>
                <br/>

                <h2>Executive Committee</h2><br/>
                <p></p>The PTA is governed by an Executive Committee. This body of elected parents and staff meet regularly throughout the year to voice parents’ concerns and carry out the regular business of the PTA.<br/>

                <ul>
                    <li>PTA Chairperson - Mr. O. Silavwe</li>
                    <li>PTA Vice Chairperson</li>
                    <li>PTA Treasurer - Mr. J. Yondela</li>
                    <li>PTA Secretary – Mrs M. Chikwanda</li>
                </ul>
                <br/>

                <h2>Committee Members</h2><br/>
                    <ul>
                        <li>Mr. E. Chikwanda</li>
                        <li>Mrs. P. Nyambe</li>
                        <li>Mr. M. Kaona</li>
                        <li>Pastor. N. Phiri</li>
                        <li>Mrs. D. Hamuwele</li>
                        <li>Mrs. J. L. Willers-Mwansa</li>
                    </ul>
             
                <h2>Ex-Officio Members</h2><br/>
                    <ul>
                        <li>Mr. Andrew Cowling</li>
                        <li>Mr. Chriss Banda</li>
                        <li>Mrs. Esther Mbewe</li>
                        <li>Mr. Silver Gerety</li>
                    </ul>
                    <br/>
                <h2>Annual General Meeting</h2><br/>
                <p>An Annual General Meeting of the PTA is normally held each year at the end of Term 1.</p>
                <br/>
                <h2>Contact the P.T.A</h2><br/>
                <p>To contact the Chengelo Parent Teachers Association please email the PTA Secretary, <br/><b>Mrs. Mary Ann Chikwanda</b> on <b>maryannchikwanda@gmail.com</b> or call her on <b>+260-0966993449</b>.</p>
                

                
                


             </>
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
                                    <h2>{item.CHeading}</h2>
                                </div>
                                <div className='Content'>
                                    <p>{item.CContent}</p>
                                </div>
                                <div className='Content'>
                                    <p>{item.CSubHeading}</p>
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