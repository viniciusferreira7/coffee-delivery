import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeesState } = useContext(CoffeeContext)

  const quantityOfItem = coffeesState.coffees.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="logo coffee delivery" />
      </NavLink>
      <nav>
        {coffeesState.customer.city !== '' ? (
          <NavLink to="/checkout" title="Checkout">
            <MapPin size={22} weight="fill" />{' '}
            <span>
              {coffeesState.customer.city}, {coffeesState.customer.uf}
            </span>
          </NavLink>
        ) : null}

        {quantityOfItem >= 1 ? (
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
            <p>{quantityOfItem}</p>
          </NavLink>
        ) : null}
      </nav>
    </HeaderContainer>
  )
}
