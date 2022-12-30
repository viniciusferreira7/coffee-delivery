import { useContext, useEffect } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'

import { CheckoutContainer, EmptyCart } from './styles'

const formCheckoutSchema = z
  .object({
    cep: z
      .string()
      .length(9, { message: 'Este campo deve conter 8 caracteres' }),
    rua: z.string().min(1, { message: 'Este campo é obrigatório' }),
    numero: z.string().min(1, { message: 'Este campo é obrigatório' }),
    complemento: z.string(),
    bairro: z.string().min(1, { message: 'Este campo é obrigatório' }),
    cidade: z.string().min(1, { message: 'Este campo é obrigatório' }),
    uf: z
      .string({ invalid_type_error: 'Deve conter apenas letras' })
      .length(2, { message: 'Deve ter 2 caracteres' }),
  })
  .required()

type FormCheckoutInput = z.infer<typeof formCheckoutSchema>

export function Checkout() {
  const { coffeesState } = useContext(CoffeeContext)

  const method = useForm<FormCheckoutInput>({
    resolver: zodResolver(formCheckoutSchema),
  })
  const { handleSubmit, formState } = method

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  // Pensar em outro nome para  função
  function handleForm(data: FormCheckoutInput) {}

  useEffect(() => {
    console.log(formState.errors)
  }, [formState])

  return (
    <FormProvider {...method}>
      <CheckoutContainer onSubmit={handleSubmit(handleForm)}>
        {thereIsItemInCart ? (
          <>
            <OrderForm />
            <CartInfo />
          </>
        ) : (
          <EmptyCart>
            <span>Carrinho vazio...</span>
            <ShoppingCart weight="fill" />
          </EmptyCart>
        )}
      </CheckoutContainer>
    </FormProvider>
  )
}
