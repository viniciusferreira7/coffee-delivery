import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <header>
        <h1>Nossos cafés</h1>
      </header>
      <main>
        <CoffeeCard />
      </main>
    </CoffeeListContainer>
  )
}
