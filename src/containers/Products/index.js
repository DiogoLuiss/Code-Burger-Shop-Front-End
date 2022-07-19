import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import burgerlogo from '../../assets/burgerLogo2.png'
import { CardProduct, HeaderPage } from '../../components'
import api from '../../services/api'
import {
  DivMaster,
  BurgerLogo,
  DivContainer,
  Container,
  ContainerProducts,
  ContainerItens,
  Button
} from './Styled'

export function Products({ location: { state } }) {
  // puxei os props da page category
  let categoryId = 0
  if (state?.categoryId) {
    // utilizei o elves Operator, verifica se a informação existe, se existe ele continua, mas se nao existir ele simplesmente ignora
    categoryId = state.categoryId
  }

  const [categories, setcategories] = useState([])

  const [menuSelect, setmenuSelect] = useState(categoryId) // troquei para usar de atalho para categorias

  const [products, setproducts] = useState([])

  const [filterProducts, setfilterProducts] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('category')
      const NewCategory = [{ id: 0, name: 'Todos' }, ...data]

      setcategories(NewCategory)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      setproducts(data)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (menuSelect === 0) {
      return setfilterProducts(products)
    } else {
      const ProductsOfCategory = products.filter(
        (products) => products.category_id === menuSelect
      )

      return setfilterProducts(ProductsOfCategory)
    }
  }, [menuSelect, products])

  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>
        <BurgerLogo src={burgerlogo}></BurgerLogo>
        <Container>
          {categories &&
            categories.map((category) => (
              <ContainerItens key={category.id}>
                <Button
                  activeCategory={category.id === menuSelect}
                  onClick={() => {
                    setmenuSelect(category.id)
                  }}
                >
                  {category.name}
                </Button>
              </ContainerItens>
            ))}
        </Container>
        <ContainerProducts>
          {filterProducts.map((products) => (
            <CardProduct key={products.id} product={products} />
          ))}
        </ContainerProducts>
      </DivContainer>
    </DivMaster>
  )
}

Products.propTypes = {
  // para utilizar esse metodo no react é necessario falar qual o tipo de props para isso se deve baixar o propsTypes
  // e utilizalo dessa maneira
  location: PropTypes.object
}
