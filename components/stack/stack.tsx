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
  hidden?: boolean | BreakPoints
  visible?: boolean | BreakPoints
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
    hidden,
    visible,
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
      hidden ? `dn${hidden === true ? '' : `-${hidden}`}` : '',
      typeof visible === 'string' ? `flex-${visible}` : '',

      verticalAlign === 'middle'
        ? horizontal
          ? `items-center${horizontal === true ? '' : `-${horizontal}`}`
          : 'justify-center'
        : verticalAlign === 'bottom'
        ? horizontal
          ? `items-end${horizontal === true ? '' : `-${horizontal} justify-end`}`
          : 'justify-end'
        : '',
      horizontalAlign === 'center'
        ? horizontal
          ? `justify-center${horizontal === true ? '' : `-${horizontal} items-center`}`
          : 'items-center'
        : horizontalAlign === 'end'
        ? horizontal
          ? `justify-end${horizontal === true ? '' : `-${horizontal} items-end`}`
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
