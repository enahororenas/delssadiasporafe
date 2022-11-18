import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
    background-color: var(--primary-500);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .foot{
    bottom:0;
    position:fixed;
    margin-left: 20px;
  }

.flexContainer {
    display: flex;
    border: 1px solid var(--grey-200);
    border-radius: var(--borderRadius);
  }

.inputMain {
  /* Tell the input to use all the available space */
  flex-grow:2;
  /* And hide the input's outline, so the form looks like the outline */
  border:none;
}

.showbutton{    
  background: var(--backgroundColor);
  border: none;
  }


  @media (max-width: 992px) {
    .foot{
      margin-left: 10px;
      position:static;
    }
  }
`
export default Wrapper
