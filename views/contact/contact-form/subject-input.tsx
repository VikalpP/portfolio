import React, { CSSProperties } from 'react'
import { Spacer, Stack, Text, TextInput } from '../../../components'
import { Dash } from './dash-view'

interface Props {
  onChange?: (value: string) => void
}

const styles: Record<string, CSSProperties> = {
  title: { minWidth: 64 },
}

export function SubjectInput({ onChange }: Props) {
  return (
    <label>
      <Stack horizontal verticalAlign='middle'>
        <Text fontSize={18} style={styles.title}>
          Subject
        </Text>
        <Spacer />
        <Dash />
        <Spacer l='large' />
        <TextInput fontSize={24} resizeAsYouType onChange={onChange} />
      </Stack>
    </label>
  )
}
