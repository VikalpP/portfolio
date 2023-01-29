import React from 'react'
import { PopupButton } from 'react-calendly'
import { COLOR, Spacer, Stack, Text, useTheme } from '../../components'
import Image from 'next/image'

export function ScheduleCall() {
  const { getColor } = useTheme()
  const content = (
    <Stack horizontal verticalAlign='middle'>
      <Stack className='flex relative h1_5 w1_5'>
        <Image layout='fill' src='/images/zoom.webp' alt='Zoom' objectFit='contain' />
      </Stack>
      <Spacer size='x-small' />
      <Text className='flex-shrink-0'>Catchup on a call?</Text>
    </Stack>
  )

  return (
    <Stack horizontal verticalAlign='middle'>
      <PopupButton
        text={content as any}
        className='br-pill flex pv2 ph3 pointer ba'
        styles={{
          color: getColor(COLOR.SECONDARY),
          borderColor: '#468DF7',
          width: 'max-content'
        }}
        url='https://calendly.com/vikalppanseriya/20min'
      />
    </Stack>
  )
}
