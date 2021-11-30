import React, { memo } from 'react'
import { COLOR, ExternalLink, Spacer, Stack, useTheme } from '../../../components'
import GithubIcon from './github.svg'
import LinkedinIcon from './linkedin.svg'

const VerticalLine = memo(() => {
  const { getColor } = useTheme()
  return (
    <div
      className='ba br-pill'
      style={{
        minHeight: 160,
        width: 0,
        height: 80,
        opacity: 0.5,
        borderColor: getColor(COLOR.SECONDARY),
      }}
    />
  )
})

VerticalLine.displayName = 'VerticalLine'

export function Footer() {
  return (
    <footer>
      <Stack fillHorizontal horizontalAlign='end'>
        <ExternalLink color={COLOR.SECONDARY} url='https://github.com/VikalpP'>
          <GithubIcon />
        </ExternalLink>
        <Spacer size='normal' />

        <ExternalLink color={COLOR.SECONDARY} url='https://www.linkedin.com/in/vikalp-panseriya'>
          <LinkedinIcon />
        </ExternalLink>
        <Spacer size='small' />

        <VerticalLine />
      </Stack>
    </footer>
  )
}
