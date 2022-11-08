import styled from 'styled-components'

const Wrapper = styled.section`
.btnpos{
  margin-top: 20px;
}
.btn-block{
  margin-top: 20px;
}
.form-item{
max-width: 1200px;
width: 100%;
margin: 2rem;
margin-right: 0;
margin-left: 0;
}

.formwidth{
  width: fit-content;
}

.image{
  width: 80%;
  height: 80%;
}
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    //padding: 2rem 0;
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    .btnpos{
      margin-left: 80px;
    }
  }
`
export default Wrapper
