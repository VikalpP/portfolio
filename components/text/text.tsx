import React, { CSSProperties, memo } from 'react';
import { Children } from '../../utils';
import { COLOR, useTheme } from '../theme';

const FONT_SIZE = {
  small: 12,
  normal: 16,
  large: 20,
  'x-large': 24,
};

interface Props {
  children: string | Children;
  size?: keyof typeof FONT_SIZE;
  fontFamily?: 'Poppins' | 'Rounded Mplus 1c';
  thin?: boolean;
  color?: COLOR;
}

export const Text = memo(
  ({
    size = 'normal',
    children,
    fontFamily,
    thin,
    color = COLOR.SECONDARY,
  }: Props) => {
    const { theme, getColor } = useTheme();

    const styles: CSSProperties = {
      fontSize: FONT_SIZE[size],
      fontFamily,
      fontWeight: thin ? '200' : undefined,
      color: getColor(color),
    };

    return <span style={styles}>{children}</span>;
  }
);

Text.displayName = 'Text';
