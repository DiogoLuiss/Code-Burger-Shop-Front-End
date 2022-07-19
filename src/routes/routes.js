import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import paths from '../constants/path'
import {
  Home,
  Login,
  Products,
  Register,
  Cart,
  NotFound,
  Admin
} from '../containers'
import PrivateRoute from './private-route'

function Routess() {
  return (
    <Router>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Register} path="/cadastro" />
        <PrivateRoute exact component={Products} path="/produtos" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute exact component={Cart} path="/carrinho" />

        <PrivateRoute exact component={Admin} isAdm={true} path={paths.Order} />
        <PrivateRoute
          exact
          component={Admin}
          isAdm={true}
          path={paths.Products}
        />
        <PrivateRoute
          exact
          component={Admin}
          isAdm={true}
          path={paths.NewProduct}
        />

        <PrivateRoute
          exact
          component={Admin}
          isAdm={true}
          path={paths.EditProduct}
        />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

export default Routess
