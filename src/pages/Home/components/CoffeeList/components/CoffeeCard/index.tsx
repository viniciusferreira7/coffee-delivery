import { Buy, CoffeeCardContainer, TagsCoffess } from './styles'

import traditionalExpressCoffee from '../../../../../../assets/coffees/traditional-express.svg'
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
        <img src={traditionalExpressCoffee} alt="Traditional Espresso Coffee" />
        <TagsCoffess>
          <h4>Tradicional</h4>
          <h4>Leite</h4>
        </TagsCoffess>
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
