import React, { CSSProperties, memo } from 'react'
import { useTheme, COLOR } from '../theme'

interface Props {
  className?: string
}

export const FadingOverlay = memo(({ className }: Props) => {
  const { getColor } = useTheme()
  const primaryColor = getColor(COLOR.PRIMARY)
  const style: CSSProperties = {
    background: `linear-gradient(180deg, ${primaryColor} 0%, transparent 100%)`,
  }
  return <div className={className} style={style}></div>
})

FadingOverlay.displayName = 'FadingOverlay'
