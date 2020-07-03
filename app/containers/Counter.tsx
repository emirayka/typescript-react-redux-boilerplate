import * as React from 'react'
import * as Redux from 'redux'

import {useDispatch, useSelector} from 'react-redux'

import {Counter} from '../components'

import {
  countersActions,
} from '@/store/features/counters'

type Props = {
  label: string
}

import {RootState} from '../types'

export const CounterConnected: React.FC<Props> = (props) => {
  const dispatch: Redux.Dispatch = useDispatch()
  const state: any = useSelector<RootState>((state: RootState) => state)

  const {
    label
  } = props
  const counter: number = state.counters.counter
  const onIncrement = () => dispatch(countersActions.increment())
  const onIncrementAsync = () => dispatch(countersActions.incrementAsync())

  return (
    <Counter
      label={label}
      counter={counter}
      onIncrement={onIncrement}
      onIncrementAsync={onIncrementAsync}
    />
  )
}
