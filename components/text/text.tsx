import React, { CSSProperties, memo } from 'react'
import { Children } from '../../utils'
import { COLOR, useTheme } from '../theme'

export interface TextProps {
  children: string | Children
  fontSize?: number
  fontFamily?: 'Poppins' | 'M PLUS Rounded 1c'
  thin?: boolean
  color?: COLOR
}

export const Text = memo(
  ({ fontSize, children, fontFamily, thin, color = COLOR.SECONDARY }: TextProps) => {
    const { getColor } = useTheme()

    const styles: CSSProperties = {
      fontSize,
      fontFamily: fontFamily ? `"${fontFamily}"` : undefined,
      fontWeight: thin ? '200' : undefined,
      color: getColor(color),
    }

    return <span style={styles}>{children}</span>
  },
)

Text.displayName = 'Text'
