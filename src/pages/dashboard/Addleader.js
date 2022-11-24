import React, {useState} from 'react'
import { FormRow,Alert } from '../../components'
import Wrapper from '../../assets/wrappers/GeneralSharedLayout'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext } from '../../context/appContext'


const Addleader = () => {
    const [Title,setTitle] = useState('')
    const [Name,setName] = useState('')
    const [pres,setPres] = useState('')
    const [pos,setPos] = useState('')
    const [selectedFile, setSelectedFile] = useState('');
    const [image, setPreviewSource] = useState(null);
    const [toggleProject,settoggleProject] = useState(true)
    const {showAlert,isLoading,displayAlert,customAlert,addLeader,addPres} = useAppContext()

    const clearArray=(e)=>{
      e.preventDefault()
      setSelectedFile('')
      setTitle('')
      setName('')
      setPres('')
      setPos('')
      setPreviewSource(null)
    }

    const change = () => {
      setSelectedFile('')
      setTitle('')
      setName('')
      setPres('')
      setPos('')
      setPreviewSource(null)
      settoggleProject(!toggleProject)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        if(file){
          reader.readAsDataURL(file);
          reader.onloadend = () => { 
          setPreviewSource(reader.result)  
            }  
        }
    }

    const handleFileInputChange = (e) => {
      if (e.target.files) {
        previewFile(e.target.files[0])
        setSelectedFile(e.target.files[0])
      }
    }

      const handleSubmit =(e) => {
        e.preventDefault()

       if(toggleProject){
        if(!selectedFile || !Name || !Title||!pos){
          displayAlert()
          return
        }
       } else {
        if(!selectedFile || !pres){
          displayAlert()
          return
          } 
       }  

          if(selectedFile){ const max = 1*(10**7)
            if(parseInt(selectedFile.size) > max) {
              customAlert('IMAGE SIZE TOO BIG!! Image must be < 10mb')
              return
            }
           }
            
    if(toggleProject){    
           addLeader({Title,Name,image,pos})  
           setSelectedFile('')
           setTitle('')
           setName('')
           setPreviewSource(null)
    }else {
      addPres({pres,image,pos:'pres'})  
      setPreviewSource(null)
      setSelectedFile('')
      setPres('')
    }
      }

  return (
    <Wrapper>
      <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar top ='Add Executive Member'/>
              <div className='dashboard-page'>

              <div className='btncover'>
                <button type="button" onClick={change} className="btn btnpos btntoggle" >
                {toggleProject ? 'Add Past President':'Add Current Executive Member'}
                </button>
                </div>

    <form className='form' onSubmit={handleSubmit}>
    {showAlert && <Alert/>}
    <div className='form-center'>
        <div className='form-row'>

      {toggleProject &&
       <FormRow type='text' labelText='Name' name='Name' value={Name} 
       handleChange={(e)=> setName(e.target.value)}/>     
      }

      {toggleProject &&
      <FormRow type='text' labelText='Group' name='pos' value={pos} 
       handleChange={(e)=> setPos(e.target.value)}/>     
      }

        {toggleProject ?
         <FormRow type='text' labelText='Position' name='Title' value={Title} 
         handleChange={(e)=> setTitle(e.target.value)}/>
        :
        <FormRow type='text' labelText='Name of former president' name='pres' value={pres} 
        handleChange={(e)=> setPres(e.target.value)}/>
      }  
      
          <label htmlFor='image' className='form-label'>Add Image</label>
          <input type='file' name='image' value={""} onClick={e => (e.target.value = null)} onChange={handleFileInputChange} className='form-input'></input>
        </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>  
      <div style={{marginTop:'20px'}}>
      <button className='btn btn-block' disabled={isLoading} onClick={clearArray}>
        {isLoading?'Please Wait.....':'CLEAR'}
      </button>  
      </div>
    </div>
    </form>
             </div>
             {image && <h3 style={{ textAlign:'center', marginTop:'-25px',marginBottom:'10px'}}>Preview</h3> }
             {image && <img src={image}   alt="chosen"  className='center_preview'/>}
            </div>
          </main>
  </Wrapper>
  )
}

export default Addleader