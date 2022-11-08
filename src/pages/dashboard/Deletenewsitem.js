import React,{useEffect,useState} from 'react'
import Wrapper from '../../assets/wrappers/Deletenews'
import {Navbar,BigSidebar,SmallSidebar,Alert} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'

const Deletenewsitem = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [iRows, setiRows] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState([])
    const [togglePage,settogglePage] = useState(true)
    const {getNews,isLoading,news,showAlert,deleteNews,getEvent,events,deleteEvent} = useAppContext()


    useEffect(()=>{
     getNews()
      getEvent()
    },[])

    const clear = () =>{
      setSelectedRows([])
      setSelectedInfo([])
      setiRows([])
      setSelectedEvent([])
      settogglePage(!togglePage)
    }

    if(isLoading){return <Loading center/>}

    const handleCheckbox = (event, newsItem,i) => { //console.log('NID',i,'=',event.target.checked)
    setSelectedRows((state) => ({
        ...state, 
        [i]: event.target.checked,
      }));

    if(event.target.checked) {
        setSelectedInfo((state) => ({
            ...state,
            [newsItem.nid] : newsItem.nid
        }))
      } else { delete selectedInfo[newsItem.nid] } 
   }

   const handleEventChange = (e, ev,i) => { 
    setiRows((state) => ({
      ...state, 
      [i]: e.target.checked,
    }));

    if(e.target.checked) {
      setSelectedEvent((state) => ({
          ...state,
          [i] : ev
      }))
    } else { delete selectedEvent[i] } 

    //console.log('CH',selectedEvent,' IN ',ev)
   }

   const handleEventSubmit =(e) => {
    e.preventDefault()
    deleteEvent(selectedEvent)
    setiRows([])
    setSelectedEvent([])
   }

   const handleSubmit =(e) => {
    e.preventDefault()
    deleteNews(selectedInfo)
    
    //setSelectedRows([])
    //setSelectedInfo([])
   }

   if (news.length === 0 && togglePage) {
    return (
      <Wrapper>
        <h2>No News Article Available...</h2>
      </Wrapper>
    )
  }


  return (
    <Wrapper>

    <main className='dashboard'>
      <SmallSidebar/>
      <BigSidebar/>
      <div>
        
      <Navbar top={togglePage ? 'Delete News Article':'Delete Event'}/>  
      <div className='btncover'>
      <button type="button" onClick={clear} className="btn btnpos btntoggle" >
      {togglePage ? 'Delete Event':'Delete News Article'}
      </button>
      </div>

{togglePage && (
        <form  className='formcover' onSubmit={handleSubmit}>
        <div style={{margin:'20px'}}>
        {showAlert && <Alert/>}

        {news.length !== 0 &&    news.map((newsItem, index) => {
         const lk = 'L'+index
              return  ( 
            
                <div key={lk} >
                    <label key={index}>
                        <input type="checkbox"  name='editnews' value={newsItem.newsItem}
                        checked={ selectedRows[index]  || false } 
                        onChange={(e)=>handleCheckbox(e,newsItem,index)} />
                        {newsItem.header}
                        <div>{newsItem.newsItem}</div>
                    </label>
                </div>    
                    
                )})}
        
        <button className='btn btn-block deletebutton' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'DELETE'}
      </button>   

    </div>
    </form>
)}


{!togglePage && (
  <form  className='formcover' onSubmit={handleEventSubmit}>
        <div style={{margin:'20px'}}>
        {showAlert && <Alert/>}

        {events.length !== 0 &&    events.map((event, index) => {
         const lk = 'E'+index
         const lb = 'L'+index
              return  ( 
                <div key={lk} >
                    <label key={lb}>
                    <input style={{marginRight:'10px'}} type="checkbox"  name='editevent' value={event.event}
                        checked={ iRows[index]  || false }
                        onChange={(e)=>handleEventChange(e,event.event,index)}
                        />
                                              
                      {event.event} ON {event.date}</label>
                </div>    
                )})}
        
        <button className='btn btn-block deletebutton' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'DELETE'}
      </button>   

    </div>
    </form>
)}



      </div>
    </main>

  </Wrapper>
  )
}

export default Deletenewsitem