import React from 'react'
import { COLOR, Spacer, Stack, Text } from '../../../../components'
import { BookClub } from './book-club'
import { Knowabouts } from './knowabouts'
import { LiveShow } from './live-show'

export function HighlighterExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          SEPT 2019 - DEC 2021
        </Text>
      </Stack>

      <Text fontSize={24} color={COLOR.ACCENT} lineHeight={1.6}>
        Highlighter Inc.
      </Text>
      <Text thin fontSize={18}>
        Full Stack Developer (Remote)
      </Text>

      <Spacer />
      <Knowabouts />

      <Spacer />
      <LiveShow />

      <Spacer />
      <BookClub />
    </Stack>
  )
}
