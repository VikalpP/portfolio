import React from 'react'
import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

export function BookClub() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>Highlighter (Book Club)</Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An iOS app for book readers to highlight quotes from any book and share them in the book
        clubs on Highlighter.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Tweaked text highlighting algorithm for an intelligent and intuitive way of highlighting
            utilizing Firebase OCR, increasing user retention by 10%.
          </li>
          <li>
            Single-handedly converted the Highlighter desktop-focused website into fully mobile
            responsive, which increased the overall daily audience by 200%.
          </li>
          <li>
            Engineered an on-request image generation service for{' '}
            <ExternalLink url='https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards'>
              Twitter card previews.
            </ExternalLink>
            ; saving 20+ hours monthly for designers.
          </li>
          <li>Tech Stack: React, React Native, Apollo GraphQL, Express, GraphQL.</li>
        </ul>
      </Text>
    </Stack>
  )
}
