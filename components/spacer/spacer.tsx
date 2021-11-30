import React, { memo } from 'react'

const PADDING = {
  none: 'pa0',
  'x-small': 'pa1',
  small: 'pa2',
  normal: 'pa3',
  large: 'pa4',
  'x-large': 'pa5',
}

type Size = keyof typeof PADDING

interface Props {
  fill?: boolean
  size?: keyof typeof PADDING
  ns?: Size
  l?: Size
  m?: Size
}

export const Spacer = memo(({ fill, size = 'normal', ns, l, m }: Props) => {
  const classes = [
    fill ? 'flex-auto' : '',
    PADDING[size],
    ns ? `${PADDING[ns]}-ns` : '',
    l ? `${PADDING[l]}-l` : '',
    m ? `${PADDING[m]}-m` : '',
  ].join(' ')

  return <div className={classes}></div>
})

Spacer.displayName = 'Spacer'
