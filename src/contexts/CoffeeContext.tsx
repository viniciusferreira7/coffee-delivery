import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { coffeesReducer } from '../reducers/coffees/reducer'
import { AllCoffeeData } from '../utils/AllCoffeeData'

import TraditionalExpress from '../assets/coffees/traditional-express.svg'
import AmericanExpress from '../assets/coffees/american-express.svg'

interface CoffeeType {
  image: string
  tag1: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  number: number
  quantity: number
  added: boolean
}

interface CoffeeContextType {
  AllCoffeeData: CoffeeType[]
  coffeesState: { coffees: CoffeeType[] }
  addNewCoffee: (newCoffee: CoffeeType) => void
  removeCoffee: (name: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: [
      {
        image: TraditionalExpress,
        tag1: 'Tradicional',
        name: 'Expresso tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        number: 9.9,
        quantity: 1,
        added: true,
      },
      {
        image: AmericanExpress,
        tag1: 'Tradicional',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        number: 9.8,
        quantity: 1,
        added: true,
      },
    ],
  })

  function addNewCoffee(newCoffee: CoffeeType) {
    dispatch(addNewCoffeeAction(newCoffee))
  }

  function removeCoffee(name: string) {
    const coffee = coffeesState.coffees.find((coffee) => coffee.name === name)

    if (coffee) {
      dispatch(removeCoffeeAction(coffee))
    }
  }

  return (
    <CoffeeContext.Provider
      value={{
        AllCoffeeData,
        coffeesState,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
