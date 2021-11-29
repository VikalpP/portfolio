import React from 'react'
import { Stack } from '../../components'
import { Children } from '../../utils'

interface Props {
  children: Children
}

export function Section({ children }: Props) {
  return <Stack className='pt6 vh-100 flex' padding='none x-large'>{children}</Stack>
}
