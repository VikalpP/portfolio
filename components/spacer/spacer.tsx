import React, { CSSProperties, memo, useMemo } from 'react'

const PADDING = {
  none: '0px',
  'x-small': '4px',
  small: '8px',
  normal: '16px',
  large: '32px',
  'x-large': '64px',
}

interface Props {
  fill?: boolean
  size?: keyof typeof PADDING
}

export const Spacer = memo(({ fill, size = 'normal' }: Props) => {
  const styles: CSSProperties = {
    flex: fill ? 1 : undefined,
    padding: PADDING[size],
  }
  return <div style={styles}></div>
})

Spacer.displayName = 'Spacer'
