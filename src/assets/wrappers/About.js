import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }

  .ckt{
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
    font-weight: bold;
  }

  .lik{
    color: var(--primary-500);
  }
  .imgtop{
    text-align: center;
    margin-top: 20px;
  }

  .htop{
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }

  .pwidth{
    max-width: 100%;
    margin-right:10px;
    margin-left: 15px;
  }

  .pmid{
    max-width: 100%;
    text-align: center;
  }

  .body-section{
    margin-top: 20px;
}

.imagebody{
  width: 100%;
  height: auto;
}

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    .ckt{
    font-size: 40px;
    margin-top: 30px;
    }
  }

  @media only screen and (max-width: 992px){
.vertical-timeline--two-columns .vertical-timeline-element-content {
  width:80%;
  }
}

`
export default Wrapper
