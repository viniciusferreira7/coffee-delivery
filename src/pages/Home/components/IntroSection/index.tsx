import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import backgroundCoffeeDelivery from '../../../../assets/background-coffee-delivery.svg'
import cupOfCoffee from '../../../../assets/cup-of-coffee.svg'
import { IntroSectionContainer, Items } from './styles'

export function IntroSection() {
  return (
    <IntroSectionContainer background={backgroundCoffeeDelivery}>
      <div>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </header>
        <footer>
          <Items itemsColor="yellow-dark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Items>
          <Items itemsColor="grey">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Items>
          <Items itemsColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Items>
          <Items itemsColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Items>
        </footer>
      </div>
      <img src={cupOfCoffee} alt="cup of coffee" title="Cup of coffee" />
    </IntroSectionContainer>
  )
}
