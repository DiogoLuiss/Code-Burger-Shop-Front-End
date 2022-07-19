import React from 'react'

import burgerlogo from '../../assets/burgerLogo.png'
import {
  CarouselOffers,
  CategoryCarousel,
  HeaderPage
} from '../../components/index'
import { DivMaster, BurgerLogo, DivContainer } from './Styled'

export function Home() {
  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>
        <BurgerLogo src={burgerlogo}></BurgerLogo>
        <CategoryCarousel />
        <CarouselOffers></CarouselOffers>
      </DivContainer>
    </DivMaster>
  )
}
