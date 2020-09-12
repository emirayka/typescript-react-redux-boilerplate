import * as React from 'react'

import './CatView.css'
import catImage from '@/assets/cat.jpeg'

type Props = {}

export const CatView: React.FC<Props> = () => {
  return (
    <div className="cat-wrapper">
      <img src={catImage}/>
    </div>
  )
}