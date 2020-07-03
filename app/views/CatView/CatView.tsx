import * as React from 'react'

import styles from './CatView.module.scss'
import catImage from '@/assets/cat.jpeg'

type Props = {}

export const CatView: React.FC<Props> = () => {
  return (
    <div className={styles.catWrapper}>
      <img src={catImage}/>
    </div>
  )
}