import React,{useEffect} from 'react'
import {Gallerynavbar} from '../../components'
import Wrapper from '../../assets/wrappers/Leadership'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
//import "../../assets/css/style.min.css";
import Fade from "react-awesome-reveal";
import "react-vertical-timeline-component/style.min.css";
import { useAppContext } from '../../context/appContext'
import { FaGraduationCap } from "react-icons/fa";

const Leadership = () => {
  
  const {getExco,excoMembers,totalExco,totalProjectComm,projMembers,mediaMembers,totalMedia} = useAppContext()
  
  useEffect(()=>{
    getExco()
  },[])
  
  const checkNum = (i) => {
      if(i > 3) { return i % 4 }
      else { return i }
  }

  const colors = ["#001CCE","#4B088A","#008080","#FE2EF7"];
    
  return (
    <Wrapper>
        <div className='navcontrol'><Gallerynavbar top='Executive Committee'/></div>

        <Fade right>  
        <div style={{textAlign:'center',marginTop:'20px'}}>
          <h2>Executive Committee</h2>
       </div> 
    </Fade>
        
        <div className= "body-section">
          <div className="timeline-section">

            <VerticalTimeline lineColor="#FF1042">

          {totalExco > 0 && excoMembers.map((item, index) => (

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              
              
              iconStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >

              <h3 className="vertical-timeline-element-title namefield">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.title}
              </h5>

              <img className='imagebody' src={item.url} alt=''/>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>

    <Fade right>  
        <div style={{textAlign:'center',marginTop:'20px'}}>
          <h2>Project Committee</h2>
       </div> 
    </Fade>

    <div className= "body-section">
          <div className="timeline-section">
            <VerticalTimeline lineColor="#FF1042">
          {totalProjectComm > 0 && projMembers.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              iconStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >

              <h3 className="vertical-timeline-element-title namefield">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.title}
              </h5>

              <img className='imagebody' src={item.url} alt=''/>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>

    <Fade right>  
        <div style={{textAlign:'center',marginTop:'20px'}}>
          <h2>Media Committee</h2>
       </div> 
    </Fade>

    <div className= "body-section">
          <div className="timeline-section">
            <VerticalTimeline lineColor="#FF1042">
          {totalMedia > 0 && mediaMembers.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              iconStyle={{ background: colors[checkNum(index)], color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >

              <h3 className="vertical-timeline-element-title namefield">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.title}
              </h5>

              <img className='imagebody' src={item.url} alt=''/>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
        
    </Wrapper>
  )
}

export default Leadership