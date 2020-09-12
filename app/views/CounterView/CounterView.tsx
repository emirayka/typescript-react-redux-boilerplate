import * as React from 'react'

import './CounterView.css'
import { Counter } from '@/components'

export const CounterView: React.FC = () => {
  return (
    <div className="counter-wrapper">
      <Counter label={'Counter'} />
    </div>
  )
}