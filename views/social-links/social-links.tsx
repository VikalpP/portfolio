import React, { memo } from 'react'
import { COLOR, ExternalLink, Spacer, Stack, Text } from '../../components'
import GithubIcon from './github.svg'
import GmailIcon from './gmail.svg'
import LinkedinIcon from './linkedin.svg'

const Separator = memo(() => (
  <>
    <Spacer size='small' l='normal' />
    <Stack opacity={0.5}>
      <Text fontFamily='Poppins' thin fontSize={16}>
        /
      </Text>
    </Stack>
    <Spacer size='small' l='normal' />
  </>
))
Separator.displayName = 'Separator'

export function SocialLinks() {
  return (
    <Stack horizontal verticalAlign='middle'>
      <ExternalLink color={COLOR.SECONDARY} url='https://github.com/VikalpP'>
        <GithubIcon />
      </ExternalLink>
      <Separator />
      <ExternalLink color={COLOR.SECONDARY} url='https://www.linkedin.com/in/vikalp-panseriya'>
        <LinkedinIcon />
      </ExternalLink>
      <Separator />

      <Stack hidden visible='l'>
        <Text fontFamily='Poppins' thin fontSize={16}>
          <a href='mailto:vikalppanseriya@gmail.com'>vikalppanseriya@gmail.com</a>
        </Text>
      </Stack>

      <Stack hidden='l' visible>
        <ExternalLink color={COLOR.SECONDARY} url='mailto:vikalppanseriya@gmail.com'>
          <GmailIcon />
        </ExternalLink>
      </Stack>
    </Stack>
  )
}
