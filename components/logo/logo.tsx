import React, { CSSProperties, memo } from 'react'
import LogoIcon from './logo.svg'
import { COLOR, useTheme } from '../theme'

export const Logo = memo(() => {
  const { getColor } = useTheme()
  const styles: CSSProperties = {
    color: getColor(COLOR.SECONDARY),
  }
  return <LogoIcon style={styles} className='flex-shrink-0' />
})

Logo.displayName = 'Logo'
