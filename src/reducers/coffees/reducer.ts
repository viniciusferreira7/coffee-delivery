import { ActionTypes } from './actions'

export interface Coffee {
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
export interface InputValues {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  payment: string
}

interface CoffeesState {
  coffees: Coffee[]
  customer: InputValues
}

interface Action {
  type: ActionTypes
  payload: {
    coffee: Coffee
    customer: InputValues
  }
}

export function coffeesReducer(state: CoffeesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return { ...state, coffees: [...state.coffees, action.payload.coffee] }

    case ActionTypes.REMOVE_COFFEE:
      return {
        ...state,
        coffees: state.coffees.filter(
          (coffee) => coffee !== action.payload.coffee,
        ),
      }

    case ActionTypes.ADD_CUSTOMER_VALUES:
      return {
        ...state,
        customer: { ...action.payload.customer },
      }

    default:
      return state
  }
}
