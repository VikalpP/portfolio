import React from 'react'
import { Spacer, Stack, Text } from '../../components'
import { Section } from '../section'
import { ContactForm } from './contact-form/contact-form'
import { Footer } from './footer'

export function Contact() {
  return (
    <Section title='Contact'>
      <Stack fill horizontalAlign='center' padding='large'>
        <Stack fill maxWidth='large'>
          <Text fontSize={48} fontFamily='Righteous'>{`Let's Connect`}</Text>
          <Spacer size='large' />
          <ContactForm />
        </Stack>
      </Stack>

      <Footer />
    </Section>
  )
}
