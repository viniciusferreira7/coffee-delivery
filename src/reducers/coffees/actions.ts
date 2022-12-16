import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffee: newCoffee },
  }
}

export function removeCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffee },
  }
}
