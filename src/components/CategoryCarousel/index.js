import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import { ThemeCatwgories, Container, ContainerItens, Button } from './styled'

export function CategoryCarousel() {
  const [categories, setcategories] = useState()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('category')
      setcategories(data)
    }
    loadCategories()
  }, [])
  // consigo assim pegar as informações das categorias

  return (
    <Container>
      <ThemeCatwgories>CATEGORIAS</ThemeCatwgories>
      <Carousel itemsToShow={3} style={{ width: '90%' }}>
        {categories &&
          categories.map((category) => (
            <ContainerItens key={category.id}>
              <img src={category.url}></img>
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }} // assim da pra navegar entre as paginas e mandar uma variavel tbm
              >
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
      {/* //dessa maneira que se deve usar o carousel, map funciona muito bem */}
    </Container>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
