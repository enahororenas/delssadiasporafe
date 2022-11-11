import React,{ useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow, Alert } from '../components'
import { useAppContext} from '../context/appContext'

const Reset = () => {
  const {isLoading,showAlert,customAlert,sendCode,valToken} = useAppContext()
    const [email,setEmail] = useState('')
    const [token,setToken] = useState('')
    const [password,setPassword] = useState('')
    const [conf,setConf] = useState('')
    const [login,setLogin] = useState(false)
    const [done,setDone] = useState(false)
    const [codeSent, setCodeSent] = useState(false);
    const [confirmed, setConfirmed] = useState(true);    
    const navigate = useNavigate()
  
  
    useEffect(() => {
      //console.log('USE EFFECT',user)
      if(login){setTimeout(() => {navigate('/register')},1000)}
    },[login,navigate,confirmed,done])

    const handleSuccessClick = (e)=>{
      e.preventDefault()
      setLogin(!login)
    }
  
    const handleConfirmClick = async(e) => {
      e.preventDefault()
      if(!password||!conf||!token||!email){
        customAlert('Please provide all values')
        return
      } 
      if(password !== conf){
        customAlert('Both password fields must match')
        return
      }
      const res = await valToken({password,token,email})

      if(res){
        setDone(true)
        setConfirmed(true)
      } 
    }

    const handleSendCodeClick = async(e) =>{
      e.preventDefault()
    
      if(!email){
        customAlert('Must provide email')
        return
      }  
      
      const res =  await sendCode({email})
      if(res){
        setCodeSent(true)
        setConfirmed(false) 
      }
    }

    function renderSuccessMessage() {
      return (
        <form className='form' onSubmit={handleSuccessClick}>  
        <h3>SUCCESS</h3>
          {showAlert && <Alert/>} 
          <button type='submit' className='btn btn-block' disabled={isLoading}>Login</button>
        </form>
      );
    }


function renderConfirmationForm() {
  return (
    <form className='form' onSubmit={handleConfirmClick}>  
    <h3>Reset Password</h3>
      {showAlert && <Alert/>} 
      <FormRow type='email' name='email' value={email}   handleChange={(e)=> setEmail(e.target.value)}></FormRow>
      <FormRow type='password' name='password'  value={password}  handleChange={(e)=> setPassword(e.target.value)}></FormRow>  
      <FormRow type='password' name='password' labelText = 'Retype Password'
       value={conf}  handleChange={(e)=> setConf(e.target.value)}></FormRow>  
       <FormRow type='password' name='token' labelText = 'Recovery Token from Email'
        value={token} handleChange={(e)=> setToken(e.target.value)}></FormRow>

  <button type='submit' className='btn btn-block' disabled={isLoading}>
  {isLoading?'Please Wait.....':'SUBMIT'}
  </button>
  </form>
    );
  }
function renderRequestCodeForm() {
  return (
    <form className='form' onSubmit={handleSendCodeClick}>  
          <h3>Reset Password</h3>
            {showAlert && <Alert/>} 

            <FormRow type='email' name='email' value={email}   handleChange={(e)=> setEmail(e.target.value)}></FormRow>
        <button type='submit' className='btn btn-block' disabled={isLoading}>
        {isLoading?'Please Wait.....':'SUBMIT'}
        </button>
        
        <p>Back to Login
        <button type="button" onClick={(e)=> setLogin(!login)} className="member-btn">
          Register
          </button>
        </p>
        </form>
  );
}


    return (
      <Wrapper className='full-page'>
         {!codeSent && renderRequestCodeForm()}
        {!confirmed && renderConfirmationForm()}
        {done && renderSuccessMessage()}
        <div><footer className='foot'>© EE 2022</footer></div>
      </Wrapper>
    )
  }
  
  export default Reset