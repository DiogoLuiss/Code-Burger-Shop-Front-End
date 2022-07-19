import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import ConvertValue from '../../utils/Convertmoney'
import {
  ThemeCatwgories,
  Container,
  ContainerItens,
  ContainerParagrath,
  P1,
  P2,
  Button
} from './styled'

export function CarouselOffers() {
  const { putProductsInCard } = useCart()

  const [offers, setoffers] = useState()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')
      const onlyOffers = data.filter((offers) => offers.offer)

      setoffers(onlyOffers)
    }
    loadOffers()
  }, [])
  // consigo assim pegar as informações das categorias

  const AddProduct = (product) => {
    toast.promise(putProductsInCard(product), {
      pending: 'Adicionando no carrinho',
      success: 'Produto adicionado no carrinho',
      error: 'Erro ao adicionar produto no carrinho, tente novamente'
    })
  }

  return (
    <Container>
      <ThemeCatwgories>OFERTAS</ThemeCatwgories>
      <Carousel itemsToShow={3} style={{ width: '90%' }}>
        {offers &&
          offers.map((offers) => (
            <ContainerItens key={offers.id}>
              <img src={offers.url}></img>
              <ContainerParagrath>
                <P1>{offers.name}</P1>
                <P2>{ConvertValue(offers.price)}</P2>
              </ContainerParagrath>

              <Button onClick={() => AddProduct(offers)}>Peça agora</Button>
            </ContainerItens>
          ))}
      </Carousel>
      {/* //dessa maneira que se deve usar o carousel, map funciona muito bem */}
    </Container>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
