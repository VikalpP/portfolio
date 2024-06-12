import React from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../../components'

export function RetainitExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          JAN 2023 - JUN 2024
        </Text>
      </Stack>

      <Text fontSize={30} color={COLOR.ACCENT} lineHeight={1.6}>
        Retainit
      </Text>
      <Text thin fontSize={18}>
        Full Stack Developer (Remote)
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Pioneered an AI-powered quiz-generation platform, enhancing knowledge retention rates by
            40% and driving a 70% increase in active user participation.
          </li>
          <li>
            Collaborated with the designer team to redesign the mobile onboarding process, leading
            to 60% improvement in a successful user onboarding; improving the retention and user
            experience by 20%.
          </li>
          <li>
            Automated iOS / Android app releases, boosting deployments frequency by 60% and saving
            30+ engineer hours monthly.
          </li>
          <li>Implemented payment systems using Stripe with Apple Pay & Google Pay.</li>
          <li>
            Swiftly learned and delivered features in Objective-C and Java; achieving a 70% better
            precision for key components.
          </li>
          <li>
            Introduced and integrated <ExternalLink url='https://trpc.io/'>tRPC</ExternalLink>;
            reducing bug incidence by 40% and improving team efficiency by 25%.
          </li>
          <li>Tech Stack: Typescript, React Native, Next.js, Node.js, MongoDB, Plasmo, tRPC.</li>
        </ul>
      </Text>
    </Stack>
  )
}
