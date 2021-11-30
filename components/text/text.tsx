import React, { CSSProperties, memo } from 'react'
import { BreakPoints, Children } from '../../utils'
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
  center?: boolean | BreakPoints
  left?: boolean | BreakPoints
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
    center,
    left,
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

    const classes = [
      typeof center === 'boolean' ? 'tc' : typeof center === 'string' ? `tc-${center}` : '',
      typeof left === 'boolean' ? 'tc' : typeof left === 'string' ? `tc-${left}` : '',
      className,
    ].join(' ')

    return (
      <span className={classes} style={styles}>
        {children}
      </span>
    )
  },
)

Text.displayName = 'Text'
