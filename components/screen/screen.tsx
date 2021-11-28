import React, { CSSProperties, memo } from 'react';
import { Children } from '../../utils';

interface Props {
  children: Children;
}

export const Screen = memo(({ children }: Props) => {
  const styles: CSSProperties = {
    background: '#000',
    width: '100%',
    minHeight: '100vh',
  };
  return <div style={styles}>{children}</div>;
});

Screen.displayName = 'Screen';
