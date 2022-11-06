import ProgressBar from './ProgressBar'
import Wrapper from '../assets/wrappers/Projectitem'

const Projectitem = ({total,completed,topic,unit}) => {

  return (
    <Wrapper>
      <div className='container'>
        <div className='main-icon'>{topic}</div>
        <div className='info'>
          <h5 className='description'>Raised <span className='amt'>{completed}</span> {unit} out of <span className='amt'>{total}</span> {unit}</h5>
        </div>
        <div>
          <ProgressBar completed={completed} total={total}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projectitem
