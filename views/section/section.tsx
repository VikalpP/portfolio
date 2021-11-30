import React from 'react'
import { PageTitle, Stack } from '../../components'
import { Children } from '../../utils'

interface Props {
  title?: string
  children: Children
  safeArea?: boolean
}

export function Section({ title, children, safeArea = true }: Props) {
  return (
    <Stack
      horizontal
      style={{ scrollSnapAlign: 'start' }}
      className={`pt6 ${safeArea ? 'ph5' : ''} vh-100 relative overflow-hidden`}
    >
      {children}
      {title ? <PageTitle>{title}</PageTitle> : null}
    </Stack>
  )
}
