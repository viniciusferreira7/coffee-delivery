/* eslint-disable no-unused-vars */
import { Coffee, InputValues } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  ADD_CUSTOMER_VALUES = 'ADD_CUSTOMER_VALUES',
}

const customer = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  uf: '',
  payment: '',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffee: newCoffee, customer },
  }
}

export function removeCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffee, customer },
  }
}

export function addCustomerValuesAction(coffee: Coffee, customer: InputValues) {
  return {
    type: ActionTypes.ADD_CUSTOMER_VALUES,
    payload: { coffee, customer },
  }
}
