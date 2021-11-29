import React from 'react'
import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

export function BookClub() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={16}>Highlighter (Book Club)</Text>

      <Spacer size='small' />
      <Text thin fontSize={12} lineHeight={1.5}>
        A react-native based iOS application that allows book readers to highlight good quotes from
        the book and share them in the book clubs.
      </Text>

      <Text thin fontSize={12} lineHeight={1.5}>
        <ul className='pl3'>
          <li>
            Tweaked text highlighting algorithm for intelligent and intuitive highlighting, which
            helped to user retention to grow by 30%.
          </li>
          <li>
            Single-handedly converted the Highlighter desktop-focused website into fully mobile
            responsive, which increased the overall daily audience by 200%.
          </li>
          <li>
            Developed on-demand image generation for{' '}
            <ExternalLink url='https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards'>
              Twitter card previews.
            </ExternalLink>
          </li>
          <li>
            Integrated Analytics to understand user behavior, which helped in shaping the Product
            direction.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
