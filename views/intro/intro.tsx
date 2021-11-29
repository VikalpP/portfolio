import React from 'react'
import { COLOR, Spacer, Stack, Text, TextSwapping } from '../../components'
import { Section } from '../section'
import styles from './intro.module.css'

export function Intro() {
  return (
    <Section>
      <div className={styles.wave} />

      <Stack className='relative' horizontal fill verticalAlign='middle'>
        <Text fontSize={64}>👋 &nbsp;</Text>

        <Stack fillHorizontal>
          <Text fontFamily='M PLUS Rounded 1c' fontSize={64}>
            <TextSwapping>{['Hi', 'Hello', 'Hola', 'Bonjour']}</TextSwapping>
            <Stack horizontal>
              <Text>I&apos;m&nbsp;</Text>
              <TextSwapping color={COLOR.ACCENT}>
                {['Vikalp', 'Full Stack Developer', 'From India']}
              </TextSwapping>
            </Stack>
          </Text>
        </Stack>
      </Stack>
    </Section>
  )
}
