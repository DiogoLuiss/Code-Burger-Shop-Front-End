import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import ConvertValue from '../../utils/Convertmoney'
import { ContainerResumeCart, DivResume, DivButton, Button } from './styled'

export function CartComponentResume() {
  // const { CartProducts, IncreaseProduct, decreaseProduct } = useCart()

  const { CartProducts } = useCart()

  const [deliveryTax] = useState(5)

  const [finalPrice, setfinalPrice] = useState(0)

  useEffect(() => {
    const AllPrice = CartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setfinalPrice(AllPrice)
  }, [finalPrice, CartProducts])

  const submitOrder = async () => {
    const order = CartProducts.map((Products) => {
      return { id: Products.id, quantity: Products.quantity }
    })

    console.log(order)

    try {
      await api.post('order', { Products: [order] })
      if (order.length === 0) {
        toast.error('Para realizar o Pedido você precisa prencher o carrinho', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else if (order !== '') {
        toast.success('Pedido realizado com sucesso', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else {
        throw new Error() // Com essa tag vc consegue fazer o erro cair no cathc e executalo
      }
    } catch (err) {
      toast.error('Faha no sitema! tente novamente', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  return (
    <ContainerResumeCart>
      <DivResume>
        <h1 className="TitleContainer">Resumo do pedido</h1>
        <p className="ParagraphItens">Itens</p>
        <p className="ParagraphItensValue">{ConvertValue(finalPrice)}</p>
        <p className="ParagraphRate">Taxa de entrega</p>
        <p className="ParagraphRateValue">{ConvertValue(deliveryTax)}</p>
        <p className="ParagraphTotal">Total :</p>
        <p className="ParagraphTotalValue">
          {ConvertValue(finalPrice + deliveryTax)}
        </p>
      </DivResume>
      <DivButton>
        <Button onClick={() => submitOrder()}>Finalizar pedido</Button>
      </DivButton>
    </ContainerResumeCart>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
