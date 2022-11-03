import styled from 'styled-components'

const Wrapper = styled.section`


.firstinfo, body {
  display: flex;
  justify-content: center;
  align-items: center;
}

html {
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  min-height: 100%;
  background: #009688;
  font-size: 16px;
  overflow: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.content {
  position: relative;
  animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;
}

.card {
  //width: 500px;
  //padding: 20px;
  min-height: 100px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}
.card:after {
  content: "";
  display: block;
  width: 190px;
  height: 300px;
  background: cadetblue;
  position: absolute;
  animation: rotatemagic 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;
}



.firstinfo {
  flex-direction: row;
  z-index: 2;
  position: relative;
}
.firstinfo img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.firstinfo .profileinfo {
  padding: 0px 10px;
}
.firstinfo .profileinfo h1 {
  font-size: 1.8em;
  margin:0px;
}
.firstinfo .profileinfo h3 {
  font-size: 1.2em;
  color: #009688;
  font-style: italic;
}
.firstinfo .profileinfo p.bio {
  padding: 10px 0px;
  color: #5A5A5A;
  line-height: 1.2;
  font-style: initial;
}

.profiledetails{
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
}

@keyframes animatop {
  0% {
    opacity: 0;
    bottom: -500px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}
@keyframes animainfos {
  0% {
    bottom: 10px;
  }
  100% {
    bottom: -42px;
  }
}
@keyframes rotatemagic {
  0% {
    opacity: 0;
    transform: rotate(0deg);
    top: -24px;
    left: -253px;
  }
  100% {
    transform: rotate(-30deg);
    top: -24px;
    left: -78px;
  }
}

@media (min-width: 992px) {
  .card {
  width: 500px;
  padding: 20px;
  }
  .firstinfo .profileinfo {
  padding: 0px 20px;
  }
}
`
export default Wrapper