import React, { memo } from 'react'
import { COLOR, useTheme } from '../../../components'

export const Dash = memo(() => {
  const { getColor } = useTheme()
  return (
    <div
      className='ba br-pill w3_5-l w2'
      style={{
        height: 0,
        opacity: 0.7,
        borderColor: getColor(COLOR.SECONDARY),
      }}
    />
  )
})
Dash.displayName = 'Dash'
