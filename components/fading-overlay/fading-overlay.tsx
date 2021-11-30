import React, { CSSProperties, memo } from 'react'
import { useTheme, COLOR } from '../theme'

interface Props {
  side?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
  style?: CSSProperties
}

const gradientDegreeBySide = {
  bottom: 0,
  left: 90,
  top: 180,
  right: 270,
}

export const FadingOverlay = memo(({ side = 'bottom', className, style }: Props) => {
  const { getColor } = useTheme()
  const primaryColor = getColor(COLOR.PRIMARY)
  const deg = gradientDegreeBySide[side]
  const styles: CSSProperties = {
    background: `linear-gradient(${deg}deg, ${primaryColor} 0%, transparent 100%)`,
    ...style,
  }
  return <div className={className} style={styles} />
})

FadingOverlay.displayName = 'FadingOverlay'
