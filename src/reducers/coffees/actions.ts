import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addNewCoffee(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: newCoffee,
  }
}

export function removeCoffee(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: coffee,
  }
}
