import React from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../../components'

export function RetainitExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          JAN 2023 - PRESENT
        </Text>
      </Stack>

      <Text fontSize={24} color={COLOR.ACCENT} lineHeight={1.6}>
        Retainit
      </Text>
      <Text thin fontSize={18}>
        Full Stack Developer (Remote)
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        A Product-based company building an AI-powered platform to help users retain knowledge from
        any online media content by generating quizzes.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Automated iOS and Android releases using custom release scripts and Github actions,
            improving release frequency.
          </li>
          <li>
            Extended my expertise from a primarily JavaScript-focused skill set to efficiently learn
            and deliver features in Objective-C and Java, demonstrating adaptability and proficiency
            in cross-platform mobile development.
          </li>
          <li>
            Introduced <ExternalLink url='https://trpc.io/'>tRPC</ExternalLink> to the team,
            bolstering type-sharing between frontend and backend, resulting in streamlined API
            development and a notable reduction in bugs.
          </li>
          <li>Tech Stack: Typescript, React Native, Next.js, Node.js, MongoDB, Plasmo, tRPC.</li>
        </ul>
      </Text>
    </Stack>
  )
}
