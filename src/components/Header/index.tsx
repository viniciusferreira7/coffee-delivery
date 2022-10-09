import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="logo coffee delivery" />
      </NavLink>
      <nav>
        <NavLink to="/checkout" title="Checkout">
          <MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
