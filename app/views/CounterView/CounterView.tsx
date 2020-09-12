import * as React from 'react'

import './CounterView.css'
import { Counter } from '@/components'

type Props = {}

export const CounterView: React.FC<Props> = () => {
  return (
    <div className="counter-wrapper">
      <Counter label={'Counter'} />
    </div>
  )
}