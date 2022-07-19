import PropTypes from 'prop-types'
import React from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import ConvertMoney from '../../utils/Convertmoney'
import {
  Container,
  ImgProduct,
  ParagraphNameProduct,
  ParagraphPriceProduct,
  Button
} from './styled'

export function CardProduct({ product }) {
  const ValueProduct = ConvertMoney(product.price)
  const AddProduct = (product) => {
    toast.promise(putProductsInCard(product), {
      pending: 'Adicionando no carrinho',
      success: 'Produto adicionado no carrinho',
      error: 'Erro ao adicionar produto no carrinho, tente novamente'
    })
  }
  const { putProductsInCard } = useCart()
  return (
    <Container>
      <ImgProduct src={product.url}></ImgProduct>
      <div>
        <ParagraphNameProduct>{product.name}</ParagraphNameProduct>
        <ParagraphPriceProduct>{ValueProduct}</ParagraphPriceProduct>
        <Button onClick={() => AddProduct(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}
// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui

CardProduct.propTypes = {
  // para utilizar esse metodo no react é necessario falar qual o tipo de props para isso se deve baixar o propsTypes
  // e utilizalo dessa maneira
  product: PropTypes.object
}
