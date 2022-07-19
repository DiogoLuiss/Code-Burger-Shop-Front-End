import React, { useEffect, useState } from 'react'

import { useCart } from '../../hooks/CartContext'
import ConvertValue from '../../utils/Convertmoney'
import {
  Container,
  Headers,
  ContainerCart,
  Body,
  ImgOders,
  Button,
  EmptyCart
} from './styled'

export function CartComponent() {
  const { CartProducts, IncreaseProduct, decreaseProduct } = useCart()

  return (
    <ContainerCart>
      <Headers>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Headers>
      {CartProducts && CartProducts.length > 0 ? (
        CartProducts.map((Card) => (
          <Body key={Card.id}>
            <ImgOders src={Card.url}></ImgOders>
            <p>{Card.name} </p>
            <p style={{ color: 'green' }}>{ConvertValue(Card.price)} </p>
            <div>
              <Button
                onClick={() => {
                  decreaseProduct(Card.id)
                }}
              >
                -
              </Button>
              <p>{Card.quantity} Uni...</p>
              <Button
                onClick={() => {
                  IncreaseProduct(Card.id)
                }}
              >
                +
              </Button>
            </div>

            <p style={{ color: 'green' }}>
              {ConvertValue(Card.price * Card.quantity)}
            </p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
      <div></div>
    </ContainerCart>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
