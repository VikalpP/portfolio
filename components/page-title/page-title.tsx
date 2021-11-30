import React, { CSSProperties, memo } from 'react'
import styles from './page-title.module.css'

interface Props {
  children: string
}

export const PageTitle = memo(({ children }: Props) => {
  const style: CSSProperties = {
    color: '#aaaaaa40',
    fontFamily: 'Righteous',
  }
  return (
    <span className={`absolute left-1 ${styles.pageTitle}`} style={style}>
      {children}
    </span>
  )
})

PageTitle.displayName = 'PageTitle'
