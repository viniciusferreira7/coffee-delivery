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

interface CoffeeState {
  coffee: Coffee[]
}

interface Action {
  type: ActionTypes
  payload: Coffee
}

export function coffeeReducer(state: CoffeeState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return state
  }
}
