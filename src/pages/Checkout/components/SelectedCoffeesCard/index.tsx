import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import {
  Button,
  CardContainer,
  CoffeeSelected,
  ConfirmOrderButton,
  SelectedCoffeesCardContainer,
  TotalItems,
} from './styles'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function SelectedCoffeesCard() {
  const { coffeesState, removeCoffee } = useContext(CoffeeContext)
  const [price, setPrice] = useState(0)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * 9.8)
  }

  const PriceIsTrue = price && 'R$ ' + price.toFixed(2)

  function handleRemoveCoffee(name: string) {
    const coffee = coffeesState.coffees.filter((coffee) => coffee.name === name)
    console.log(coffee)
    removeCoffee(name)
  }

  return (
    <SelectedCoffeesCardContainer>
      <h2>Cafés selecionados</h2>
      <CardContainer>
        {coffeesState.coffees.map((coffee) => (
          <CoffeeSelected key={coffee.number}>
            <img src={coffee.image} alt={coffee.name} />
            <h4>{coffee.name}</h4>
            <div>
              <Counter getTheAmountOfCoffees={getTheAmountOfCoffees} />
            </div>
            <Button
              onClick={() => handleRemoveCoffee(coffee.name)}
              type="button"
              aria-label="remover"
            >
              <Trash size={16} weight="regular" />
              <span>Remover</span>
            </Button>
            <p>{PriceIsTrue}</p>
          </CoffeeSelected>
        ))}
        <TotalItems>
          <div>
            <p>Total de Itens</p>
            <p>{PriceIsTrue}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </div>
          <div>
            <p>Total</p>
            <p>{PriceIsTrue && 'R$' + (price + 3.5).toFixed(2)}</p>
          </div>
          <NavLink to="/success" title="Success">
            <ConfirmOrderButton aria-label="confirmar">
              Confirmar pedido
            </ConfirmOrderButton>
          </NavLink>
        </TotalItems>
      </CardContainer>
    </SelectedCoffeesCardContainer>
  )
}
