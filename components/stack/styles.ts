const PADDING = {
  none: '0px',
  'x-small': '4px',
  small: '8px',
  normal: '16px',
  large: '32px',
  'x-large': '64px',
};
type PaddingSize = keyof typeof PADDING;

export type Padding = `${PaddingSize}` | `${PaddingSize} ${PaddingSize}`;

export const getPadding = (padding?: Padding) => {
  if (!padding) return undefined;
  const [paddingStart, paddingEnd] = padding?.split(' ') as PaddingSize[];
  if (!paddingEnd) return PADDING[paddingStart];
  return `${PADDING[paddingStart]} ${PADDING[paddingEnd]}`;
};
