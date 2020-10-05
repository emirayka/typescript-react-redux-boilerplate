import {action} from 'typesafe-actions'
import {ADD, INCREMENT} from './constants'

export const increment = () => action(INCREMENT)

export type AddPayload = {
  amount: number
}
export const add = (payload: AddPayload) => action(ADD, payload)


