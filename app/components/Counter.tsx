import * as React from 'react'

import styles from './Counter.module.scss'

type Props = {
  counter: number
  label: string
  onIncrement: () => void
  onIncrementAsync: () => void
}

export const Counter: React.FC<Props> = (props) => {
  const {
    counter,
    label,
    onIncrement,
    onIncrementAsync,
  } = props

  return (
    <div className={styles.counter}>
        <span>
          {label}: {counter}
        </span>

      <button onClick={onIncrement}>
        Increment
      </button>

      <button onClick={onIncrementAsync}>
        Increment async
      </button>
    </div>
  )
}
