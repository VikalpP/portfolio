import React, { CSSProperties, memo } from 'react'
import { Children } from '../../utils'

interface Props {
  children: Children
}

export const Screen = memo(({ children }: Props) => {
  const styles: CSSProperties = {
    background: '#000',
    width: '100%',
    height: '100vh',
    scrollSnapType: 'y mandatory',
  }
  return (
    <div className='overflow-auto' style={styles}>
      {children}
    </div>
  )
})

Screen.displayName = 'Screen'
