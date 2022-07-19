import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({}) // necessario para usar o context

export const UserProvider = ({ children }) => {
  // necessaria exportar para usar em outros arquivos
  // responsavel

  const [userData, setUserData] = useState({})

  // essa função serve para não perde os dados do usuarios após ele logar na aplicação
  const putUserData = async (UserInfo) => {
    setUserData(UserInfo)

    await localStorage.setItem('codeburger:userdata', JSON.stringify(UserInfo))
  }
  // dessa maneira armazenamos o dados do usuario

  useEffect(() => {
    const loadUserData = async () => {
      const loadUser = await localStorage.getItem('codeburger:userdata')

      if (loadUser) {
        setUserData(JSON.parse(loadUser))
      }
    }
    loadUserData()
  }, []) // dessa forma puxamos o dado armazenado para o utilizar em outro lugar

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  ) // necessario para criar os dados esa é aestrutura
}

export const useUser = () => {
  // necessaria exportar para usar em outros arquivos
  // responsavel por dar permissão para utilizar os dados
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('userUser must be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
