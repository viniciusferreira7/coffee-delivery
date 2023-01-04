import { useContext, useEffect } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'

import { CheckoutContainer, EmptyCart } from './styles'

const formCheckoutSchema = z.object({
  cep: z
    .string()
    .min(1, { message: 'Este campo é obrigatório' })
    .max(9, { message: 'Este campo deve conter 8 caracteres' })
    .regex(/[0-9]{5}[-][0-9]{3}/, { message: 'CEP inválido' }),
  rua: z.string().min(1, { message: 'Este campo é obrigatório' }),
  numero: z
    .string()
    .min(1, { message: 'Este campo é obrigatório' })
    .regex(/\d+$/gm, { message: 'Deve conter apenas números' }),
  complemento: z.string(),
  bairro: z.string().min(1, { message: 'Este campo é obrigatório' }),
  cidade: z.string().min(1, { message: 'Este campo é obrigatório' }),
  uf: z
    .string({ invalid_type_error: 'Deve conter apenas letras' })
    .min(1, { message: 'Este campo é obrigatório' })
    .max(2, { message: 'Deve ter apenas 2 caracteres' })
    .regex(
      /RO|AC|AM|RR|PA|AP|TO|MA|PI|CE|RN|PB|PE|AL|SE|BA|MG|ES|RJ|SP|PR|SC|RS|MS|MT|GO|DF/g,
      { message: 'UF inválido' },
    ),
})

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
