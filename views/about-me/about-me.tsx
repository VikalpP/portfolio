import React from 'react'
import { Spacer, Stack, Text } from '../../components'
import { Section } from '../section'
import Image from 'next/image'

export function AboutMe() {
  return (
    <Section title="About Me">
      <Stack horizontal fill>
        <Stack fill className='relative'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition='bottom'
            src='/images/my-photo.png'
            alt={`Vikalp's Photo`}
          />
        </Stack>
        <Stack fill verticalAlign='middle'>
          <Text italic thin fontSize={24} lineHeight={1.2}>
            Vikalp is a Software Engineer with 3+ years of experience.
            <Spacer />
            He’s always a learners. — Thirsty for new tech solutions and eager to use them
            optimally.
            <Spacer />
            He believes in making a big impact by working at a small company, instead of making no
            impact working at big one.
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