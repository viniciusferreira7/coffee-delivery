import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Counter } from '../../../../components/Counter'
import {
  Button,
  CardContainer,
  CoffeeSelected,
  SelectedCoffeesCardContainer,
} from './styles'
import TraditionalExpress from '../../../../assets/coffees/traditional-express.svg'

export default function SelectedCoffeesCard() {
  const [price, setPrice] = useState(0)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * 9.8)
  }

  return (
    <SelectedCoffeesCardContainer>
      <h2>Cafés selecionados</h2>
      <CardContainer>
        <CoffeeSelected>
          <img src={TraditionalExpress} alt="Café" />
          <h4>Expresso Tradicional</h4>
          <div>
            <Counter getTheAmountOfCoffees={getTheAmountOfCoffees} />
          </div>
          <Button>
            <Trash size={16} weight="regular" />
            <span>Remover</span>
          </Button>
          <p>{price && 'R$ ' + price.toFixed(2)}</p>
        </CoffeeSelected>
      </CardContainer>
    </SelectedCoffeesCardContainer>
  )
}
