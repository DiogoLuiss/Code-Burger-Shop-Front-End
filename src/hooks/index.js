import PropTypes from 'proptypes'
import React from 'react'

import { CardProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      {' '}
      <CardProvider> {children} </CardProvider>{' '}
    </UserProvider>
  )
}

export default AppProvider
AppProvider.propTypes = {
  // para utilizar esse metodo no react é necessario falar qual o tipo de props para isso se deve baixar o propsTypes
  // e utilizalo dessa maneira
  children: PropTypes.node
}
