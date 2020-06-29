import * as React from 'react'

import styles from './Counter.module.scss'

type Props = {
  counter: number
  label: string
  onIncrement: () => void
}

type State = {
}

export class Counter extends React.Component<Props, State> {
  readonly state: State = {
  }

  handleOnIncrement(): void {
    this.props.onIncrement()
  }

  render(): React.ReactNode  {
    const handleOnIncrement = this.handleOnIncrement.bind(this)

    const {
      counter,
      label
    } = this.props

    return (
      <div className={styles.counter}>
        <span>
          {label}: {counter}
        </span>

        <button onClick={handleOnIncrement}>
          Increment
        </button>
      </div>
    )
  }
}
