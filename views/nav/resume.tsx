import React from 'react'
import { Button, COLOR, Spacer, Text, THEME, useTheme } from '../../components'
import DownloadIcon from './download.svg'

export function Resume() {
  const { theme } = useTheme()
  return (
    <a
      download
      className='download'
      href='https://drive.google.com/uc?id=1cYWnjTmIAu4E8Ioq9dqEhzDwFAhMlFbJ&export=download'
    >
      <Button theme={COLOR.ACCENT} rounded>
        <DownloadIcon />
        <Spacer size='x-small' />
        <Text color={theme === THEME.DARK ? COLOR.PRIMARY : COLOR.SECONDARY} fontSize={16}>
          Resume
        </Text>
      </Button>
    </a>
  )
}
