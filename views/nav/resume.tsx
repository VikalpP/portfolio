import React from 'react'
import { Button, COLOR, Spacer, Text, THEME, useTheme } from '../../components'
import DownloadIcon from './download.svg'

export function Resume() {
  const { theme } = useTheme()
  return (
    <a
      download
      className='download'
      href='https://drive.google.com/uc?id=1YQ8VW1X52v7kajmXn4-v54gwR5fr6iOQ&export=download'
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
