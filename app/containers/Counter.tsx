import * as Types from '../types'
import {connect} from 'react-redux'
import {Counter} from '../components'

import {
  countersActions,
  countersSelectors
} from '../features/counters'

const mapStateToProps = (state: Types.RootState) => ({
  counter: countersSelectors.getCounter(state.counters)
})

const dispatchProps = {
  onIncrement: () => countersActions.increment()
}

export const CounterConnected = connect(
  mapStateToProps,
  dispatchProps
)(Counter)
