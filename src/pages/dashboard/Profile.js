import React, {useState} from 'react'
import { FormRow,Alert } from '../../components'
import Wrapper from '../../assets/wrappers/Profile'
import { useAppContext } from '../../context/appContext'
import { Select, MenuItem } from "@mui/material";
import {Gallerynavbar} from '../../components'
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


const Profile = () => {
  const {user,showAlert,displayAlert,updateUser,isLoading,customAlert,updateUsersImage} = useAppContext()

  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [profile_pic, setImage ] = useState('');

  const [lname,setLastName] = useState(user.lname||'')
  const [fname,setFirstName] = useState(user.fname||'')
  const [location,setLocation] = useState(user.location||'')
  const [bday,setBday] = useState(user.bday||'')  
  const [ann,setAnn] = useState(user.ann||'') 
  const [occupation,setOccupation] = useState(user.occupation||'')
  const [house,setHouse] = useState(user.house||'')
  const [teacher,setTeacher] = useState(user.teacher||'')
  const [yog,setYog] = useState(user.yog||'')
  const [subject,setSubject] = useState(user.subject||'')
  const [country, setSelectedCountry] = useState(user.country||'')
  

  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });
  
  const dt = new Date();
  const currentDate = dt.toISOString().slice(0, 10)


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
};


  const previewFile = (file) => {
    const reader = new FileReader();
    if(file){ 
    reader.readAsDataURL(file);
    reader.onloadend = () => { 
      setPreviewSource(reader.result)  
      setImage(reader.result)
    }
  }  
}

  const handleSubmit =(e) => { 
    e.preventDefault()
    if(!fname||!lname||!location||!occupation||!house||!teacher||!subject||!yog||!bday||!country){
      displayAlert()
      return
    }
    updateUser({ fname,lname, location,occupation,house,teacher,subject,yog,bday,email:user.email,ann,country })
    }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    if(!selectedFile||!profile_pic){
      displayAlert()
      return
    }
    const max = 1*(10**7)
    
    if(parseInt(selectedFile.size) > max) {
      customAlert('IMAGE SIZE TOO BIG!! Image must be < 10mb')
      return
    }
    updateUsersImage({ profile_pic,id:user._id})
  }

  return (
    <Wrapper>
        <div className='navcontrol'><Gallerynavbar top='Edit Your Profile'/></div>
      
        {/*<button className='btn btn-block' type='submit' disabled={isLoading}
        onClick={(e)=> setBackB('move')} style={{ marginBottom:'20px',width:'fit-content'}}>
          {isLoading?'Please Wait.....':'BACK TO DASHBOARD'}
        </button>*/}

      <form className='form' onSubmit={handleSubmit}>
      {/*<h3 className='halign'>Edit Your Profile</h3>*/}
      {showAlert && <Alert/>}
      <div className='form-center'>
        <FormRow type='text' labelText='First Name' name='fname' value={fname} 
        handleChange={(e)=> setFirstName(e.target.value)}/>
        
        <FormRow type='text' labelText='Last Name' name='lname' value={lname} 
        handleChange={(e)=> setLastName(e.target.value)}/>

        <FormRow type='text' name='location' value={location} 
        handleChange={(e)=> setLocation(e.target.value)}/>

        <FormRow type='text' name='occupation' value={occupation} 
        handleChange={(e)=> setOccupation(e.target.value)}/>

        <FormRow type='text' name='house' value={house} 
        handleChange={(e)=> setHouse(e.target.value)}/>

        <FormRow type='text' name='teacher' labelText='Favorite Teacher'  value={teacher} 
        handleChange={(e)=> setTeacher(e.target.value)}/>

        <FormRow type='text' name='subject' labelText='Favorite Subject'  value={subject} 
        handleChange={(e)=> setSubject(e.target.value)}/>

        <FormRow type='text' name='yog' value={yog} labelText='Year of Graduation'
        handleChange={(e)=> setYog(e.target.value)}/>

        {/*<FormRow type='month' name='bday' value={bday} labelText='Birthday'
        handleChange={(e)=> setBday(e.target.value)}/>*/}

        <div className='form-row'>
        <label htmlFor="bday-month" className='form-label'>Birthday</label>
        <input type="date" name="bday" min="1900-01" max={currentDate} value={bday}
        className='form-input' onChange={(e)=> setBday(e.target.value)}/>
        </div>

        <div className='form-row'>
        <label htmlFor="ann-month" className='form-label'>Anniversary</label>
        <input type="date" name="ann" min="1900-01" max={currentDate} className='form-input' value={ann}
        onChange={(e)=> setAnn(e.target.value)}/>
        </div>

        <div className='form-row'>
        <label htmlFor="ann-month" className='form-label'>Country</label>
        <Select className='form-input form-prop' value={country} onChange={(e) => setSelectedCountry(e.target.value)}>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
      </Select>
      </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'save profile changes'}
        </button>

      </div>
      </form>

      <div style={{marginTop:'50px'}}>

      <form className='form' onSubmit={handleSubmit2}>
      <h3 className='halign'>Edit Your Profile Image</h3>
      <div className='form-center'>
                
        <FormRow type='file' name='image' labelText='Profile Image' 
        handleChange={handleFileInputChange}
        />

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'save profile image'}
        </button>
      </div>
      </form>
      </div>
      
      <div style={{marginTop:'30px'}}>
      {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}  
      </div>
    </Wrapper>
    
  )
}

export default Profile