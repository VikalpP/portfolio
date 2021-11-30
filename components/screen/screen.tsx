import React, { CSSProperties, memo } from 'react'
import { Children } from '../../utils'
import { useScrollRetention } from './scroll-retention'

interface Props {
  children: Children
}

export const Screen = memo(({ children }: Props) => {
  const ref = useScrollRetention()

  const styles: CSSProperties = {
    width: '100%',
    height: '100vh',
    scrollSnapType: 'y mandatory',
  }

  return (
    <div ref={ref} className='overflow-auto' style={styles}>
      {children}
    </div>
  )
})

Screen.displayName = 'Screen'
