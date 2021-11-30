import React from 'react'
import { COLOR, Spacer, Stack, Text, TextSwapping } from '../../components'
import { Section } from '../section'
import styles from './intro.module.css'

export function Intro() {
  return (
    <Section>
      <div className={styles.wave} />

      <Stack className='relative' horizontal='ns' fill verticalAlign='middle'>
        <Spacer size='x-large' ns='none' />
        <Spacer size='x-large' ns='none' />
        <Text className='f-4-l f1-m f2_5'>👋 &nbsp;</Text>

        <Stack fillHorizontal>
          <Text fontFamily='M PLUS Rounded 1c' className='f-4-l f1-m f2_5'>
            <TextSwapping>{['Hi', 'Hello', 'Hola', 'Bonjour']}</TextSwapping>
            <Spacer size='normal' ns='none' />

            <Stack horizontal='ns'>
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
