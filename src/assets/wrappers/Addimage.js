import styled from 'styled-components'

const Wrapper = styled.section`
  
  .parent_div {
  width: 100%;
  }
  .child_div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
 }

 .image{
  width: 80%;
  height: 80%;
}


.head-label{
  text-align: center;
}

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    .form-item{
      max-width: 1000px;
      margin-left: 75px;
    }
  }
`
export default Wrapper
