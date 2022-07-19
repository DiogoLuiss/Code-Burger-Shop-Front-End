import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #373737;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 2px 0px #333;

  div {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ImgProduct = styled.img`
  width: 50%;
`

export const ParagraphNameProduct = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 19px;
  color: white;
  margin-top: 10px;
`

export const ParagraphPriceProduct = styled.p`
  color: green;
  margin-top: 30px;
  font-weight: 800;
  font-size: 20px;
  line-height: 21px;
`

export const Button = styled.button`
  height: 40px;
  width: 80%;
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  transition: 1s;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 70%;
  }
  &:active {
    transition: none;
    opacity: 0.6;
  }
`
