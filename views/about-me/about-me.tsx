import Image from 'next/image'
import { Spacer, Stack, Text } from '../../components'
import myPhoto from '../../public/images/my-photo.webp'
import { Section } from '../section'

const yearInMs = 1000 * 3600 * 24 * 30 * 12

export function AboutMe() {
  const experienceStartDate = new Date(2019, 6)
  const currentYear = new Date()
  const experienceYears = Math.floor(
    (currentYear.getTime() - experienceStartDate.getTime()) / yearInMs,
  )

  return (
    <Section title='About'>
      <Spacer size='normal' l='none' />
      <Stack horizontal='l' fill>
        <Stack fill className='relative'>
          <Image objectFit='contain' objectPosition='bottom' src={myPhoto} alt={`Vikalp's Photo`} />
        </Stack>
        <Stack fill='l' horizontal verticalAlign='middle' padding='large none'>
          <Spacer size='none' ns='normal' />

          <Stack fillHorizontal>
            <Text italic thin className='f3-ns f4' lineHeight={1.2} left='l' center='m' right>
              Vikalp is a Software Engineer with {experienceYears}+ years of experience.
              <Spacer size='small' l='normal' />
              He’s a active learners. — Thirsty for latest tech solutions and eager to use them
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
