import React,{useState} from 'react'
import Wrapper from '../../assets/wrappers/Contactus'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import {FaYoutube,FaInstagram} from 'react-icons/fa'

const initialState = {message:''}

const Contact = () => {
  const {showAlert,displayAlert,isLoading,sendEmail,customAlert,user} = useAppContext()
    const [values,setValues] = useState(initialState)
  
    const handleChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value})
    }
  
    const reset = (e)=> {
      e.preventDefault()
      setValues({ ...initialState })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const {message} = values
        
         if(!message){
            displayAlert()
            return
          }

          if(message.length>500){
            customAlert("Message must be 500 characters or less")
            return
          }
          
         sendEmail({ fname:user.fname,lname:user.lname, email:user.email, message })
         setValues({ ...initialState })
    }

  return (
        <Wrapper>
          <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar top ='Contact Us'/>
              <div>
              

              <form className='form' onSubmit={handleSubmit}>
                {showAlert && <Alert/>}
                    <div className='form-center'>
                    
              <div className='form-row'>
                <label htmlFor='fname' className='form-label'>First Name</label>
                <input type='text' value={user.fname} name='fname' className='form-input' readOnly/>
              </div>

              <div className='form-row'>
                <label htmlFor='lname' className='form-label'>Last Name</label>
                <input type='text' value={user.lname} name='lname' className='form-input' readOnly/>
              </div>

              <div className='form-row'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' value={user.email} name='email' className='form-input' readOnly/>
              </div>

        <p>Message must be 500 characters or less</p>
        <div>
        
        <textarea style={{width: '100%',maxWidth: '100%',height:'100px', fontFamily:'Sans-Serif,cabin',fontSize:'0.875rem'  }}
            placeholder="Start typing..."
            name="message"
            value={values.message} 
            onChange={handleChange}
        />
      </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>

       <div style={{marginTop:'20px'}}>
       <button className='btn btn-block' disabled={isLoading} onClick={reset}>Reset</button>
        </div> 
      

      </div>
      </form>

      <div className="social-container">
        <h4 className='social-caption'>Follow us on Social Media</h4>
        <a href="https://www.youtube.com/channel/UCY8XOxQYGyyJarpNME4cnxg"
        className="youtube social">
        <FaYoutube size={40}/>
          </a>

        <a href="https://www.instagram.com/delssaa_diaspora/"
        className="instagram social">
        <FaInstagram size={40}/>
          </a>
          
        </div>


              </div>
            </div>
          </main>
        </Wrapper>
    
    
  )
}

export default Contact