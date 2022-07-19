import { yupResolver } from '@hookform/resolvers/yup'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, P, Button, LabelUpload } from './Styled'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('category')
      setCategories(data)
    }

    loadCategories()
  }, [])

  const schema = yup
    .object({
      name: yup.string().required('Esse campo é obrigatório'),

      price: yup.string('Apenas numeros').required('Esse campo é obrigatório'),

      category: yup.object().required('Escolha uma categoria'),
      file: yup.mixed().test('required', 'carregue a imagem', (value) => {
        return value && value.length > 0
      })
    })
    .required()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const CarDataFormData = new FormData()

    CarDataFormData.append('name', clientData.name)
    CarDataFormData.append('price', clientData.price)
    CarDataFormData.append('category_id', clientData.category.id)
    CarDataFormData.append('file', clientData.file[0])

    const { status } = await api.post('/products', CarDataFormData)
    console.log(status)
    if (status === 400) {
      toast.error('As Informações inseridas estão invalidas', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.success('Carro cadastrado com sucesso', {
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
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
        <Input
          type="text"
          {...register('name', { required: true })}
          error={errors.name?.message}
        ></Input>
        <P>{errors.name?.message}</P>

        <Label>Preço</Label>
        <Input type="number" {...register('price', { required: true })}></Input>

        <P>{errors.price?.message}</P>

        <LabelUpload>
          {fileName || (
            <>
              <CloudDownloadIcon /> Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <P>{errors.file?.message}</P>

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        />
        <P>{errors.category?.message}</P>
        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container>
  )
}

export default NewProduct
