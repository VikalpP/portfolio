import React from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../../components'

export function OpenSourceExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          JUN 2019 - AUG 2019
        </Text>
      </Stack>

      <Text fontSize={30} color={COLOR.ACCENT} lineHeight={1.6}>
        CodeceptJS
      </Text>
      <Text thin fontSize={18}>
        Open Source Contributor
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        CodeceptJS is a NodeJS testing framework for E2E testing. It abstracts browser interaction
        into simple steps which are written from a user perspective.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Implemented mocking HTTP requests by integrating{' '}
            <ExternalLink url='https://netflix.github.io/pollyjs/'>Polly JS</ExternalLink>;
            improving overall API response reliability by 25%.
          </li>
          <li>
            Introduced multithreaded testing by integrating{' '}
            <ExternalLink url='https://nodejs.org/api/worker_threads.html'>
              Node JS workers
            </ExternalLink>
            , improving the overall runtime by 70%.
          </li>
          <li>
            <ExternalLink url='https://github.com/codeceptjs/CodeceptJS/pulls?q=is%3Apr+author%3AVikalpP'>
              Check out my contributions
            </ExternalLink>
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
