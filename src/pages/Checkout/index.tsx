import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'

import { CheckoutContainer, EmptyCart } from './styles'

const formCheckoutSchema = z.object({
  cep: z.string({ required_error: 'Cep é obrigatório' }),
  rua: z.string({ required_error: 'Rua é obrigatório' }),
  numero: z.string({ required_error: 'Numero é obrigatório' }),
  complemento: z.string(),
  bairro: z.string({ required_error: 'Bairro é obrigatório' }),
  cidade: z.string({ required_error: 'Cidade é obrigatório' }),
  uf: z
    .string({ required_error: 'Cep é obrigatório' })
    .length(2, { message: 'Deve ter somente 2 caracteres' }),
})

type formCheckoutInput = z.infer<typeof formCheckoutSchema>

export function Checkout() {
  const { coffeesState } = useContext(CoffeeContext)

  const method = useForm<formCheckoutInput>({
    resolver: zodResolver(formCheckoutSchema),
  })
  const { handleSubmit, formState } = method

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  // Pensar em outro nome para  função
  function handleForm(
    data: formCheckoutInput,
  ): SubmitHandler<formCheckoutInput> {
    console.log(formState.errors)
    console.log(data)
    return null
  }

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
