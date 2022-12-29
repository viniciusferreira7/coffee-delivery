import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'

import { CheckoutContainer, EmptyCart } from './styles'

const formCheckoutSchema = z.object({
  cep: z.string(),
  rua: z.string(),
  numero: z.string(),
  complemento: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
})

type formCheckoutInput = z.infer<typeof formCheckoutSchema>

export function Checkout() {
  const method = useForm<formCheckoutInput>({
    resolver: zodResolver(formCheckoutSchema),
  })
  const { handleSubmit } = method
  const { coffeesState } = useContext(CoffeeContext)

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  async function handleForm(data: formCheckoutInput) {
    console.log(data)
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
