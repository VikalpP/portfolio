import React from 'react'
import { Logo, Spacer, Stack, Text } from '../../components'
import { SocialLinks } from '../social-links'
import { Resume } from './resume'

export function Nav() {
  return (
    <header className='w-100 fixed top-0 z-5'>
      <Stack horizontal fillHorizontal verticalAlign='middle' padding='large'>
        <Spacer size='none' l='normal' />

        <Logo />
        <Spacer size='small' />
        <Text fontSize={24}>Vikalp</Text>

        <Spacer size='normal' l='large' />
        <Spacer size='none' ns='large' />
        <Stack hidden visible='ns'>
          <SocialLinks />
        </Stack>

        <Spacer size='small' fill />
        <Resume />
        <Spacer size='none' l='normal' />
      </Stack>
    </header>
  )
}
