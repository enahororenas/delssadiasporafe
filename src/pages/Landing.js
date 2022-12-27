import React,{useEffect} from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
import groupArt from '../assets/svg/group2.svg'
import { useAppContext } from '../context/appContext'

const Landing = () => {
  const {wakeUp} = useAppContext()
  useEffect(() => {
    wakeUp()
  }, [])

    return (
        <Wrapper>          
          <div className='container page'>
            {/* info */}
            <div className='info'>
              <h1>
                DELSSAA <span>DIASPORA</span>
              </h1>
              <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={groupArt} alt='group selfie' className='img main-img' />
          </div>
          <div>
            <footer>© EE 2022</footer>
          </div>
        </Wrapper>
      )
    }
    

    

export default Landing
