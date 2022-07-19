import { yupResolver } from '@hookform/resolvers/yup'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  P,
  Button,
  LabelUpload,
  ContainerInput
} from './Styled'

function EditProduct() {
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  console.log(product)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('category')
      setCategories(data)
    }

    loadCategories()
  }, [])

  const schema = yup.object({
    name: yup.string().required('Esse campo é obrigatório'),

    price: yup.string('Apenas numeros').required('Esse campo é obrigatório'),

    category: yup.object().required('Escolha uma categoria'),
    offer: yup.boolean()
  })

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
    CarDataFormData.append('offer', clientData.offer)

    await toast.promise(api.put(`/products/${product.id}`, CarDataFormData), {
      pending: 'Atualizando produto',
      success: 'Produto atualizado com sucesso',
      error: 'falha ao criar produto'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }
  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
        <Input
          defaultValue={product.name}
          type="text"
          {...register('name', { required: true })}
          error={errors.name?.message}
        ></Input>
        <P>{errors.name?.message}</P>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register('price')}
          defaultValue={product.price}
        ></Input>

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
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                defaultValue={product.category}
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
        <ContainerInput>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          ></input>
          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container>
  )
}

export default EditProduct
