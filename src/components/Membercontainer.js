import React from 'react'
import Wrapper from '../assets/wrappers/Membercontainer'
import { FaLocationArrow, FaBriefcase,FaHouseUser,FaCalendar } from 'react-icons/fa'
import {MdEmail,MdOutlineMyLocation} from 'react-icons/md'
import { Fade } from "react-awesome-reveal";


const Membercontainer = ({fname,lname,email,image,location,yog,occupation,house,country}) => {
  const name = fname + ' ' + lname  
  return (
    <Wrapper>
        
    <div>
    <Fade bottom>
        <div className="content">
            <div className='team-members-item image-container'>
                <img src={image} alt=''/>
            </div>
        
        <div className='lower'>
            <h3 className="username">{name}</h3>
           <div className='remain'>
                <div className='details'>
                    <p className='text'><MdEmail />&emsp;{email}</p>           
                    <p className='text'><FaCalendar/>&emsp;{yog}</p>
                    <p className='text'><FaLocationArrow />&emsp;{location}</p>
                    <p className='text'><MdOutlineMyLocation />&emsp;{country}</p>
                    <p className='text'><FaHouseUser />&emsp; {house}</p>
                    <p className='text'><FaBriefcase />&emsp;{occupation}</p>          
            </div>
            </div> 
        </div>        
                
            </div>
        </Fade>
      </div>
        </Wrapper>    
        )
    }

export default Membercontainer