import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import createPersistedState from 'use-persisted-state'
import { FadingOverlay, Selector, Spacer, Stack } from '../../components'
import { isSmallDevice } from '../../utils'
import { Section } from '../section'
import { ExperienceDetails } from './experience-details'

const useSelectedExperienceState = createPersistedState('selectedExperience')

export enum ExperienceType {
  MightyByte = 'MightyByte',
  Highlighter = 'Highlighter',
  OpenSource = 'OpenSource',
  FreeLancing = 'FreeLancing',
  MJInfotech = 'MJInfotech',
}

const experiences = [
  { key: ExperienceType.MightyByte, title: 'MightyByte' },
  { key: ExperienceType.Highlighter, title: 'Highlighter' },
  { key: ExperienceType.OpenSource, title: 'Open Source' },
  { key: ExperienceType.FreeLancing, title: 'Freelancing' },
  { key: ExperienceType.MJInfotech, title: 'MJ Infotech' },
]

export function Experience() {
  const { push } = useRouter()
  const [selectedExperience, setSelectedExperience] = useSelectedExperienceState<ExperienceType>(
    experiences[0].key,
  )

  const onSelect = useCallback(
    (key: ExperienceType) => {
      setSelectedExperience(key)
      if (isSmallDevice()) push(`/experience/${key}`)
    },
    [push, setSelectedExperience],
  )

  return (
    <Section title='Experience'>
      <Stack fill padding='none large' horizontalAlign='center'>
        <Stack className='relative' horizontal fill maxWidth='normal' padding='none large'>
          <Spacer size='none' l='normal' />

          <div className='flex flex-column' style={{ minWidth: 160 }}>
            <Spacer size='x-large' />
            <Selector items={experiences} selectedItem={selectedExperience} onSelect={onSelect} />
          </div>
          <Spacer size='large' />
          <Stack visible='ns' hidden fillHorizontal className='overflow-y-auto no-scrollbar'>
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
