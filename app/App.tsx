import * as React from 'react'
import {Provider} from 'react-redux'

import store from './store'

import {CounterConnected} from './containers'

export class App extends React.Component<{}, {}> {
  render()  {
    return (
      <div>
        <Provider store={store}>
          <CounterConnected label={'Counter'}/>
        </Provider>
      </div>
    )
  }
}