import React from 'react'
import { Children } from '../../utils'
import styles from './carousel.module.css'

interface Props {
  children: Children
}

export function Carousel({ children }: Props) {
  return (
    <div className='flex flex-auto relative'>
      <div
        className={`absolute top-0 left-0 h-100 flex ${styles.slideshow}`}
        style={{ width: 'max-content', maxHeight: 192 }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
