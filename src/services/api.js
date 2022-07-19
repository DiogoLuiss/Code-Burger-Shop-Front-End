import axios from 'axios'

const apiCodeBurger = axios.create({ baseURL: 'http://localhost:3001' })

// Esse arqquivo é necessario para a conecção com as requisisões do banco de dados

apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburger:userdata')
  const token = userData && JSON.parse(userData).token // com o && podemos fazer um if
  config.headers.authorization = `bearer ${token}`
  return config
})
// para se usar uma requisão que precisa do token  ele deve estar em authorization, dessa forma podemos conferir se a pessoa que fez o login tem token
// o interceptors faz para a parte especifica do codigo para fazer determinada ação

export default apiCodeBurger
