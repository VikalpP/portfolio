import React from 'react'
import { Spacer, Stack, Text } from '../../../../components'

export function Knowabouts() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>Knowabouts</Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An innovative “inverse social media” platform where your known ones create your profile by
        sharing what they “Know about” you.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Worked in a distributed system with 15+ micro-services build around GraphQL federation
            architecture.
          </li>
          <li>
            Managed authentication and contact management services end to end to ensure smooth user
            onboarding, user authentication and security management.
          </li>
          <li>
            Integrated UI components shared between react web &amp; react-native client
            applications.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
