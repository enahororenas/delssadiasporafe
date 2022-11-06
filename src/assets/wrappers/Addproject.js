import styled from 'styled-components'

const Wrapper = styled.section`

.btncover{
  margin:10px;
  margin-left: 5px;
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

  .btn-block{
    margin-top: 20px;
  }


  .mydropdown{
         border:none;
         border-bottom:2px dotted black;
         display:inline;max-width:20%;
         font-style: italic;
         font-weight: 600;
         cursor: pointer;  
    }
    .mydropdown:hover , .myoption:active , .myoption:checked{
         border:2px dotted green;
    }
    .myoption{
         font-style: normal;
    }
    .mydropdown .myoption:checked,
    .mydropdown .myoption:hover ,
    .mydropdown .myoption:active {
        font-style: italic;
        font-weight: 600;
     }
    

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    .btncover{
       margin:30px;
       margin-left: 75px;
    }
    .form-item{
      max-width: 1000px;
      margin-left: 75px;
    }
    .btnpos{
      //margin-left: 0em;
    }
  }
`
export default Wrapper
