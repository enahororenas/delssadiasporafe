import React,{useState} from 'react'
import Thumbnail from './Thumbnail'
import Wrapper from '../assets/wrappers/Slideshow'
import Comments from './Comment/Comments'
import { useAppContext } from '../context/appContext'
import ImageBtnContainer from './ImageBtnContainer'
import { MdClose } from 'react-icons/md'

const Slideshow = ({ imgs }) => {
    const {commentIndex,updateGlobalIndex,numOfImagePage} = useAppContext()
    
    //console.log('CURRENT GLOBAL INDEX',commentIndex,'====',imgs.length)

    const next = () => {
      if (commentIndex === imgs.length - 1) {
        updateGlobalIndex(0)
      } else {
        updateGlobalIndex(commentIndex + 1)
      }
    }
    const prev = () => {
      if (commentIndex=== 0) {
        updateGlobalIndex(imgs.length - 1)
      } else {
        updateGlobalIndex(commentIndex - 1)
      }
    }

    const [model,setModel] =useState(false)
    const [templateImg, setTemplateImg] = useState('')
    const getImg = (src) => {
        setModel(true)
        setTemplateImg(src)
    }
    
    return (
    <Wrapper>
    <div className="slideshow">

      <div className='allimgp'>
      <div className={model ? 'model open': 'model'}>
        <img src={templateImg} alt=''/>
        <MdClose onClick={()=>setModel(false)}/>
    </div>
      <img className="mainImg" src={imgs[commentIndex].url} alt='' onClick={()=>getImg(imgs[commentIndex].url)}/>
      <div className="actions">
        <button className='leftbtn' onClick={prev}>👈</button>
        <button className='rightbtn' onClick={next}>👉</button>
      </div>
      </div>

      <div className='caption'>
      <p className='pcaption'>{imgs[commentIndex].caption}</p>
      </div>
      
      <div className='thumbDiv'>
      <Thumbnail arr={imgs}  index={commentIndex} />
      </div>
      
      <div className='pageControl'>
        {numOfImagePage > 1 && <ImageBtnContainer/>}
        </div>
      <div className='lowerBody'>
      <Comments url={imgs[commentIndex].url}/>
      </div>
    </div>
      </Wrapper>
    )
  }

export default Slideshow