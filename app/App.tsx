import * as React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {BrowserHistory} from 'history'

import './App.css'

import {
  CatView,
  CounterView,
  Error404View,
} from './views'
import {ReactReduxContextValue} from 'react-redux'
import { Context } from 'react'

type Props = {
  context: Context<ReactReduxContextValue>
  history: BrowserHistory
}

export const App: React.FC<Props> = (props) => {
  return (
    <div className="app">
      <ConnectedRouter
        history={props.history}
        context={props.context}
      >
        <Switch>
          <Route path={'/cat'}>
            <CatView />
          </Route>
          
          <Route exact path={'/'}>
            <CounterView />
          </Route>
          
          <Route>
            <Error404View />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  )
}
