import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ReactReduxContext} from 'react-redux'

import {App} from './App'

import store, {history} from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App
      history={history}
      context={ReactReduxContext}
    />
  </Provider>,
  document.getElementById('app'),
)
