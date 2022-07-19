import styled from 'styled-components'

export const DivMaster = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerDivs = styled.div`
  width: 70%;
  height: 80%;
  max-width: 1120px;
  max-height: 600px;
  min-width: 280px;

  box-shadow: 0px 0px 6px 7px red;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
`

export const DivImg = styled.img`
  width: 55%;
  height: 100%;
  border-radius: 3px;
`
export const DivLogin = styled.div`
  width: 45%;
  height: 100%;
  background-color: black;
  border-radius: 3px;
  display: flex;
  align-items: center;

  flex-direction: column;
  padding: 0px 1px;
`
export const LogoImg = styled.img`
  width: 55%;
  height: 16%;
  margin-top: 30px;
  margin-bottom: 10px;
`
export const H1 = styled.h1`
  color: white;
  font-size: 25px;
  margin-bottom: 5px;
`
export const Form = styled.form`
  width: 53%;

  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Inputs = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;

  outline: none;
  border: none;
  margin-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  ${(props) =>
    props.error ? ' border: solid red; margin: buttom:0px' : ' border: none'};
`
export const Pr = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: red;
  align-self: flex-start;
  margin-left: 20px;
`

export const Labels = styled.label`
  color: white;
  font-size: 15px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 500;
`

export const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: white;
  margin-top: 0px;
`
export const A = styled.a`
  text-decoration: underline;
  font-size: 15px;
  margin-left: 5px;
  transition: 1s;
  &:hover {
    font-size: 16px;
    color: red;
    cursor: pointer;
  }
`
