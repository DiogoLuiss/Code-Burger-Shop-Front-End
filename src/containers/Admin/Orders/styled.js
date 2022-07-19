import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;

  border-radius: 15px;

  max-width: 1000px;
`
export const ProductImg = styled.img`
  width: 25%;
  border-radius: 10px;
`

export const ReactSelect = styled(Select)`
  width: 220px;

  .css-1s2u09g-control {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0px;
  color: black;
`

export const LinkMenu = styled.a`
  font-size: 20px;
  cursor: pointer;

  ${(props) => (props.IsActiveStatus ? ' font-weight: bold;' : '')}
  ${(props) => (props.IsActiveStatus ? '  border-bottom: 2px solid; ' : '')}
  ${(props) => (props.IsActiveStatus ? '  padding-bottom: 5px; ' : '')}
`
