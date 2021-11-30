import React, { CSSProperties, memo } from 'react'
import { Children } from '../../utils'
import { COLOR, useTheme } from '../theme'

export interface TextProps {
  children: string | Children
  fontSize?: number
  fontFamily?: 'Poppins' | 'M PLUS Rounded 1c' | 'Righteous'
  thin?: boolean
  italic?: boolean
  lineHeight?: number
  color?: COLOR
  className?: string
  style?: CSSProperties
}

export const Text = memo(
  ({
    fontSize,
    children,
    italic,
    fontFamily,
    thin,
    lineHeight,
    className,
    style,
    color = COLOR.SECONDARY,
  }: TextProps) => {
    const { getColor } = useTheme()

    const styles: CSSProperties = {
      fontSize,
      fontFamily: fontFamily ? `"${fontFamily}"` : undefined,
      fontWeight: thin ? '200' : undefined,
      color: getColor(color),
      fontStyle: italic ? 'italic' : undefined,
      lineHeight,
      ...style,
    }

    return (
      <span className={className} style={styles}>
        {children}
      </span>
    )
  },
)

Text.displayName = 'Text'
