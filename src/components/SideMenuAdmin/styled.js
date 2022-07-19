import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3d3c3e;
  width: 300px;
  top: 0;
  left: 0;
  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  ${(props) => (props.isActive ? '   background-color: #575657; ' : '')}
  border-radius: 10px;
  margin: 8px;
  padding-left: 20px;
  .icon {
    color: white;
  }
`
export const ListLink = styled.a`
  color: white;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;

  &:hover {
    cursor: pointer;
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
`
