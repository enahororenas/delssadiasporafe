import styled from 'styled-components'

const Wrapper = styled.section`  
.slideshow {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.allimgp{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.caption{
  text-align: center;
}
.pcaption{
  max-width: none;
  margin-bottom: none;
  color: var(--primary-500);
  font-size: medium;
}
.mainImg {
    width:  750px;
    height: 700px;
    object-fit:contain;
  transition: all 500ms;
}

.thumbDiv{
margin-top:20px;
 margin-left: 30%;
}
.lowerBody{ 
  margin-left: 22%;
}
.actions {
  position: absolute;
  top: 55%;
  width: 70%;
  display: flex;
  flex-direction: "row";
  justify-content: space-between; 
}



.actions button {
  background: #0000003d;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-top: 10px;
  margin: 5px;
  border-radius: 15px;
  padding-top: 5px;
}

.actions button:active {
  background: #000000a2;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-top: 10px;
  margin: 5px;
  border-radius: 15px;
  padding-top: 5px;
}

.model{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity .4s ease, visibility .4s ease, transfrom .5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
}

.model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.model.open svg{
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0,0,0,0.4);
    color: #ffffff;
    cursor: pointer;
}

.model img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
}


@media only screen and (max-width: 998px) {

.lowerBody{ margin-left: 10px;}
.actions { 
  margin-left: 0;
  width: 100%;
  top:45%;
}
.pageControl{
  margin-top:7px;
}

.thumbDiv{
  margin-top:20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0px;
}

.mainImg {
    width:  380px;
    height: 300px;
    object-fit:contain;
}

}

@media only screen and (min-width: 600px) and (max-width: 999px){
  .actions {
  margin-left: 0;
  width: 100%;
  top:45%;
}
  .mainImg {
    width:  550px;
    height: 500px;
    object-fit:contain;
}

.pageControl{
  margin-top:7px;
}

.thumbDiv{
  margin-top:20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
}

}
`
export default Wrapper