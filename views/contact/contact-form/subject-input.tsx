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
      <Stack horizontal='ns' verticalAlign='middle'>
        <Text fontSize={18} style={styles.title}>
          Subject
        </Text>

        <Spacer size='small' ns='normal' />
        <Stack horizontal verticalAlign='middle' visible='ns' hidden>
          <Dash />
          <Spacer l='large' />
        </Stack>

        <TextInput fontSize={24} resizeAsYouType onChange={onChange} />
      </Stack>
    </label>
  )
}
