import React, { CSSProperties, memo, ReactNode } from 'react'
import { BreakPoints } from '../../utils'
import { getMaxWidth, getMinWidth, getPadding, MaxWidth, MinWidth, Padding } from './styles'

interface Props {
  children?: ReactNode | ReactNode[]
  horizontal?: boolean | BreakPoints
  fill?: boolean | BreakPoints
  fillHorizontal?: boolean | BreakPoints
  verticalAlign?: 'middle' | 'bottom'
  horizontalAlign?: 'center' | 'end'
  padding?: Padding
  style?: CSSProperties
  className?: string
  opacity?: number
  maxWidth?: MaxWidth
  minWidth?: MinWidth
}

export const Stack = memo(
  ({
    children,
    horizontal,
    fill,
    fillHorizontal,
    verticalAlign,
    horizontalAlign,
    padding,
    style,
    className,
    opacity,
    maxWidth,
    minWidth,
  }: Props) => {
    const containerStyle: CSSProperties = {
      padding: getPadding(padding),
      opacity,
      ...style,
    }

    const classes = [
      'flex',
      typeof horizontal === 'boolean' ? 'flex-row' : 'flex-column',
      typeof horizontal === 'string' ? `flex-row-${horizontal}` : '',
      typeof fill === 'boolean' ? 'w-100 flex-auto' : '',
      typeof fill === 'string' ? `w-100-${fill} flex-auto-${fill}` : '',
      typeof fillHorizontal === 'boolean' ? 'w-100' : '',
      typeof fillHorizontal === 'string' ? `w-100-${fillHorizontal}` : '',

      verticalAlign === 'middle'
        ? horizontal
          ? 'items-center'
          : 'justify-center'
        : verticalAlign === 'bottom'
        ? horizontal
          ? 'items-end'
          : 'justify-end'
        : '',
      horizontalAlign === 'center'
        ? horizontal
          ? 'justify-center'
          : 'items-center'
        : horizontalAlign === 'end'
        ? horizontal
          ? 'justify-end'
          : 'items-end'
        : '',
      maxWidth ? getMaxWidth(maxWidth) : '',
      minWidth ? getMinWidth(minWidth) : '',
      className,
    ].join(' ')

    return (
      <div className={classes} style={containerStyle}>
        {children}
      </div>
    )
  },
)

Stack.displayName = 'Stack'
