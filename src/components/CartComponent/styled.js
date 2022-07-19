import styled from 'styled-components'

export const ContainerCart = styled.div`
  width: 50%;
  margin-left: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 7px #b9c224;
  background-color: white;
  overflow: hidden;
`
export const Headers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  border-bottom: 3px solid purple;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding: 5px;
  p {
    padding: 5px;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    color: purple;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 5px;
  width: 100%;
  padding: 10px;
  grid-gap: 10px;
  div {
    display: flex;
    align-items: flex-start;
  }

  p {
    padding: 10px;
    font-weight: 900;
    font-size: 18px;
    line-height: 19px;
  }
`
export const ImgOders = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const Button = styled.button`
  font-weight: 900;

  font-size: 19px;
  margin-top: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const EmptyCart = styled.p`
  padding: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
`
