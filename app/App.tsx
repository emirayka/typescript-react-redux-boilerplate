import * as React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import { History } from 'history'

import styles from './App.module.scss'
import './App.scss'

import {
  CatView,
  CounterView,
  Error404View
} from './views'

type Props = {
  context: any
  history: History<any>
}

export const App: React.FC<Props> = (props) => {
  return (
    <div className={styles.app}>
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
