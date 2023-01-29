import React, { memo } from 'react'
import { useTheme, COLOR } from '../theme'
import { Children } from '../../utils'

interface Props {
  url: string
  color?: COLOR
  children: Children
  ariaLabel?: string
}

export const ExternalLink = memo(({ url, color, children, ariaLabel }: Props) => {
  const { getColor } = useTheme()
  const style = { color: getColor(color || COLOR.LINK) }

  return (
    <a href={url} style={style} target='_blank' rel='noreferrer noopener' aria-label={ariaLabel}>
      {children}
    </a>
  )
})

ExternalLink.displayName = 'ExternalLink'
