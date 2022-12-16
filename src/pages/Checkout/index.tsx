import OrderForm from './components/OrderForm'
import { SelectedCoffeesCard } from './components/SelectedCoffeesCard'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm />
      <SelectedCoffeesCard />
    </CheckoutContainer>
  )
}
