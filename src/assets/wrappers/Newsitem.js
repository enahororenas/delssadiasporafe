import styled from 'styled-components'

const Wrapper = styled.section`
.h-center{
  text-align:left;
  color: var(--primary-500);
}

.divwrapper {
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
}

.divwrapper2 {
  width: 100%;
  margin-bottom: 30px;
}

.imgbdy {
    float: left;
    margin: 0 20px 20px 0;
    width: 400px;
    height: auto;
}

.par {
    text-align: justify;
    //text-indent: 2em;
    max-width: 100%;
}


@media only screen and (max-width: 998px) {
  .divwrapper {
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
    }

    .imgbdy {
    float: left;
    margin: 0 20px 20px 0;
    width: 250px;
    height: 200px;
      }

    }   
`
export default Wrapper