import styled from 'styled-components'

const Wrapper = styled.section`
.parent{
  margin-top: 30px;
}

.countdown .card {
  background: change-color($black, $lightness: 20%);
  display: inline-block;
  margin: 10px;
  min-width: 150px;
  padding: 20px 0;
  border: 2px solid #02899C;
  .countdown-value {
    color: $mint;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .countdown-unit {
    text-transform: capitalize;
  }
}

.header{
  margin-bottom: 20px;
  color: #02899C;
  font-weight: bold;
}

`
export default Wrapper
