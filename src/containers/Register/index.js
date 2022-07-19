import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import CodeBurgerImg1 from '../../assets/CodeBurgerImg2.png'
import ImgLogo from '../../assets/ImgLogo.png'
import { Button } from '../../components'
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
} from './Styled'

export function Register() {
  const History = useHistory()

  function Nav() {
    History.push('login')
  }

  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'passwords must be the same')
        .required() // com o one of vc pode comparar as informações dos inputs
    })
    .required() // encontrado na documentação, o yup tbm pode ser usado aqui no front end

  // o data é as informações do formulario, no formato feito elas vem de maneira automatica

  const onSubmit = async (clientData) => {
    try {
      // utilizando o try vc consegue pegar os status colocado no back end e colocar uma mensagem para cada um em especifico pegando o {status}
      const { status } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true } // so é possivel pegar o status utilizando essa opção
      )
      if (status === 409) {
        toast.error('Esse email ja está registrado', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else if (status === 200 || status === 201) {
        toast.success('Cadastrado com sucesso', {
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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema) // encontrado na documentação, serve para fazer funcionar o tipo validade pelo yup
  })

  console.log(errors.name)

  return (
    <DivMaster>
      <ContainerDivs>
        <DivImg src={CodeBurgerImg1} alt="BurgerImg" />
        <DivLogin>
          <LogoImg src={ImgLogo} />
          <H1>Cadastro</H1>

          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            {/* Necessario para o funcionamento do submit e o noValidate serve para pegar as validações apenas do yup */}
            <Labels>Nome:</Labels>
            <Inputs
              {...register('name', { required: true })}
              type="text"
              error={errors.name?.message}
              // dessa forma vc pega os erros de maneira automatica, de acordo com a mensagem que vc colocou no schema
            />
            <Pr>{errors.name?.message}</Pr>

            <Labels>Email:</Labels>
            <Inputs
              {...register('email', { required: true })}
              type="email"
              error={errors.email?.message} // dessa forma vc pega os erros de maneira automatica, de acordo com a mensagem que vc colocou no schema
            />
            <Pr>{errors.email?.message}</Pr>

            <Labels>Senha:</Labels>
            <Inputs
              {...register('password', { required: true })}
              type="password"
              error={errors.password?.message} // dessa forma vc pega os erros de maneira automatica, de acordo com a mensagem que vc colocou no schema
            />
            <Pr>{errors.password?.message}</Pr>

            <Labels>Confirme a Senha:</Labels>
            <Inputs
              {...register('confirmPassword', { required: true, minLength: 8 })} // As informações do imput devem ser configuradas dessa forma
              type={'password'}
              error={errors.confirmPassword?.message}
            />
            <Pr style={{ marginBottom: 20 }}>
              {errors.confirmPassword?.message}
            </Pr>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <P>
            Ja possui conta?{' '}
            <A onClick={Nav} to={'/login'}>
              Login
            </A>
          </P>
        </DivLogin>
      </ContainerDivs>
    </DivMaster>
  )
}
