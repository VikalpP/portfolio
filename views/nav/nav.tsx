import React from 'react'
import { Logo, Spacer, Stack, Text } from '../../components'
import { Resume } from './resume'

export function Nav() {
  return (
    <header className='w-100 fixed top-0 z-5'>
      <Stack horizontal fillHorizontal verticalAlign='middle' padding='large'>
        <Spacer size='none' l='normal' />

        <Logo />
        <Spacer size='small' />
        <Text fontSize={24}>Vikalp</Text>

        <Stack horizontal verticalAlign='middle' hidden visible='ns'>
          <Spacer size='normal' l='large' />
          <Spacer size='none' l='large' />
          <Text fontFamily='Poppins' thin fontSize={16}>
            <a href='sms:+918690650665'>+91 86906 50665</a>
          </Text>

          <Spacer size='small' l='normal' />
          <Stack opacity={0.5}>
            <Text fontFamily='Poppins' thin fontSize={16}>
              /
            </Text>
          </Stack>

          <Spacer size='small' l='normal' />
          <Text fontFamily='Poppins' thin fontSize={16}>
            <a href='mailto:vikalppanseriya@gmail.com'>vikalppanseriya@gmail.com</a>
          </Text>
        </Stack>

        <Spacer size='small' fill />
        <Resume />
        <Spacer size='none' l='normal' />
      </Stack>
    </header>
  )
}
