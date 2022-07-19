import styled from 'styled-components'

export const ContainerResumeCart = styled.div`
  background-color: black;
  margin-right: 150px;
  width: 40%;
  max-width: 315px;
  height: 368px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
`
export const DivResume = styled.div`
  box-shadow: 0px 0px 6px 7px #b9c224;
  background-color: white;
  padding: 11px 11px 5px 11px;
  border-radius: 15px;
  height: 285px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  .TitleContainer {
    color: purple;
    font-size: 20px;
    text-align: center;
    grid-area: 1 / 1 / 2 / 3;
    margin-top: 10px;
  }

  p {
    line-height: 19px;
  }

  .ParagraphItens {
    margin-top: 10px;
    grid-area: 2 / 1 / 3 / 2;
    margin-left: 24px;
    font-size: 17px;
  }

  .ParagraphItensValue {
    margin-top: 10px;
    color: green;
    font-size: 17px;
    grid-area: 2 / 2 / 3 / 3;
    text-align: right;
    margin-right: 41px;
  }

  .ParagraphRate {
    grid-area: 3 / 1 / 4 / 2;
    margin-left: 24px;
    font-size: 17px;
  }

  .ParagraphRateValue {
    text-align: right;
    margin-right: 41px;
    color: green;
    font-size: 17px;
    grid-area: 3 / 2 / 4 / 3;
  }

  .ParagraphTotal {
    margin-left: 24px;
    grid-area: 5 / 1 / 6 / 2;
    font-weight: 900;
    font-size: 20px;
  }

  .ParagraphTotalValue {
    text-align: right;
    margin-right: 41px;
    grid-area: 5 / 2 / 6 / 3;
    color: green;
    font-weight: 900;
    font-size: 20px;
  }
`

export const DivButton = styled.button`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  background: transparent;
`

export const Button = styled.button`
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 85%;
  background-color: purple;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-bottom: 5px;
  transition: 1s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 75%;
  }
  &:active {
    opacity: 0.6;
    transition: 0s;
  }
`
