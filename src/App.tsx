import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <CoffeeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </CoffeeContextProvider>
  )
}
