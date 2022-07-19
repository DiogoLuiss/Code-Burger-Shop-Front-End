import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import CodeBurgerImg1 from '../../assets/CodeBurgerImg1.jpg'
import ImgLogo from '../../assets/ImgLogo.png'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  DivMaster,
  ContainerDivs,
  DivImg,
  DivLogin,
  LogoImg,
  H1,
  Form,
  Inputs,
  Pr,
  Labels,
  P,
  A
} from './styled'

export function Login() {
  const { userData, putUserData } = useUser()

  // const navigate = useNavigate()

  // function GoBackPage() {
  //   navigate('register')
  // }
  const History = useHistory()

  function NavHome(data) {
    if (data.adm === true) {
      History.push('/pedidos')
    } else {
      History.push('/')
    }
  }
  function Nav() {
    History.push('/cadastro')
  }

  const schema = yup
    .object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    })
    .required() // encontrado na documentação, o yup tbm pode ser usado aqui no front end

  // o data é as informações do formulario, no formato feito elas vem de maneira automatica
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema) // encontrado na documentação, serve para fazer funcionar o tipo validade pelo yup
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      // dessa maneira eu consigo utilizar o tost

      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),

      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo (a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)
    NavHome(data)
    setTimeout(() => {
      NavHome()
    }, 1000)
  } // setTimeout executa o que esta dentro dele depois do tempo determinado

  return (
    <DivMaster>
      <ContainerDivs>
        <DivImg src={CodeBurgerImg1} alt="BurgerImg" />
        <DivLogin>
          <LogoImg src={ImgLogo} />
          <H1>Login</H1>

          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            {/* Necessario para o funcionamento do submit e o noValidate serve para pegar as validações apenas do yup */}
            <Labels>Login:</Labels>
            <Inputs
              {...register('email', { required: true })}
              type="email"
              error={errors.email?.message} // dessa forma vc pega os erros de maneira automatica, de acordo com a mensagem que vc colocou no schema
            />
            <Pr>{errors.email?.message}</Pr>
            <Labels>Senha:</Labels>
            <Inputs
              {...register('password', { required: true, minLength: 8 })} // As informações do imput devem ser configuradas dessa forma
              type={'password'}
              error={errors.password?.message}
            />
            <Pr>{errors.password?.message}</Pr>

            <Button type="submit">Entrar</Button>
          </Form>

          <P>
            Não possui conta?
            <A onClick={Nav} to="/register">
              Cadastre-se
            </A>
            {/* Esse link serve para poder navegar entre as rotas */}
          </P>
        </DivLogin>
      </ContainerDivs>
    </DivMaster>
  )
}
