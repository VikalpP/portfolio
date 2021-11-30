import React, { useState } from 'react'
import { FadingOverlay, Selector, Spacer, Stack } from '../../components'
import { Section } from '../section'
import { ExperienceDetails } from './experience-details'

export enum ExperienceType {
  Highlighter,
  OpenSource,
  FreeLancing,
  MJInfotech,
}

const experiences = [
  { key: ExperienceType.Highlighter, title: 'Highlighter' },
  { key: ExperienceType.OpenSource, title: 'Open Source' },
  { key: ExperienceType.FreeLancing, title: 'Freelancing' },
  { key: ExperienceType.MJInfotech, title: 'MJ Infotech' },
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType>(experiences[0].key)
  return (
    <Section title='Experience'>
      <Stack fill padding='none large' horizontalAlign='center'>
        <Stack className='relative' horizontal fill maxWidth='normal' padding='none large'>
          <Spacer size='none' l='normal' />

          <div className='flex flex-column' style={{ minWidth: 160 }}>
            <Spacer size='x-large' />
            <Selector items={experiences} onSelect={setSelectedExperience} />
          </div>
          <Spacer size='large' />
          <Stack fillHorizontal className='overflow-y-auto no-scrollbar'>
            <Spacer size='x-large' />
            <ExperienceDetails selectedExperience={selectedExperience} />
            <Spacer size='x-large' />
            <FadingOverlay side='top' className='w-100 h4 absolute top-0' />
            <FadingOverlay side='bottom' className='w-100 h4 absolute bottom-0' />
          </Stack>

          <Spacer size='none' l='normal' />
        </Stack>
      </Stack>
    </Section>
  )
}
