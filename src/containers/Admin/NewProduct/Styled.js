import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    background-color: #565656;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .css-b62m3t-container {
      width: 100%;
      min-width: 280px;
      outline: none;
    }
    .css-1s2u09g-control {
      border-radius: 10px;
      height: 40px;
      min-width: 280px;
      outline: none;
    }
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 3px;
  align-self: flex-start;
  margin-left: 15px;
`
export const Input = styled.input`
  height: 40px;
  border: 8px;
  border: none;
  width: 100%;
  border-radius: 10px;
  min-width: 280px;
  outline: none;
  padding-left: 15px;
`
export const P = styled.p`
  color: red;
  margin-top: 5px;
  margin-bottom: 25px;
  align-self: flex-start;
  margin-left: 15px;
`

export const Button = styled.button`
  height: 40px;
  width: 70%;
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;

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
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px dashed white;
  padding: 10px;
  border-radius: 5px;

  input {
    opacity: 0;
    width: 1px;
  }
`
