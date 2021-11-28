import React, { CSSProperties, memo, ReactNode } from 'react';
import { getPadding, Padding } from './styles';

interface Props {
  children?: ReactNode | ReactNode[];
  fill?: boolean;
  fillHorizontal?: boolean;
  alignMiddle?: boolean;
  padding?: Padding;
  style?: CSSProperties;
  opacity?: number;
}

export const Stack = memo(
  ({
    children,
    fill,
    fillHorizontal,
    alignMiddle,
    padding,
    style,
    opacity,
  }: Props) => {
    const containerStyle: CSSProperties = {
      display: 'flex',
      width: fill || fillHorizontal ? '100%' : undefined,
      height: fill ? '100%' : undefined,
      alignItems: alignMiddle ? 'center' : undefined,
      padding: getPadding(padding),
      opacity,
      ...style,
    };

    return <div style={containerStyle}>{children}</div>;
  }
);

Stack.displayName = 'Stack';
