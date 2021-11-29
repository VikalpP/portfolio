import React, { memo } from 'react'
import { useTheme, COLOR } from '../theme'
import { Children } from '../../utils'

interface Props {
  url: string
  children: Children
}

export const ExternalLink = memo(({ url, children }: Props) => {
  const { getColor } = useTheme()
  const style = { color: getColor(COLOR.LINK) }

  return (
    <a href={url} style={style} target='_blank' rel='noreferrer noopener'>
      {children}
    </a>
  )
})

ExternalLink.displayName = 'ExternalLink'
