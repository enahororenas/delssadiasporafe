import React,{ useState,useEffect } from 'react'
import Wrapper from '../../assets/wrappers/Addproject'
import {Navbar,BigSidebar,SmallSidebar,Dropdown} from '../../components'
import { FormRow,Alert } from '../../components'
import { useAppContext} from '../../context/appContext'

const Addproject = () => {
    const initialState = {topic:'',completed:'0', total:'',unit:''}
    const [values,setValues] = useState(initialState)    
    const [edit,setEdit] = useState(true)    
    const [del,setDelete] = useState(false)    
    const [toggleProject,settoggleProject] = useState(true)
    const {isLoading,showAlert,displayAlert,addNewProject,customAlert,getProjects,projects,totalProject,
      editProject,deleteProject} = useAppContext()
    const handleChange =(e) =>{ setValues({...values,[e.target.name]:e.target.value})}

    useEffect(()=>{
        getProjects()
       },[totalProject,toggleProject])

       const handleDropDownChange =(item) =>{setValues({...values,...item})}

       const clear = () => {
        setValues({topic:'',completed:'0', total:'',unit:''})
        settoggleProject(!toggleProject)
      }
       
       const handleRadioOption =(field,value) => { 
        if(field === 'delete'){
          setEdit(false)
          setDelete(true)
        }
        if(field === 'edit'){
          setEdit(true)
          setDelete(false)
        }
       }

    const handleUpdateSubmit = (e) => {
      e.preventDefault()
      const {topic,completed,total,unit} = values

      if(del){   deleteProject({topic,completed,total,unit}) }
      
      if(edit){
        
        if(!topic||!completed||!total||!unit) {
          displayAlert()
          return
        } else if (/[a-zA-Z]/i.test(total) || /[a-zA-Z]/i.test(completed)) {
          customAlert('Amount to raise or received must be numbers')
          return
          }
        else {
          editProject({topic,completed,total,unit})
        }
      }
      
          setValues({topic:'',completed:'0', total:'',unit:''})
    }   

    const handleSubmit =(e) => {
        e.preventDefault()
        const {topic,completed,total,unit} = values
          if(!topic||!completed||!total||!unit) {
            displayAlert()
            return
          } else if (/[a-zA-Z]/i.test(total) || /[a-zA-Z]/i.test(completed)) {
            customAlert('Amount to raise or received must be numbers')
            return
            }
          else {
            addNewProject({topic,completed,total,unit})
          }
        setValues({topic:'',completed:'0', total:'',unit:''})
    }    

  return (
    <Wrapper>
            <div className='dashboard'>
                <SmallSidebar/>
                <BigSidebar/>
                <div>
                <Navbar top={toggleProject ? 'Add New Project':'Update Project'}/>
                
                <div className='btncover'>
                <button type="button" onClick={clear} className="btn btnpos btntoggle" >
                {toggleProject ? 'Update Project':'Add Project'}
                </button>
                </div>

    {!toggleProject && ( 
      <div>
       <form className='form form-item' onSubmit={handleUpdateSubmit}>
        <div>
        {showAlert && <Alert/>}
        </div>
        
      <div style={{marginBottom:'20px',marginTop:'20px'}}>
        <Dropdown isSearchable  placeHolder="Choose a project"    options={projects}
        onChange={(value)=>handleDropDownChange(value)}/>
        </div>
  
      <div className='form-center'>
          
        <FormRow type='text' labelText='Topic' name='topic' value={values.topic} 
        handleChange={handleChange}/>
      
        <FormRow type='text' labelText='Amount Received' name='completed' value={values.completed} 
        handleChange={handleChange}/>
      
        <FormRow type='text' labelText='Amount to Raise' name='total' value={values.total} 
        handleChange={handleChange}/>
        
        <FormRow type='text' labelText='Unit of Budget (₦,$,£)' name='unit' value={values.unit} 
        handleChange={handleChange}/>

        <label >Edit 
          <input name="edit" type="radio"  checked={edit} onChange={(e)=>{handleRadioOption('edit',e.target.value)}}/>
        </label>

        <label >Delete 
          <input name="delete" type="radio"  checked={del} onChange={(e)=>{handleRadioOption('delete',e.target.value)}}/>
        </label>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>

        </div>
      </form>
        </div>
    )}

    {toggleProject && (
     <div>
       <form className='form form-item' onSubmit={handleSubmit}>
        {showAlert && <Alert/>}
            
      <div className='form-center'>
    
        <FormRow type='text' labelText='Topic' name='topic' value={values.topic} 
        handleChange={handleChange}/>
      
        <FormRow type='text' labelText='Amount Received' name='completed' value={values.completed} 
        handleChange={handleChange}/>
      
        <FormRow type='text' labelText='Amount to Raise' name='total' value={values.total} 
        handleChange={handleChange}/>
        
        <FormRow type='text' labelText='Unit of Budget (₦,$,£)' name='unit' value={values.unit} 
        handleChange={handleChange}/>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>
      </div>
      </form>
        </div>
    )}

    
     </div>
    </div>
    </Wrapper>
    
  )
}

export default Addproject