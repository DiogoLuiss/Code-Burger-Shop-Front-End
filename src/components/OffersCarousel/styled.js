import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  width: 100%;
  padding-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  .rec.rec-arrow {
    background-color: purple;
    color: yellow;
    filter: drop-shadow(
      0px 4px 4px rgba(0, 0, 0, 0.25)
    ); //para o carousel ser modificado ele deve modificar dentro da div principal
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    color: purple;
    background-color: yellow;
  }
  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    color: #efefef;
    border: none;
  }
`

export const ThemeCatwgories = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 60px;
  font-weight: 900;
  color: #bbc424;
  font-style: italic;
  padding: 5px;
  text-shadow: 2px 2px 0 purple, 4px 4px 0 purple;
`
export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ContainerParagrath = styled.div`
  width: 70%;
`

export const P1 = styled.p`
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  color: white;
`
export const P2 = styled.p`
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  color: green;
`

export const Button = styled.button`
  height: 40px;
  width: 70%;
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 20px;
  margin-bottom: 5px;
  border: none;
  transition: 1s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 55%;
  }
  &:active {
    opacity: 0.6;
  }
`
