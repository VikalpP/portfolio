import React, { CSSProperties, memo } from 'react'
import { useTheme, COLOR } from '../theme'

interface Props {
  className?: string
  style?: CSSProperties
}

export const FadingOverlay = memo(({ className, style }: Props) => {
  const { getColor } = useTheme()
  const primaryColor = getColor(COLOR.PRIMARY)
  const styles: CSSProperties = {
    background: `linear-gradient(180deg, ${primaryColor} 0%, transparent 100%)`,
    ...style,
  }
  return <div className={className} style={styles} />
})

FadingOverlay.displayName = 'FadingOverlay'
