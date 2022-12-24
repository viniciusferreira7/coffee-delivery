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
  quantity: number
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
    coffees: [],
  })

  function addNewCoffee(newCoffee: CoffeeType) {
    dispatch(addNewCoffeeAction(newCoffee))
  }

  function removeCoffee(name: string) {
    const coffee = coffeesState.coffees.filter((coffee) => coffee.name === name)

    console.log(coffee)

    // dispatch(removeCoffeeAction(coffee))
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
