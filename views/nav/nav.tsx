import React from 'react'
import DownloadIcon from './download.svg'
import { Button, COLOR, Logo, Spacer, Stack, Text } from '../../components'

export function Nav() {
  return (
    <Stack fillHorizontal alignMiddle padding='large x-large'>
      <Logo />
      <Spacer size='small' />
      <Text size='x-large'>Vikalp</Text>

      <Spacer size='large' />
      <Spacer size='large' />
      <Text fontFamily='Poppins' thin>
        +91 86906 50665
      </Text>

      <Spacer size='normal' />
      <Stack opacity={0.5}>
        <Text fontFamily='Poppins' thin>
          /
        </Text>
      </Stack>

      <Spacer size='normal' />
      <Text fontFamily='Poppins' thin>
        <a href='mailto:vikalppanseriya@gmail.com'>vikalppanseriya@gmail.com</a>
      </Text>

      <Spacer fill />
      <Button theme={COLOR.ACCENT} rounded>
        <DownloadIcon />
        <Spacer size='x-small' />
        <Text color={COLOR.PRIMARY}>Resume</Text>
      </Button>
    </Stack>
  )
}
