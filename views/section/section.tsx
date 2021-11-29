import React from 'react'
import { PageTitle, Stack } from '../../components'
import { Children } from '../../utils'

interface Props {
  title?: string
  children: Children
}

export function Section({ title, children }: Props) {
  return (
    <Stack className='pt6 ph5 vh-100 flex relative overflow-hidden'>
      {title ? <PageTitle>{title}</PageTitle> : null}
      {children}
    </Stack>
  )
}
