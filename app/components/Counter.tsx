import * as React from 'react'

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
      <div>
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