import React from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../../components'

export function FreelancingExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          FEB 2019 - MAR 2019
        </Text>
      </Stack>

      <Text fontSize={30} color={COLOR.ACCENT} lineHeight={1.6}>
        Self Employed
      </Text>
      <Text thin fontSize={18}>
        Freelancer
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5}>
        My Photos - An android app to organize user’s photos, videos &amp; albums.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Designed and developed UI/UX for the application in{' '}
            <ExternalLink url='https://kotlinlang.org'>Kotlin</ExternalLink>.
          </li>
          <li>
            Integrated{' '}
            <ExternalLink url='https://developer.android.com/topic/libraries/architecture/room'>
              Room
            </ExternalLink>{' '}
            for DB operations to manage favorite photos &amp; videos.
          </li>
          <li>
            Developed a custom photo feed UI similar to{' '}
            <ExternalLink url='https://masonry.desandro.com/'>Masonry</ExternalLink>.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
