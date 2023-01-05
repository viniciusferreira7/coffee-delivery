import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'

import { CheckoutContainer, EmptyCart } from './styles'
import { useNavigate } from 'react-router-dom'

const formCheckoutSchema = z.object({
  cep: z
    .string({
      required_error: 'Este campo é obrigatório',
    })
    .min(1, { message: 'Este campo é obrigatório' })
    .max(9, { message: 'Este campo deve conter 8 caracteres' })
    .regex(/[0-9]{5}[-][0-9]{3}/, { message: 'CEP inválido' }),
  street: z.string().min(1, { message: 'Este campo é obrigatório' }),
  number: z
    .string()
    .min(1, { message: 'Este campo é obrigatório' })
    .regex(/\d+$/gm, { message: 'Deve conter apenas números' }),
  complement: z.string(),
  district: z.string().min(1, { message: 'Este campo é obrigatório' }),
  city: z.string().min(1, { message: 'Este campo é obrigatório' }),
  uf: z
    .string({ invalid_type_error: 'Deve conter apenas letras' })
    .min(1, { message: 'Este campo é obrigatório' })
    .max(2, { message: 'Deve ter apenas 2 letras maiúsculas ' })
    .regex(
      /RO|AC|AM|RR|PA|AP|TO|MA|PI|CE|RN|PB|PE|AL|SE|BA|MG|ES|RJ|SP|PR|SC|RS|MS|MT|GO|DF/g,
      { message: 'UF inválido' },
    ),
  payment: z
    .string({
      required_error: 'Este campo é obrigatório',
    })
    .regex(/crédito|débito|dinheiro/i, {
      message: 'Escolha um tipo de pagamento',
    }),
})

type FormCheckoutInput = z.infer<typeof formCheckoutSchema>

export function Checkout() {
  const { coffeesState, addCustomerValues } = useContext(CoffeeContext)

  const navigate = useNavigate()

  const method = useForm<FormCheckoutInput>({
    resolver: zodResolver(formCheckoutSchema),
    defaultValues: {
      ...coffeesState.customer,
    },
  })
  const { handleSubmit } = method

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  function handleCheckoutForm(data: FormCheckoutInput) {
    addCustomerValues(coffeesState.coffees[0], data)

    navigate('/Success')
  }

  return (
    <FormProvider {...method}>
      <CheckoutContainer onSubmit={handleSubmit(handleCheckoutForm)}>
        {thereIsItemInCart ? (
          <>
            <OrderForm />
            <CartInfo />
          </>
        ) : (
          <EmptyCart>
            <span>Seu carrinho está vazio...</span>
            <ShoppingCart weight="fill" />
          </EmptyCart>
        )}
      </CheckoutContainer>
    </FormProvider>
  )
}
