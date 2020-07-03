import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory, History} from 'history'
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './root-reducer'
import * as rootSelectors from './root-selectors'
import * as rootActions from './root-actions'

import rootSaga from './sagas'

export const history: History<any> = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const isProduction: boolean = process.env.MODE === 'production'

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
)

const store = createStore(
  createRootReducer(history),
  isProduction
    ? compose(middleware)
    : composeWithDevTools(middleware),
)
sagaMiddleware.run(rootSaga)

export {
  rootSelectors,
  rootActions,
}

export default store

