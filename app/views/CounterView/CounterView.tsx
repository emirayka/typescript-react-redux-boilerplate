import * as React from 'react'

import styles from './CounterView.module.scss'
import { CounterConnected } from '@/containers'

type Props = {}

export const CounterView: React.FC<Props> = () => {
  return (
    <div className={styles.counterWrapper}>
      <CounterConnected label={'Counter'} />
    </div>
  )
}