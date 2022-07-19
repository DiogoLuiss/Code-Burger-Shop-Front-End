import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { CardProduct } from '../components'

const CartContext = createContext({}) // necessario para usar o context

export const CardProvider = ({ children }) => {
  // necessaria exportar para usar em outros arquivos
  // responsavel

  const updateLocalStorage = async (data) => {
    const clientCartProducts = await localStorage.setItem(
      'codeburger:cartinfo',
      JSON.stringify(data)
    )
    return clientCartProducts
  }

  const [CartProducts, setCartProducts] = useState([])

  const putProductsInCard = async (product) => {
    // Função usada para fazer o carrinho de compras
    const CartIndex = CartProducts.findIndex((prod) => prod.id === product.id)

    console.log(CartIndex)
    let NewCartProduct = []

    if (CartIndex >= 0) {
      NewCartProduct = CartProducts

      NewCartProduct[CartIndex].quantity =
        NewCartProduct[CartIndex].quantity + 1

      setCartProducts(NewCartProduct)
    } else {
      product.quantity = 1
      NewCartProduct = [...CartProducts, product]
      setCartProducts(NewCartProduct)
    }

    updateLocalStorage(NewCartProduct)
  }

  const IncreaseProduct = async (ProductId) => {
    const newCart = CartProducts.map((product) => {
      return product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const deleteProducts = async (productId) => {
    const newCart = CartProducts.filter((product) => product.id !== productId)
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const decreaseProduct = async (ProductId) => {
    const cartIndex = CartProducts.findIndex(
      (product) => product.id === ProductId
    )

    if (CartProducts[cartIndex].quantity > 1) {
      const newCart = CartProducts.map((product) => {
        return product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProducts(ProductId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartProducts = await localStorage.getItem(
        'codeburger:cartinfo'
      )

      if (clientCartProducts) {
        setCartProducts(JSON.parse(clientCartProducts))
      }
    }
    loadUserData()
  }, []) // dessa forma puxamos o dado armazenado para o utilizar em outro lugar

  return (
    <CartContext.Provider
      value={{
        putProductsInCard,
        CartProducts,
        IncreaseProduct,
        decreaseProduct
      }}
    >
      {children}
    </CartContext.Provider>
  ) // necessario para criar os dados esa é aestrutura
}

export const useCart = () => {
  // necessaria exportar para usar em outros arquivos
  // responsavel por dar permissão para utilizar os dados
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CardProvider.propTypes = {
  children: PropTypes.node
}
