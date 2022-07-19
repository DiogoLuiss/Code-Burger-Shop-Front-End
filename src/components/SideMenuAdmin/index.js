import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styled'

export function SideMenuAdmin({ path }) {
  const { push } = useHistory()

  async function ExitUser() {
    await localStorage.removeItem('codeburger:userdata')
    push('/login')
  }

  function Nav(Link) {
    push(Link)
  }

  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink onClick={() => Nav(item.link)} to={item.link}>
            {item.label}
          </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListLink to="/login" onClick={ExitUser}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
