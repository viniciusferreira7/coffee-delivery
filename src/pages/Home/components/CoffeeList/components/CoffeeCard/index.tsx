import { Buy, CoffeeCardContainer } from './styles'

import traditionalEspressoCoffee from '../../../../../../assets/traditional-espresso-coffee.svg'
import { Counter } from '../../../../../../components/Counter'
import { ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <header>
        <img
          src={traditionalEspressoCoffee}
          alt="Traditional Espresso Coffee"
        />
        <h4>Tradicional</h4>
      </header>
      <main>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </main>
      <Buy>
        <p>
          R$ <strong>9,90</strong>
        </p>
        <div>
          <Counter />
          <button>
            <ShoppingCartSimple size={19} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
