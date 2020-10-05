import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserHistory, createBrowserHistory} from 'history'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './root-reducer'
import * as rootSelectors from './root-selectors'
import * as rootActions from './root-actions'

export const history: BrowserHistory = createBrowserHistory()

const isProduction: boolean = process.env.MODE === 'production'

const middleware = applyMiddleware(
  routerMiddleware(history),
)

const store = createStore(
  createRootReducer(history),
  isProduction
    ? compose(middleware)
    : composeWithDevTools(middleware),
)

export {
  rootSelectors,
  rootActions,
}

export default store

