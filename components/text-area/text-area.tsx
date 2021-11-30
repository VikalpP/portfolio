import React, { ChangeEventHandler, CSSProperties, memo, useCallback, useRef } from 'react'
import { COLOR, useTheme } from '../theme'

interface Props {
  rows?: number
  fontSize?: number
  resizeAsYouType?: boolean
  onChange?: (value: string) => void
}

export const TextArea = memo(({ rows, fontSize, resizeAsYouType, onChange }: Props) => {
  const { getColor } = useTheme()
  const ref = useRef<HTMLTextAreaElement>(null)

  const style: CSSProperties = {
    color: getColor(COLOR.SECONDARY),
    borderColor: getColor(COLOR.ACCENT),
    backgroundColor: '#ffffff1a',
    resize: 'none',
    fontSize,
  }

  const resizeTextArea = useCallback(() => {
    if (!ref.current) return

    ref.current.style.height = `100%`
    const maxAvailableHeight = ref.current.clientHeight
    ref.current.style.height = `auto`
    ref.current.style.height = `${Math.min(maxAvailableHeight, ref.current.scrollHeight + 4)}px`
  }, [])

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    event => {
      if (resizeAsYouType) resizeTextArea()
      onChange?.(event.target.value)
    },
    [onChange, resizeAsYouType, resizeTextArea],
  )

  return (
    <textarea
      ref={ref}
      style={style}
      className='br3 pa3 w-100 outline-0'
      rows={rows}
      onChange={handleOnChange}
    />
  )
})

TextArea.displayName = 'TextArea'
