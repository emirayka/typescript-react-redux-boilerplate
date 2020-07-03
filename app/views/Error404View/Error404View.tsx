import * as React from 'react'

import styles from './Error404View.module.scss'

type Props = {}

export const Error404View: React.FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      Not found
    </div>
  )
}