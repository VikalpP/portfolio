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
        <Stack fill='l' verticalAlign='middle' padding='x-large'>
          <Text italic thin fontSize={24} lineHeight={1.2} center left='l'>
            Vikalp is a Software Engineer with 3+ years of experience.
            <Spacer />
            He’s always a learners. — Thirsty for new tech solutions and eager to use them
            optimally.
            <Spacer />
            He loves discussing clean code and solving problems.
            <Spacer />
            When not coding, you will find him at the gym or binge-watching.
          </Text>
        </Stack>
      </Stack>
    </Section>
  )
}
