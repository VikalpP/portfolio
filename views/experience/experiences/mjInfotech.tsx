import React from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../../components'

export function MJInfotechExperience() {
  return (
    <Stack fillHorizontal className='overflow-y-auto'>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          JUL 2018 - JAN 2019
        </Text>
      </Stack>

      <Text fontSize={24} color={COLOR.ACCENT} lineHeight={1.6}>
        MJ Infotech
      </Text>
      <Text thin fontSize={18}>
        Android Developer
      </Text>

      <Spacer />
      <Text thin fontSize={14} lineHeight={1.5}>
        MJ Infotech is a mobile app development company.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Increased company revenues by 10% by implementing a REST API using{' '}
            <ExternalLink url='https://expressjs.com'>ExpressJS</ExternalLink> to dynamically swap
            Google Ad’s tags across deployed applications.
          </li>
        </ul>
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5}>
        <ExternalLink url='https://play.google.com/store/apps/details?id=om.photogallery.gallery'>
          Gallery
        </ExternalLink>{' '}
        — An android application to organize user’s photos &amp; videos with over 100,000 app
        installs and a 4.4 star rating across 1,700+ reviews.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Designed and developed the entire application from scratch in{' '}
            <ExternalLink url='https://kotlinlang.org'>Kotlin</ExternalLink>.
          </li>
          <li>
            Developed custom logic to password protect photos &amp; videos so they were not
            accessible in the Android file manager or from any other apps yet were still saved on
            the device.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
