import React,{useEffect,useState} from 'react'
import Wrapper from '../assets/wrappers/Countdown'

const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return {days, hours, minutes, seconds}
  };

const Countdown = ({date,event}) => {
    const countDownDate = new Date(date).getTime();
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
          setCountDown(countDownDate - new Date().getTime());
        }, 1000);
    
        return () => clearInterval(interval);
      }, [countDownDate]);
    
    const {days, hours, minutes, seconds} =  getReturnValues(countDown);
    const timeUp = countDown > 1 ? false : true
    
    const dayString = days > 1 ? 'days' : 'day';
    const hourString = hours > 1 ? 'hours' : 'hour'
    const minuteString = minutes > 1 ? 'minutes':'minute'
    const secondString = seconds > 1 ? 'seconds':'second'

    //console.log('TIME',days, hours, minutes, seconds,timeUp,countDown)

  return (
    <Wrapper>
    {!timeUp &&
     <div className="countdown parent">
        <h4 className='header'>{event}</h4>
      <div className="card">
        <div className="countdown-value">{days}</div>
        <div className="countdown-unit">{dayString}</div>
      </div>
      <div className="card">
        <div className="countdown-value">{hours}</div>
        <div className="countdown-unit">{hourString}</div>
      </div>
      <div className="card">
        <div className="countdown-value">{minutes}</div>
        <div className="countdown-unit">{minuteString}</div>
      </div>
      <div className="card">
        <div className="countdown-value">{seconds}</div>
        <div className="countdown-unit">{secondString}</div>
      </div>
  </div>
  }

    </Wrapper>
  )
}

export default Countdown