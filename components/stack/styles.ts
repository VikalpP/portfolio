const PADDING = {
  none: '0px',
  'x-small': '4px',
  small: '8px',
  normal: '16px',
  large: '32px',
  'x-large': '64px',
}
type PaddingSize = keyof typeof PADDING

export type Padding = `${PaddingSize}` | `${PaddingSize} ${PaddingSize}`

export const getPadding = (padding?: Padding) => {
  if (!padding) return undefined
  const [paddingStart, paddingEnd] = padding?.split(' ') as PaddingSize[]
  if (!paddingEnd) return PADDING[paddingStart]
  return `${PADDING[paddingStart]} ${PADDING[paddingEnd]}`
}

const MAX_WIDTH = {
  'x-large': 'mw9',
  large: 'mw8',
  normal: 'mw7',
  small: 'mw6',
  'x-small': 'mw5',
  none: '',
}

export type MaxWidth = keyof typeof MAX_WIDTH
export const getMaxWidth = (maxWidth: MaxWidth) => MAX_WIDTH[maxWidth]

const MIN_WIDTH = {
  'x-large': 'min-width-9',
  large: 'min-width-8',
  normal: 'min-width-7',
  small: 'min-width-6',
  'x-small': 'min-width-5',
  none: '',
}

export type MinWidth = keyof typeof MIN_WIDTH
export const getMinWidth = (minWidth: MinWidth) => MIN_WIDTH[minWidth]
