import React, { CSSProperties, memo, ReactNode } from 'react'
import { getPadding, Padding } from './styles'

interface Props {
  children?: ReactNode | ReactNode[]
  horizontal?: boolean
  fill?: boolean
  fillHorizontal?: boolean
  verticalAlign?: 'middle' | 'bottom'
  alignBottom?: boolean
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
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      width: fill || fillHorizontal ? '100%' : undefined,
      height: fill ? '100%' : undefined,
      alignItems:
        verticalAlign === 'middle' ? 'center' : verticalAlign === 'bottom' ? 'end' : undefined,
      padding: getPadding(padding),
      opacity,
      ...style,
    }

    return (
      <div className={className} style={containerStyle}>
        {children}
      </div>
    )
  },
)

Stack.displayName = 'Stack'
