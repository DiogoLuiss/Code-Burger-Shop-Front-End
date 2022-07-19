import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components/index'
import paths from '../../constants/path'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { DivMaster, DivContainer } from './Styled'

export function Admin({ match: { path } }) {
  return (
    <DivMaster>
      <SideMenuAdmin path={path}></SideMenuAdmin>
      <DivContainer>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
      </DivContainer>
    </DivMaster>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
