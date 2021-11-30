import React, { ChangeEventHandler, CSSProperties, memo, useCallback, useRef } from 'react'
import { COLOR, useTheme } from '../theme'

interface Props {
  fontSize?: number
  resizeAsYouType?: boolean
  onChange?: (value: string) => void
}

export const TextInput = memo(({ fontSize, resizeAsYouType, onChange }: Props) => {
  const { getColor } = useTheme()
  const ref = useRef<HTMLInputElement>(null)

  const style: CSSProperties = {
    color: getColor(COLOR.SECONDARY),
    borderColor: getColor(COLOR.ACCENT),
    backgroundColor: '#ffffff1a',
    fontSize,
  }

  const resizeInputArea = useCallback(() => {
    if (!ref.current) return

    ref.current.style.width = `100%`
    const maxAvailableWidth = ref.current.clientWidth

    ref.current.style.width = `auto`
    ref.current.style.width = `${Math.min(maxAvailableWidth, ref.current.scrollWidth)}px`
  }, [])

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (resizeAsYouType) resizeInputArea()
      onChange?.(event.target.value)
    },
    [onChange, resizeAsYouType, resizeInputArea],
  )

  return (
    <input
      ref={ref}
      style={style}
      className='br3 pa3 outline-0 ba mw-100'
      type='text'
      onChange={handleOnChange}
    />
  )
})

TextInput.displayName = 'TextInput'
