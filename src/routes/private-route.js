import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, isAdm, ...rest }) {
  const user = localStorage.getItem('codeburger:userdata') // conferir se o usuario fez login na aplicação e puxar o valor de lá
  if (!user) {
    return <Redirect to="/login" /> // caso não tenha nada mandar para tela de login
  }

  if (isAdm && !JSON.parse(user).adm) {
    return <Redirect to="/" />
  }
  return <Route {...rest} component={component} /> // casoo tenha que puxar os props com as informaç~~oes da tela home
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdm: PropTypes.bool // necessario falar o tipo de informação do component, alguns props precisam disso!!
}
