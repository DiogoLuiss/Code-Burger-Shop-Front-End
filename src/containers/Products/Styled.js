import styled from 'styled-components'

export const DivMaster = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
`
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 6px 7px red;
  max-width: 1350px;
  background-color: #373737;
`
export const BurgerLogo = styled.img`
  width: 100%;
  height: 500px;
  max-width: 1350px;
`

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 70px;
  transition: 1s;
`
export const ContainerProducts = styled.div`
  transition: 1s;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  background-color: black;
  width: 100%;
  padding: 20px;
`

export const ContainerItens = styled.div``

export const Button = styled.button`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  transition: 1s;
  margin-top: 20px;
  padding-bottom: 5px;
  border: none;
  ${(Button) =>
    Button.activeCategory ? 'border-bottom:3px solid purple;' : ''};
  background-color: #373737;
  ${(Button) =>
    Button.activeCategory
      ? ' Color:  purple; font-weight: 900; font-size: 20px; '
      : ' color:white;'}

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transition: none;
    opacity: 0.6;
  }
`
