import React, { memo } from 'react'
import { useTheme, COLOR } from '../theme'
import { Children } from '../../utils'

interface Props {
  url: string
  color?: COLOR
  children: Children
}

export const ExternalLink = memo(({ url, color, children }: Props) => {
  const { getColor } = useTheme()
  const style = { color: getColor(color || COLOR.LINK) }

  return (
    <a href={url} style={style} target='_blank' rel='noreferrer noopener'>
      {children}
    </a>
  )
})

ExternalLink.displayName = 'ExternalLink'
