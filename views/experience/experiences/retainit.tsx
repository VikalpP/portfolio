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
            Pioneered an AI-powered platform that transforms any online media into interactive
            quizzes, enhancing knowledge retention rates by 40% and driving a 70% increase in active
            user participation.
          </li>
          <ul>
            <li>
              Acknowledged by 3B1B (
              <ExternalLink url='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw/community?lb=Ugkxxfyk9ZSw_nMK8Hmw4SMS0JamYdBDeehg'>
                Post-1
              </ExternalLink>
              ,
              <ExternalLink url='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw/community?lb=Ugkxyua0vH-aEqKbAP7c1Gjzv2abyf9zU1oL'>
                Post-2
              </ExternalLink>
              ,{' '}
              <ExternalLink url='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw/community?lb=Ugkxou-s3_RKyvmklf2jzPKbCN8q7_S9wHyh'>
                Post-3
              </ExternalLink>
              ) and Steve Mould (
              <ExternalLink url='https://www.youtube.com/post/UgkxAuZWP5nvQPh8s63gWtVbFnqoxRZpGO99'>
                Post-1
              </ExternalLink>
              ,{' '}
              <ExternalLink url='https://www.youtube.com/post/Ugkx-SFigRDdNhhY4uausxGbmVBGZbeoJT9K'>
                Post-2
              </ExternalLink>
              ) on YouTube.
            </li>
          </ul>
          <li>
            Collaborated with designers and CEO to redesign the mobile onboarding process, leading
            to 60% improvement in a successful user onboarding; improving the retention and user
            experience by 20%.
          </li>
          <li>
            Automated iOS / Android app releases, boosting deployments frequency by 60% and saving
            30+ engineer hours monthly.
          </li>
          <li>
            Implemented Stripe and In-App purchases to facilitate premium functionalities of the
            product.
          </li>
          <li>
            Swiftly learned and delivered features in Objective-C and Java; resulting in 70% better
            precision in text highlighting.
          </li>
          <li>
            Introduced and integrated <ExternalLink url='https://trpc.io/'>tRPC</ExternalLink>;
            reducing bug incidence by 40% and improving team efficiency by 25%.
          </li>
          <li>
            Implemented data import functionality from Amazon Kindle via web scraping and Pocket via
            OAuth2, enhancing user satisfaction and increasing quiz creation rates by 35%.
          </li>
          <li>Tech Stack: Typescript, React Native, Next.js, Node.js, MongoDB, Plasmo, tRPC.</li>
        </ul>
      </Text>
    </Stack>
  )
}
