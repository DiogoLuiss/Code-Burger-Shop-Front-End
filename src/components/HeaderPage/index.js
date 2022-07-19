import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaUser } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import Routess from '../../routes/routes'
import api from '../../services/api'
import {
  Container,
  DivNav,
  ButtonHome,
  ButtonProducts,
  ButtonCart,
  DivProfile,
  DivProfileIcon,
  DivProfileInfo
} from './styled'

export function HeaderPage() {
  const {
    push, // é possivel usar o push de maneira mais resumida
    location: { pathname } // dessa maneira pega a informação da page que estamos
  } = useHistory()

  const { userData } = useUser()

  async function ExitUser() {
    await localStorage.removeItem('codeburger:userdata')
    push('/login')
  }

  return (
    <Container>
      <DivNav>
        <ButtonHome isActive={pathname === '/'} onClick={() => push('/')}>
          {/* //função para deixar marcado a header */}
          Home
        </ButtonHome>
        <ButtonProducts
          onClick={() => push('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver produtos
        </ButtonProducts>
        <ButtonCart isActive={pathname.includes('/carrinho')}>
          <FaCartPlus onClick={() => push('/carrinho')} size={30}></FaCartPlus>
        </ButtonCart>{' '}
      </DivNav>
      <DivProfile>
        <DivProfileIcon>
          <p>
            <FaUser size={30}></FaUser>
          </p>
        </DivProfileIcon>

        <DivProfileInfo>
          <p>Olá, {userData.name}</p>
          <button onClick={() => ExitUser()}>Sair</button>
        </DivProfileInfo>
      </DivProfile>
    </Container>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
