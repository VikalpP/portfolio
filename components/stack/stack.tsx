import React, { CSSProperties, memo, ReactNode } from 'react'
import { getMaxWidth, getPadding, MaxWidth, Padding } from './styles'

interface Props {
  children?: ReactNode | ReactNode[]
  horizontal?: boolean
  fill?: boolean
  fillHorizontal?: boolean
  verticalAlign?: 'middle' | 'bottom'
  horizontalAlign?: 'center' | 'end'
  padding?: Padding
  style?: CSSProperties
  className?: string
  opacity?: number
  maxWidth?: MaxWidth
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
  }: Props) => {
    const containerStyle: CSSProperties = {
      padding: getPadding(padding),
      opacity,
      ...style,
    }

    const classes = [
      'flex',
      horizontal ? 'flex-row' : 'flex-column',
      fill ? 'w-100 flex-auto' : fillHorizontal ? 'w-100' : '',
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
