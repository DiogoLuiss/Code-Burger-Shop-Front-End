import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  width: 99.978%;
  height: 72px;
  display: flex;
  justify-content: space-between;
`

export const DivNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const ButtonProducts = styled.button`
  border: none;
  background: none;
  font-weight: 900;
  font-size: 20px;
  ${(props) => (props.isActive ? 'color: red' : 'color:white')};
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
`

export const ButtonHome = styled.button`
  margin-left: 20%;
  margin-right: 15%;
  border: none;
  background: none;
  font-weight: 900;
  font-size: 20px;
  color: ${(props) => (props.isActive ? ' red' : 'white')};
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
`

export const ButtonCart = styled.a`
  margin-left: 30%;

  color: ${(ButtonCart) => (ButtonCart.isActive ? ' red' : 'white')};
  cursor: pointer;

  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
`

export const DivProfile = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  margin-right: 5%;
`
export const DivProfileIcon = styled.div`
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  p {
    color: purple;
    text-align: end;
  }
`

export const DivProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  p {
    color: white;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  button {
    font-weight: 900;
    font-size: 15px;
    line-height: 16px;
    background: none;
    border: none;
    width: 0%;
    margin-left: 15px;
    color: purple;
    font-weight: 900;
    cursor: pointer;

    &:hover {
      color: red;
    }
    &:active {
      opacity: 0.8;
    }
  }
`
