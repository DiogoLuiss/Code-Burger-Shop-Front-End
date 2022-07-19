import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styled'
export function Button({ children, ...rest }) {
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

Button.propTypes = {
  // para utilizar esse metodo no react é necessario falar qual o tipo de props para isso se deve baixar o propsTypes
  // e utilizalo dessa maneira
  children: PropTypes.string
}
