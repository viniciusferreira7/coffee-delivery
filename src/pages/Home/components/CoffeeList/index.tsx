import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  const { AllCoffeeData } = useContext(CoffeeContext)

  return (
    <CoffeeListContainer>
      <header>
        <h1>Nossos cafés</h1>
      </header>
      <main>
        {AllCoffeeData.map((coffee) => (
          <CoffeeCard key={coffee.name} {...coffee} />
        ))}
      </main>
    </CoffeeListContainer>
  )
}
