import styled from 'styled-components'

const Wrapper = styled.section`

.btndisplay{
  width:fit-content;
}

.dropdown-container {
  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 5px;
}

.dropdown-input {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
}

.dropdown-menu {
  position: absolute;
  transform: translateY(4px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  background-color: #fff;
  z-index: 99;
}

.dropdown-item {
  padding: 5px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #9fc3f870;
}

.dropdown-item.selected {
  background-color: #0d6efd;
  color: #fff;
}

.dropdown-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.dropdown-tag-item {
  background-color: #ddd;
  padding: 2px 4px;
  border-radius: 2px;
  display: flex;
  align-items: center;
}

.dropdown-tag-close {
  display: flex;
  align-items: center;
}

.search-box {
  padding: 5px;
  background-color: #eee;
}

.search-box input {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

 `
export default Wrapper
