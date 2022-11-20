import React,{useEffect} from 'react'
import Wrapper from '../../assets/wrappers/Projects'
import {Navbar,BigSidebar,SmallSidebar,Projectitem} from '../../components'
import { useAppContext} from '../../context/appContext'
import Loading from '../../components/Loading'

const Project = () => {
const {getProjects,projects,totalProject,isLoading} = useAppContext()
  useEffect(()=>{
    getProjects()
   },[totalProject])

   const Convert = (value) => {
    return parseFloat(value)
   }

   if(isLoading){return <Loading center/>}

  return (
    <Wrapper>
    <div className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
            <div>
                <Navbar top ='Chapter Projects'/>
                <div className='proj'>
                <ol>
                    {projects.length !== 0 &&  projects.map((projItem, index) => {
                    const lk = 'L'+index
                    return  ( <li key={lk}>
                      <Projectitem key={index} 
                        total = {Convert(projItem.total)}
                        completed={Convert(projItem.completed)}
                        topic = {projItem.topic}
                        unit = {projItem.unit}
                        donor ={projItem.donor}
                        />
                    </li>)})}
                    
                </ol>
                </div>
            </div>
    </div>   
    </Wrapper>     
  )
}

export default Project