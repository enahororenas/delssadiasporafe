import React,{ useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow, Alert } from '../components'
import { useAppContext} from '../context/appContext'
import { FaEyeSlash } from 'react-icons/fa'

const initialState = {
  fname:'',
  lname:'',
  email:'',
  password:'',
  isMember:true,
}

const Register = () => {
    const [reset,setReset] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [values,setValues] = useState(initialState)
    const {user,isLoading,showAlert,displayAlert,setupUser} = useAppContext()
    const navigate = useNavigate()
  
  const toggleMember =() => {
    //console.log('Toggle clicked')
    setValues({...values,isMember:!values.isMember})
  }

  const handleClick = (e)=>{
    e.preventDefault()
    setShowPassword(!showPassword)
  }
  
    const handleChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value})
    }
  
    const onSubmit =(e) =>{
      e.preventDefault()
    
      const {fname,lname,email,password,isMember} = values

      if((!fname && !lname && !isMember) || !email || !password){
        //console.log('NOT A MEMBER')
        displayAlert()
        return
      } 
      if (!isMember && (fname === '' || lname === '' || email === '' || password === '')) {
        displayAlert()
        return
      }
      
      const currentUser = {fname,lname,email:email.toLowerCase(),password}
      
      if (isMember){
        setupUser({currentUser,endPoint:'login',alertText:'Login sccessfully. Redirecting to Dashboard!'})
      } else {
       setupUser({currentUser,endPoint:'register',alertText:'User sccessfully created. Redirecting to Dashboard!'})
      }    
    }
  
    useEffect(() => {
      //console.log('USE EFFECT',user)
      if(user){setTimeout(() => {navigate('/user')},1000)}
      if(reset){setTimeout(() => {navigate('/reset')},1000)}
    },[user,navigate,reset])
  

    return (
      <Wrapper className='full-page'>
          <form className='form' onSubmit={onSubmit}>
          
          <h3>{values.isMember ? 'LOGIN' : 'REGISTER'}</h3>
          
            {showAlert && <Alert/>} 

        {!values.isMember &&
        <FormRow type='text' name='fname' labelText = 'First Name' value={values.fname} handleChange={handleChange}></FormRow>
        }

        {!values.isMember &&
        <FormRow type='text' name='lname' labelText = 'Last Name' value={values.lname}  handleChange={handleChange}></FormRow>
        }
          
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange}></FormRow>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>Password</label>
          <div className='flexContainer'>
          <input type={showPassword ?'text':'password'} value={values.password} name='password'
          onChange={handleChange} className='form-input inputMain'>
          </input>
          <button className='showbutton' onClick={handleClick}><FaEyeSlash/></button>
          </div>
        </div>

        {/*<FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>*/}  
    
        <button type='submit' className='btn btn-block' disabled={isLoading}>
        {isLoading?'Please Wait.....':'SUBMIT'}
        </button>
        
        <p>
        {values.isMember ? 'Not a member yet?':'Already a member?'}
        <button type="button" onClick={toggleMember} className="member-btn">
          {values.isMember ? 'Register':'Login'}
          </button>
        </p>

        {values.isMember  &&
        <p>Forgot password?  
        <button type="button" onClick={(e)=> setReset(!reset)} className="member-btn">Reset password</button>
          </p>
        }
          
        </form>
        <div>
            <footer className='foot'>© EE 2022</footer>
          </div>
      </Wrapper>
    )

  }
  
  export default Register