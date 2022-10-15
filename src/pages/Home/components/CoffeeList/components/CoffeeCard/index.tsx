import { Buy, CoffeeCardContainer } from './styles'

import traditionalEspressoCoffee from '../../../../../../assets/traditional-espresso-coffee.svg'
import { Counter } from '../../../../../../components/Counter'
import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

export function CoffeeCard() {
  const [price, setPrice] = useState(9.9)

  function getValue(amount: number) {
    setPrice(amount * 9.9)
  }
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
          R$ <strong>{price.toFixed(2)}</strong>
        </p>
        <div>
          <Counter getValue={getValue} />
          <button title="Comprar">
            <ShoppingCartSimple size={19} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
