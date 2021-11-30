import React, { memo } from 'react'
import { COLOR, useTheme } from '../../../components'

export const Dash = memo(() => {
  const { getColor } = useTheme()
  return (
    <div
      className='ba br-pill'
      style={{
        minWidth: 80,
        width: 80,
        height: 0,
        opacity: 0.7,
        borderColor: getColor(COLOR.SECONDARY),
      }}
    />
  )
})
Dash.displayName = 'Dash'
