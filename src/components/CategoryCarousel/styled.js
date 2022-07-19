import { Link } from 'react-router-dom' // com link eu posso ir para outra pagina e tamebm mandar informações, ligando ambas
import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
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
  text-shadow: 2px 2px 0 purple, 4px 4px 0 purple; ;
`
export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Button = styled(Link)`
  display: flex;
  //dessa maneira que utiliza como link
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
    width: 60%;
  }
  &:active {
    opacity: 0.6;
  }
`
