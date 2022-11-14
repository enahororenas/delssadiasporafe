import React,{ useEffect } from 'react'
import Wrapper from '../../assets/wrappers/Dash'
import {Navbar,BigSidebar,SmallSidebar,Countdown} from '../../components'
import { useAppContext } from '../../context/appContext'
import {FaBirthdayCake} from 'react-icons/fa'
import BellIcon from '../../components/Bellicon'
import { useNavigate } from 'react-router-dom'


const Dash = () => {
  const {user,getBday,bdays,totalBday,monthly,totalMonthly,getEvent,events,totalNews,getNews,
    updateRead} = useAppContext()
  const currentMonth = new Date().toISOString().slice(5, 7)
  const navigate = useNavigate()
useEffect(()=>{
  getBday()
  getEvent()
  getNews()  
},[totalNews]);
  
  //events.map((ev, index) => {console.log('TOT',ev.event,index)})

  const uname= user.fname+' '+user.lname

  const handleclick = ()=> {
    updateRead({totalNews})
    navigate('/news')
  }

  return (  
    <Wrapper>

      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
          <div>
            
           <Navbar top='Dashboard'/>
           <div className="card-container">
            {user.admin && <span className="pro">ADMIN</span>}
            
            <div className='bell'>
            {totalNews !== user.read ? 
            <BellIcon width='32' handleclick={handleclick} active={true} animate={true} color={'#FF0000'} />     
            :
            <BellIcon width='32' handleclick={handleclick} active={true} color={'#02899C'} />     
            }
            
            </div>

            <div className='image-height'>
            <img className="round" src={user.image}  alt="user"/>
            </div>
              
              <h3 style={{marginBottom:'30px'}}>{uname}</h3>
            
        
    <div className='disp-grid'>
      <h5 className='gridelem'>Class</h5>
      <h5 className='nonelem nonebdy'>{user.yog}</h5>
      <h5 className='gridelem'>House</h5>
      <h5 className='nonelem nonebdy'>{user.house}</h5>
      <h5 className='gridelem'>Location</h5>
      <h5 className='nonelem nonebdy'>{user.location}</h5>
      <h5 className='gridelem'>Occupation</h5>
      <h5 className='nonelem nonebdy'>{user.occupation}</h5>
      <h5 className='gridelem'>Favorite Subject</h5>
      <h5 className='nonelem nonebdy'>{user.subject}</h5>
      <h5 className='gridelem'>Favorite Teacher</h5>
      <h5 className='nonelem nonebdy'>{user.teacher}</h5>
    </div>



    <div className="buttons">
    <button className="primary ghost">Class</button> &ensp; {user.yog}
    </div>
    <div className="buttons">
    <button className="primary ghost">House</button> &ensp; {user.house}
    </div>
    <div className="buttons">
    <button className="primary ghost">Location</button> &ensp; {user.location}
    </div>
    <div className="buttons">
    <button className="primary ghost">Occupation</button> &ensp; {user.occupation}
    </div>
    <div className="buttons">
    <button className=" primary ghost">Favorite Subject</button>  &ensp; {user.subject}
    </div>
    <div className="buttons">
    <button className="primary ghost">Favorite Teacher</button> &ensp; {user.teacher}
    </div>
    

    <div>
    { events.length > 0 && events.map((ev, index) => {return(
        <Countdown key={index} date={ev.date} event={ev.event}/>
        )})}
    </div>  


    <div className="bday_parent">
    {totalBday > 0 &&
          <div className='dashbirthday'>
          <h3 className='bdaycaption'>Birthday{totalBday > 1 && '\'s'}</h3>
          {bdays.map((bd, index) => {
            return <div key={index}><FaBirthdayCake/> {bd.fname} {bd.lname}'s birthday is today</div>
            })}
        </div>
        }

        {totalMonthly > 0 &&
          <div className='dashbirthday'>
          <h3 className='bdaycaption'>Upcoming Birthday{totalMonthly > 1 && '\'s'}</h3>
          {monthly.map((bd, index) => {
            return <div key={index}>{bd.fname} {bd.lname}'s birthday : {currentMonth}-{bd.day}</div>
            })}
        </div>
        }
    </div>

</div>
     
      </div>
      </main>


    </Wrapper>
  )
}

export default Dash