import styled from 'styled-components'

const Wrapper = styled.section`
   
   .hsize{
    font-weight: bold;
   }

.pwidth{ 
  max-width: 100%;
  text-indent: 2%;
  margin-bottom: 0;
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
  }
`
export default Wrapper
