import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 40px;
  width: 70%;
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  transition: 1s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 65%;
  }
  &:active {
    opacity: 0.6;
  }
`
