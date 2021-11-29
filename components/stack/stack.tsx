import React, { CSSProperties, memo, ReactNode } from 'react'
import { getPadding, Padding } from './styles'

interface Props {
  children?: ReactNode | ReactNode[]
  horizontal?: boolean
  fill?: boolean
  fillHorizontal?: boolean
  verticalAlign?: 'middle' | 'bottom'
  padding?: Padding
  style?: CSSProperties
  className?: string
  opacity?: number
}

export const Stack = memo(
  ({
    children,
    horizontal,
    fill,
    fillHorizontal,
    verticalAlign,
    padding,
    style,
    className,
    opacity,
  }: Props) => {
    const containerStyle: CSSProperties = {
      padding: getPadding(padding),
      opacity,
      ...style,
    }

    const classes = [
      'flex',
      horizontal ? 'flex-row' : 'flex-column',
      fill ? 'w-100 h-100' : fillHorizontal ? 'w-100' : '',
      verticalAlign === 'middle'
        ? horizontal
          ? 'items-center'
          : 'justify-center'
        : verticalAlign === 'bottom'
        ? horizontal
          ? 'items-end'
          : 'justify-end'
        : '',
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
