import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { CartInfo } from './components/CartInfo'
import { CheckoutContainer, EmptyCart } from './styles'

export function Checkout() {
  const { coffeesState } = useContext(CoffeeContext)

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  return (
    <CheckoutContainer>
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
  )
}
