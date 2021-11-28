import React, { CSSProperties, memo } from 'react';
import { Children } from '../../utils';
import { COLOR, useTheme } from '../theme';

interface Props {
  rounded?: boolean;
  children: Children;
  theme?: COLOR;
  onPress?: () => void;
}

export const Button = memo(({ rounded, children, theme, onPress }: Props) => {
  const { getColor } = useTheme();
  const buttonStyles: CSSProperties = {
    padding: 16,
    display: 'flex',
    borderRadius: rounded ? 9999 : undefined,
    background: getColor(theme),
  };
  return (
    <button style={buttonStyles} onClick={onPress}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
