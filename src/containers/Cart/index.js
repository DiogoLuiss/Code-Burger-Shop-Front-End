import React from 'react'

import burgerlogo from '../../assets/CodeBurgerImg3.png'
import {
  CartComponent,
  CartComponentResume,
  HeaderPage
} from '../../components/index'
import { DivMaster, BurgerLogo, DivContainer, ContainerCart } from './Styled'

export function Cart() {
  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>
        <BurgerLogo src={burgerlogo}></BurgerLogo>
        <ContainerCart>
          <CartComponent></CartComponent>
          <CartComponentResume></CartComponentResume>
        </ContainerCart>
      </DivContainer>
    </DivMaster>
  )
}
