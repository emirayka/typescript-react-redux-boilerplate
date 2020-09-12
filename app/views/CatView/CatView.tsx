import * as React from 'react'

import './CatView.css'
import catImage from '@/assets/cat.jpeg'

export const CatView: React.FC = () => {
  return (
    <div className="cat-wrapper">
      <img src={catImage}/>
    </div>
  )
}