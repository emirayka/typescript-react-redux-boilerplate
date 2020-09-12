import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'

import countersFeature, {CountersState} from './features/counters'

const createRootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  counters: countersFeature.reducer,
})

export type RootState = {
  // router?
  counters: CountersState
}

export default createRootReducer

