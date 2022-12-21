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
    coffee: Coffee
  }
}

export function coffeesReducer(state: CoffeesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const repeated = state.coffees.find(
        (coffee) => coffee.number === action.payload.coffee.number,
      )
      if (!repeated) {
        return { ...state, coffees: [...state.coffees, action.payload.coffee] }
      } else {
        return { ...state, coffees: [...state.coffees] }
      }
    }
    case ActionTypes.REMOVE_COFFEE:
      return {
        ...state,
        coffees: state.coffees.filter(
          (coffee) => action.payload.coffee !== coffee,
        ),
      }

    default:
      return state
  }
}
