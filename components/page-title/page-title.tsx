import React, { CSSProperties, memo } from 'react'

interface Props {
  children: string
}

export const PageTitle = memo(({ children }: Props) => {
  const style: CSSProperties = {
    color: '#aaaaaa40',
    top: '50%',
    fontFamily: 'Righteous',
    fontSize: 80,
    transformOrigin: '0 0',
    transform: 'rotate(270deg) translateX(-50%)',
  }
  return (
    <span className='rotate-270 absolute left-1' style={style}>
      {children}
    </span>
  )
})

PageTitle.displayName = 'PageTitle'
