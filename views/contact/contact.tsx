import React from 'react'
import { Spacer, Stack, Text } from '../../components'
import { Section } from '../section'
import { ContactForm } from './contact-form/contact-form'

export function Contact() {
  return (
    <Section title='Contact'>
      <Spacer size='normal' />

      <Stack fill horizontal='ns'>
        <Spacer size='none' ns='large' />

        <Stack fill horizontalAlign='center' padding='normal none'>
          <Spacer size='none' ns='normal' />

          <Stack fill maxWidth='large'>
            <Text className='f1-ns f2_5' fontFamily='Righteous'>{`Let's Connect`}</Text>
            <Spacer ns='large' />
            <ContactForm />
          </Stack>
        </Stack>
        <Spacer size='small' ns='large' />

        <Spacer size='small' ns='none' />
      </Stack>
    </Section>
  )
}
