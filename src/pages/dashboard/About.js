import React,{useEffect} from 'react'
import dellogo from '../../assets/jpeg/ds1.png'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import Wrapper from '../../assets/wrappers/About'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { FaGraduationCap } from "react-icons/fa";
import { useAppContext } from '../../context/appContext'
import { Link } from 'react-router-dom'

const checkNum = (i) => {
  if(i > 3) { return i % 4 }
  else { return i }
}

function suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j === 1 && k !== 11) {
      return i + "ST";
  }
  if (j === 2 && k !== 12) {
      return i + "ND";
  }
  if (j === 3 && k !== 13) {
      return i + "RD";
  }
  return i + "TH";
}

const past = [dellogo,dellogo]
const colors = ["#001CCE","#4B088A","#008080","#FE2EF7"];

const About = () => {
  const {exPresidents,totalExPresident,getPres}= useAppContext()

  useEffect(()=>{
    getPres()
  },[])
  
  //console.log('EX',exPresidents,totalExPresident)
  

  return (
      <Wrapper>
      <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar top ='About'/>
              <div>

            <div className='imgtop'><img src={dellogo} alt=''/></div>

        <p className='pwidth'>
        Delta State University Secondary School, Abraka was founded on Monday the 15th of November, 1993. She was opened with 115 day students, 16 part-time teachers, 2 non-teaching staff (a cleaner and a typist) under the leadership of then Mr. Williams P. Akpochafo. He was the Acting Principal who worked tirelessly to make sure the school took off smoothly. The school took off in the University Primary School as an afternoon school and classes were held from 2-6 p.m. daily from Monday to Friday. A provisional Board of Governors for the school was constituted by the then Vice-chancellor - Professor F. M. A. Ukoli, FAS on the 19th of November, 1993 with Professor Eric A. Arubayi as the Chairman. With the completion of a block of 5 classrooms and the administrative block, the school moved to her present premises on the 11th of January 1994. With effect from that date, she changed to the normal operating hours between 7:45 am. and 2.00 p.m.
        </p>

        <p className='pwidth'>
        The first substantive Principal of the University Secondary School, Mrs. C.O. Bakpa, and she assumed duty on the 21st January, 1994. In that same month, 16 full-time teachers and 5 non-teaching staff assumed duty. Prior to the opening of the University Secondary School, a Task Force on the take-off of the school was set up under the chairmanship of Dr. P.O. Itedjere. The task force, after completing its assignment, formally handed over the school to Vice Chancellor Professor F. M. A. Ukoli, FAS and the Principal Mrs. C.O. Bakpa on Monday 21st January, 1994. Following the voluntary retirement of Mrs. C.O. Bakpa, in February, 1998, Mrs. V. M. Onyemakonor was appointed as the Acting Principal of the school till October 1998 when Mr. E.O. Ejiofor took up the mantle of leadership in the school as the substantive Principal. Mr. E. O. Ejiofor retired on May 31st 2001 while, Mrs. V. M Onyemakonor was again appointed Acting Principal of the school. The Acting Principal handled the affairs of the school for two years and four months till October 2nd 2003 when she handed over to Mrs. F. O Igborgbor, the new and third substantive Principal of the Secondary School.
        </p>  

                <h3 className='htop'>DELSSAA DIASPORA HISTORY</h3>
        <p className='pmid'>Delssa diaspora was founded in 2020 and these are her former presidents</p>  

        <div className= "body-section">
          <div className="timeline-section">

          <VerticalTimeline lineColor="#FF1042">

          {totalExPresident > 0 && exPresidents.map((item, index) => (

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
    
              iconStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
              >

              <h3 className="vertical-timeline-element-title namefield">{item.name}</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                THE {suffix_of(index+1)} DELSSAA DIASPORA PRESIDENT</h5>

              <img className='imagebody' src={item.url} alt=''/>
                </VerticalTimelineElement>
              ))}
              </VerticalTimeline>

          </div>
        </div>

      <div className='ckt'>
      <Link className='lik' to='/contact'>Contact us</Link>
      </div>
        

          </div>
        </div>
      </main>
      </Wrapper>
  )
}

export default About