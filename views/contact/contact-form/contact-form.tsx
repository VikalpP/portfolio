import React, { FormEventHandler, useState } from 'react'
import { Spacer, Stack } from '../../../components'
import { openInNewTab } from '../../../utils'
import { BodyInput } from './body-input'
import { SubjectInput } from './subject-input'

const MAIL_TO = 'vikalppanseriya@gmail.com'

export function ContactForm() {
  const [subject, setSubject] = useState<string>()
  const [body, setBody] = useState<string>()

  const sendMail: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    if (!subject || !body) return

    openInNewTab(
      `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    )
  }

  const disabled = !subject || !body
  return (
    <Stack fill>
      <form onSubmit={sendMail}>
        <SubjectInput onChange={setSubject} />
        <Spacer />
        <BodyInput onChange={setBody} submitDisabled={disabled} />
      </form>
    </Stack>
  )
}
