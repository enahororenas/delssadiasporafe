import styled from 'styled-components'


const Wrapper = styled.section`
.deletebutton{
  width:fit-content;
  background-color:red;
  margin-top: 20px;
}
.formcover{
  margin-top: -20px;
}

 .btntoggle{
  margin: 20px;
 }
  .db3{
    margin-left: 20px;
  }

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 0.5rem 0;
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
