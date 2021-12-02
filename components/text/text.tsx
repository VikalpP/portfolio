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
  right?: boolean | BreakPoints
  wordSpacing?: number
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
    right,
    wordSpacing,
    color = COLOR.SECONDARY,
  }: TextProps) => {
    const { getColor } = useTheme()

    const styles: CSSProperties = {
      fontSize,
      fontFamily: fontFamily ? `"${fontFamily}"` : undefined,
      fontWeight: thin ? '300' : undefined,
      color: getColor(color),
      fontStyle: italic ? 'italic' : undefined,
      lineHeight,
      wordSpacing,
      ...style,
    }

    const classes = [
      typeof center === 'boolean' ? 'tc' : typeof center === 'string' ? `tc-${center}` : '',
      typeof left === 'boolean' ? 'tl' : typeof left === 'string' ? `tl-${left}` : '',
      typeof right === 'boolean' ? 'tr' : typeof right === 'string' ? `tr-${right}` : '',
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
