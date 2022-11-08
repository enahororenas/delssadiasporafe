import React, {useState} from 'react'
import { FormRow,Alert } from '../../components'
import Wrapper from '../../assets/wrappers/Addnewsitem'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext } from '../../context/appContext'


const Addnewsitem = () => {
    const [newsItem, setNewsItem] = useState('');
    const [image, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const {showAlert,isLoading,displayAlert,addNews,customAlert,addEvent} = useAppContext()
    const [head,setHead] = useState('')
    const [togglePage,settogglePage] = useState(true)
    const [event,setEvent] = useState('')
    const [date,setDate] = useState('')
    
    const clear = () => {
      setNewsItem('')
      setHead('')
      setEvent('')
      setDate('')
      setPreviewSource('')
      settogglePage(!togglePage)
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
      const file = e.target.files[0];
      previewFile(file);
      setSelectedFile(file);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault()
    
    if(!date || date === ''||!event||event===''){
      displayAlert()
      return
    }

    addEvent({date,event})
  }

    const handleSubmit =(e) => {
        e.preventDefault()
        //console.log('submit button clicked',newsItem)

        if(!newsItem || newsItem === ''||!head||head===''){
            displayAlert()
            return
          }

          
         if(selectedFile){ const max = 1*(10**7)
          if(parseInt(selectedFile.size) > max) {
            customAlert('IMAGE SIZE TOO BIG!! Image must be < 10mb')
            return
          }
         } 


          
         addNews({newsItem,image,head})  
         setNewsItem('')
         setHead('')
         setSelectedFile(null)
         setPreviewSource(null)
      }

//className='form'
  return (
    <Wrapper>
        <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              
                <Navbar top={togglePage ? 'Add News Item':'Add Event'}/>
                <div className='btncover'>
                <button type="button" onClick={clear} className="btn btnpos btntoggle" >
                {togglePage ? 'Add Event':'Add News Item'}
                </button>
                </div>


    <div className='dashboard-page'>

  {togglePage && 
    <form  className='form form-item' onSubmit={handleSubmit}>
    {showAlert && <Alert/>}
    <div>

    <FormRow type='text' labelText='Header' name='head' value={head} 
        handleChange={(e)=> setHead(e.target.value)}/>
    <p>News Article</p>            
        <textarea style={{marginBottom:'20px',width: '100%',height:'300px', fontFamily:'Sans-Serif,cabin',fontSize:'0.875rem'  }}
            name="newsItem"
            value={newsItem}
            onChange={(e)=> setNewsItem(e.target.value)}
        />
      
      <FormRow type='file' name='image' labelText='Add News Item Image' 
      handleChange={handleFileInputChange}
      />

{image && (
              <img
                  src={image}
                  alt="chosen"
                  style={{ height: '200px' ,marginBottom:'10px'}}
              />
          )}
      
         <button className='btn btn-block' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'SUBMIT'}
      </button>   

    </div>
    </form>   
  }

  {!togglePage && (
    <form  className='form form-item' onSubmit={handleSubmitEvent}>
    {showAlert && <Alert/>}
    <div>

    <FormRow type='text' labelText='Event Title' name='event' value={event} 
        handleChange={(e)=> setEvent(e.target.value)}/>

        <div className='form-row'>
        <label htmlFor="Event Date" className='form-label '>Event Date</label>
        <input type="date" name="date" min={new Date().toISOString().slice(0, 10)} 
        className='form-input formwidth' onChange={(e)=> setDate(e.target.value)}/>
        </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'SUBMIT'}
      </button>   

    </div>
    </form>      
  )}

            </div>
          </div>
      </main>
  </Wrapper>
  )
}

export default Addnewsitem