import * as React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {selectCounter} from '@/store/root-selectors'
import {increment, incrementAsync} from '@/store/features/counters/actions'

import './Counter.css'

type CounterProps = {
  label: string
}

export const Counter: React.FC<CounterProps> = (props) => {
  const {
    label,
  } = props

  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <div className="counter">
        <span>
          {label}: {counter}
        </span>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(incrementAsync())}>
        Increment async
      </button>
    </div>
  )
}
