import React, { CSSProperties } from 'react'
import { Button, COLOR, Spacer, Stack, Text, TextArea } from '../../../components'
import { Dash } from './dash-view'

interface Props {
  onChange?: (value: string) => void
  submitDisabled?: boolean
}

const styles: Record<string, CSSProperties> = {
  title: { minWidth: 64 },
}

export function BodyInput({ onChange, submitDisabled }: Props) {
  return (
    <label className='flex w-100 flex-auto'>
      <Stack fill horizontal>
        <Stack>
          <Spacer size='large' />
          <Stack horizontal verticalAlign='middle'>
            <Text fontSize={18} style={styles.title}>
              Body
            </Text>
            <Spacer />
            <Dash />
          </Stack>
        </Stack>
        <Spacer l='large' />
        <Stack fillHorizontal maxWidth='small'>
          <TextArea rows={10} resizeAsYouType onChange={onChange} />
          <Spacer />
          <Button type='submit' theme={COLOR.ACCENT} disabled={submitDisabled}>
            Send Mail to Vikalp
          </Button>
        </Stack>
      </Stack>
    </label>
  )
}
