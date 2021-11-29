import React from 'react'
import DownloadIcon from './download.svg'
import { Button, COLOR, Logo, Spacer, Stack, Text } from '../../components'

export function Nav() {
  return (
    <header className='w-100 fixed top-0'>
      <Stack horizontal fillHorizontal verticalAlign='middle' padding='large x-large'>
        <Logo />
        <Spacer size='small' />
        <Text fontSize={24}>Vikalp</Text>

        <Spacer size='large' />
        <Spacer size='large' />
        <Text fontFamily='Poppins' thin fontSize={16}>
          +91 86906 50665
        </Text>

        <Spacer size='normal' />
        <Stack opacity={0.5}>
          <Text fontFamily='Poppins' thin fontSize={16}>
            /
          </Text>
        </Stack>

        <Spacer size='normal' />
        <Text fontFamily='Poppins' thin fontSize={16}>
          <a href='mailto:vikalppanseriya@gmail.com'>vikalppanseriya@gmail.com</a>
        </Text>

        <Spacer fill />
        <Button theme={COLOR.ACCENT} rounded>
          <DownloadIcon />
          <Spacer size='x-small' />
          <Text color={COLOR.PRIMARY} fontSize={16}>
            Resume
          </Text>
        </Button>
      </Stack>
    </header>
  )
}
