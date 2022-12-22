import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import OrderForm from './components/OrderForm'
import { SelectedCoffeesCard } from './components/SelectedCoffeesCard'
import { CheckoutContainer, EmptyCart } from './styles'

export function Checkout() {
  const { coffeesState } = useContext(CoffeeContext)

  const thereIsItemInCart = coffeesState.coffees.length >= 1

  return (
    <CheckoutContainer>
      {thereIsItemInCart ? (
        <>
          <OrderForm />
          <SelectedCoffeesCard />
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
