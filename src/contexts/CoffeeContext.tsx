import { createContext, ReactNode, useReducer } from 'react'
import {
  addCustomerValuesAction,
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
  added: boolean
}

interface InputValues {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  payment: string
}

interface CoffeeContextType {
  AllCoffeeData: CoffeeType[]
  coffeesState: {
    coffees: CoffeeType[]
    customer: InputValues
  }
  addNewCoffee: (newCoffee: CoffeeType) => void
  removeCoffee: (name: string) => void
  addCustomerValues: (coffee: CoffeeType, customer: InputValues) => void
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
    customer: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: '',
    },
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

  function addCustomerValues(coffee: CoffeeType, customer: InputValues) {
    dispatch(addCustomerValuesAction(coffee, customer))
  }

  return (
    <CoffeeContext.Provider
      value={{
        AllCoffeeData,
        coffeesState,
        addNewCoffee,
        removeCoffee,
        addCustomerValues,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
