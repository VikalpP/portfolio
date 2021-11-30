import React, { CSSProperties, memo } from 'react'
import { Children } from '../../utils'
import { COLOR, useTheme } from '../theme'

interface Props {
  rounded?: boolean
  children: Children
  theme?: COLOR
  disabled?: boolean
  type?: 'button' | 'submit'
  onPress?: () => void
}

export const Button = memo(
  ({ rounded, disabled, children, theme, type = 'button', onPress }: Props) => {
    const { getColor } = useTheme()
    const buttonStyles: CSSProperties = {
      padding: 16,
      display: 'flex',
      borderRadius: rounded ? 9999 : undefined,
      background: getColor(theme),
      width: 'fit-content',
      opacity: disabled ? 0.7 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
    }
    return (
      <button
        type={type}
        className='br3'
        disabled={disabled}
        style={buttonStyles}
        onClick={onPress}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
