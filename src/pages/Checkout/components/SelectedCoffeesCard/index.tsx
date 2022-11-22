import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import {
  Button,
  CardContainer,
  CoffeeSelected,
  SelectedCoffeesCardContainer,
} from './styles'

export default function SelectedCoffeesCard() {
  return (
    <SelectedCoffeesCardContainer>
      <h2>Cafés selecionados</h2>
      <CardContainer>
        <CoffeeSelected>
          <img src="" alt="" srcSet="" />
          <div>
            <h4>Expresso Tradicional</h4>
            <Counter getValue={0} />
            <Button>
              <Trash size={16} weight="regular" />
              <span>Remover</span>
            </Button>
          </div>
        </CoffeeSelected>
      </CardContainer>
    </SelectedCoffeesCardContainer>
  )
}
