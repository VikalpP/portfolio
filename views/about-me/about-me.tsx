import React from 'react'
import { Spacer, Stack, Text } from '../../components'
import { Section } from '../section'
import Image from 'next/image'

export function AboutMe() {
  return (
    <Section title='About Me'>
      <Spacer size='normal' l='none' />
      <Stack horizontal='l' fill>
        <Stack fill className='relative'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition='bottom'
            src='/images/my-photo.png'
            alt={`Vikalp's Photo`}
            priority
          />
        </Stack>
        <Stack fill='l' horizontal verticalAlign='middle' padding='large none'>
          <Spacer size='none' ns='normal' />

          <Stack fillHorizontal>
            <Text italic thin className='f3-ns f4' lineHeight={1.2} left='l' center='m' right>
              Vikalp is a Software Engineer with 3+ years of experience.
              <Spacer size='small' l='normal' />
              He’s always a learners. — Thirsty for new tech solutions and eager to use them
              optimally.
              <Spacer size='small' l='normal' />
              He loves discussing clean code and solving problems.
              <Spacer size='small' l='normal' />
              When not coding, you will find him at the gym or binge-watching.
            </Text>
          </Stack>

          <Spacer size='none' ns='normal' />
        </Stack>
      </Stack>
    </Section>
  )
}
