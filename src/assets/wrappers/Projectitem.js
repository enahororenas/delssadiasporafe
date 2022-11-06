import styled from 'styled-components'

const Wrapper = styled.div`
    background: var(--white);
    border-radius: var(--borderRadius);
  //display: grid;
  //grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);

.container{
  padding: 20px;
}
  .info{
    margin-top: 20px;
  }
  .description{
    //color: #974ede;
    color: var(--primary-300);
  }

  .amt{
    font-weight: bolder;
  }

  .main-icon {
    width: fit-content;
    height: 60px;
    display: grid;
    place-items: center;
    //background: #5D3FD3;
    background: var(--primary-500);
    border-radius: 12px;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
    padding: 10px;
  }

  @media (min-width: 992px) {
    .container{
    margin-left:50px;
  } 
  }
`
export default Wrapper
