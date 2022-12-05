import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { coffeesReducer } from '../reducers/coffees/reducer'
import { AllCoffeeData } from '../utils/AllCoffeeData'

interface CoffeeType {
  image: string
  tag1: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  number: number
}

interface CoffeeContextType {
  AllCoffeeData: CoffeeType[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: [],
  })

  // function addNewCoffee() {
  //   dispatch(addNewCoffeeAction)
  // }

  // function removeCoffee() {
  //   dispatch(removeCoffeeAction)
  // }

  return (
    <CoffeeContext.Provider value={{ AllCoffeeData }}>
      {children}
    </CoffeeContext.Provider>
  )
}
