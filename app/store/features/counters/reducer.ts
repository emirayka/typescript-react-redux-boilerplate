import {combineReducers} from 'redux'
import {ActionType} from 'typesafe-actions'

import * as counters from './actions'
import {ADD, INCREMENT} from './constants'

export type CountersAction = ActionType<typeof counters>

export type CountersState = {
  readonly counter: number
}

export default combineReducers<CountersState, CountersAction>({
  counter: (state = 2, action) => {
    switch (action.type) {
      case ADD:
        return state + action.payload.amount

      case INCREMENT:
        return state + 1

      default:
        return state
    }
  }
})