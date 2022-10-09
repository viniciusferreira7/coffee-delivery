import { CoffeeList } from './components/CoffeeList'
import { IntroSection } from './components/IntroSection'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroSection />
      <CoffeeList />
    </HomeContainer>
  )
}
