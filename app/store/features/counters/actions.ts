import {action} from 'typesafe-actions'
import {ADD, INCREMENT, INCREMENT_ASYNC} from './constants'

export const increment = () => action(INCREMENT)
export const incrementAsync = () => action(INCREMENT_ASYNC)

export type AddPayload = {
  amount: number
}
export const add = (payload: AddPayload) => action(ADD, payload)


