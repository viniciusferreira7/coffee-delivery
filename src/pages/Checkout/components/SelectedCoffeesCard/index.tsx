import { useContext } from 'react'
import {
  CardContainer,
  ConfirmOrderButton,
  SelectedCoffeesCardContainer,
  TotalItems,
} from './styles'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CoffeeSelected } from './components/CoffeeSelected'

export function SelectedCoffeesCard() {
  const { coffeesState } = useContext(CoffeeContext)

  function convertNumberToReal(number: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(number)
  }

  const thereIsCoffeeOnTheList = coffeesState.coffees.length >= 1

  const valueOfAllCoffees = coffeesState.coffees.reduce((acc, coffee) => {
    return acc + coffee.number
  }, 0)

  return (
    <SelectedCoffeesCardContainer>
      <h2>Cafés selecionados</h2>
      <CardContainer>
        {coffeesState.coffees.map((coffee) => (
          <CoffeeSelected key={coffee.name} {...coffee} />
        ))}
        <TotalItems>
          <div>
            <p>Total de Itens</p>
            {thereIsCoffeeOnTheList ? (
              <p>{convertNumberToReal(valueOfAllCoffees)}</p>
            ) : null}
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </div>
          <div>
            <p>Total</p>
            {thereIsCoffeeOnTheList ? (
              <p>{convertNumberToReal(valueOfAllCoffees) + 3.5}</p>
            ) : null}
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
