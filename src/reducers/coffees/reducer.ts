import { ActionTypes } from './actions'

export interface Coffee {
  image: string
  tag1: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  number: number
}

interface CoffeesState {
  coffees: Coffee[]
}

interface Action {
  type: ActionTypes
  payload: {
    newCoffee: Coffee
    coffee: Coffee
  }
}

export function coffeesReducer(state: CoffeesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return [...state.coffees, action.payload.newCoffee]

    default:
      return state.coffees
  }
}
