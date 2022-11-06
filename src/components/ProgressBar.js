import React,{useState,useEffect} from 'react'
import Wrapper from '../assets/wrappers/ProgressBar'


const ProgressBar = ({ completed,total }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      setValue(Math.round((completed/total)*100));
    },[completed,total])

    const fillerStyles = {
        height: '100%',
        width: `${value}%`,
        //backgroundColor: '#6B4AD4',
        backgroundColor: 'var(--primary-500)',
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
      }

  return (
    <Wrapper>
     <div style={{marginBottom:'20px'}}>
    <div className='containerStyles'>
    <div style={fillerStyles}>
      <span className='labelStyles'>{`${value}%`}</span>
    </div>
  </div>
  <div className='total'>100%</div>
  </div>   
  </Wrapper>
  )
}

export default ProgressBar